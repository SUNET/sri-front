import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './HostRow';

export class HostList extends _BasicEntityListParentClass {
  MODEL_NAME = 'host';
  MODEL_LIST_NAME = 'hosts';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(HostList)),
  {
    hosts: graphql`
      fragment HostList_hosts on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: HostFilter }
          orderBy: { type: HostOrderBy }
        ) {
        hosts(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "HostList_hosts", filters: []) {
          edges {
            node {
              id
              ...HostRow_host
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
      query HostListForwardQuery($count: Int!, $cursor: String, $orderBy: HostOrderBy, $filter: HostFilter) {
        ...HostList_hosts @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.hosts && props.hosts.hosts;
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
