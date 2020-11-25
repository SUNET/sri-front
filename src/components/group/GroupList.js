import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './GroupRow';

import '../../style/ModelList.scss';

export class GroupList extends _BasicEntityListParentClass {
  MODEL_NAME = 'group';
  MODEL_LIST_NAME = 'groups';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(GroupList)),
  {
    groups: graphql`
      fragment GroupList_groups on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: GroupFilter }
          orderBy: { type: GroupOrderBy }
        ) {
        groups(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "GroupList_groups", filters: []) {
          edges {
            node {
              id
              ...GroupRow_group
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
      query GroupListForwardQuery($count: Int!, $cursor: String, $orderBy: GroupOrderBy) {
        ...GroupList_groups @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
      }
    `,
    getConnectionFromProps(props) {
      return props.groups && props.groups.groups;
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
