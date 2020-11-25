import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './OpticalFilterRow';

export class OpticalFilterList extends _BasicEntityListParentClass {
  MODEL_NAME = 'opticalFilter';
  MODEL_LIST_NAME = 'opticalFilters';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(OpticalFilterList)),
  {
    opticalFilters: graphql`
      fragment OpticalFilterList_opticalFilters on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OpticalFilterFilter }
          orderBy: { type: OpticalFilterOrderBy }
        ) {
        opticalFilters(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OpticalFilterList_opticalFilters", filters: []) {
          edges {
            node {
              id
              ...OpticalFilterRow_opticalFilter
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
      query OpticalFilterListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OpticalFilterOrderBy
        $filter: OpticalFilterFilter
      ) {
        ...OpticalFilterList_opticalFilters
          @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.opticalFilters && props.opticalFilters.opticalFilters;
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
