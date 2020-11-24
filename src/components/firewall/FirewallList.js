import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './FirewallRow';

export class FirewallList extends _BasicEntityListParentClass {
  MODEL_NAME = 'firewall';
  MODEL_LIST_NAME = 'firewalls';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(FirewallList)),
  {
    firewalls: graphql`
      fragment FirewallList_firewalls on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: FirewallFilter }
          orderBy: { type: FirewallOrderBy }
        ) {
        firewalls(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "FirewallList_firewalls", filters: []) {
          edges {
            node {
              id
              ...FirewallRow_firewall
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
      query FirewallListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: FirewallOrderBy
        $filter: FirewallFilter
      ) {
        ...FirewallList_firewalls @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.firewalls && props.firewalls.firewalls;
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
