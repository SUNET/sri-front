import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { default as ROW_COMPONENT } from './OpticalMultiplexSectionRow';

export class OpticalMultiplexSectionList extends _BasicEntityListParentClass {
  MODEL_NAME = 'opticalMultiplexSection';
  MODEL_LIST_NAME = 'opticalMultiplexSections';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(OpticalMultiplexSectionList)),
  {
    opticalMultiplexSections: graphql`
      fragment OpticalMultiplexSectionList_opticalMultiplexSections on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OpticalMultiplexSectionFilter }
          orderBy: { type: OpticalMultiplexSectionOrderBy }
        ) {
        opticalMultiplexSections(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OpticalMultiplexSectionList_opticalMultiplexSections", filters: []) {
          edges {
            node {
              id
              ...OpticalMultiplexSectionRow_opticalMultiplexSection
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query OpticalMultiplexSectionListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OpticalMultiplexSectionOrderBy
        $filter: OpticalMultiplexSectionFilter
      ) {
        ...OpticalMultiplexSectionList_opticalMultiplexSections
          @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.opticalMultiplexSections && props.opticalMultiplexSections.opticalMultiplexSections;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      };
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: paginationInfo.count,
        cursor: paginationInfo.cursor,
        orderBy: fragmentVariables.orderBy,
      };
    },
  },
);
