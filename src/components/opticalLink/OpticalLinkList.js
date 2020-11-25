import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './OpticalLinkRow';

export class OpticalLinkList extends _BasicEntityListParentClass {
  MODEL_NAME = 'opticalLink';
  MODEL_LIST_NAME = 'opticalLinks';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(OpticalLinkList)),
  {
    opticalLinks: graphql`
      fragment OpticalLinkList_opticalLinks on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OpticalLinkFilter }
          orderBy: { type: OpticalLinkOrderBy }
        ) {
        opticalLinks(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OpticalLinkList_opticalLinks", filters: []) {
          edges {
            node {
              id
              ...OpticalLinkRow_opticalLink
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
      query OpticalLinkListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OpticalLinkOrderBy
        $filter: OpticalLinkFilter
      ) {
        ...OpticalLinkList_opticalLinks @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.opticalLinks && props.opticalLinks.opticalLinks;
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
