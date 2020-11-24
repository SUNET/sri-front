import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './EndUserRow';

export class EndUserList extends _BasicEntityListParentClass {
  MODEL_NAME = 'endUser';
  MODEL_LIST_NAME = 'endUsers';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(EndUserList)),
  {
    endUsers: graphql`
      fragment EndUserList_endUsers on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: EndUserFilter }
          orderBy: { type: EndUserOrderBy }
        ) {
        endUsers(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "EndUserList_endUsers", filters: []) {
          edges {
            node {
              id
              ...EndUserRow_endUser
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
      query EndUserListForwardQuery($count: Int!, $cursor: String, $orderBy: EndUserOrderBy, $filter: EndUserFilter) {
        ...EndUserList_endUsers @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.endUsers && props.endUsers.endUsers;
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
