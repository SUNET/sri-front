import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './RouterRow';

export class RouterList extends _BasicEntityListParentClass {
  MODEL_NAME = 'router';
  MODEL_LIST_NAME = 'routers';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(RouterList)),
  {
    routers: graphql`
      fragment RouterList_routers on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: RouterFilter }
          orderBy: { type: RouterOrderBy }
        ) {
        routers(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "RouterList_routers", filters: []) {
          edges {
            node {
              id
              ...RouterRow_router
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
      query RouterListForwardQuery($count: Int!, $cursor: String, $orderBy: RouterOrderBy, $filter: RouterFilter) {
        ...RouterList_routers @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.routers && props.routers.routers;
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
