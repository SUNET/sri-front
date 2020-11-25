import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './PortRow';

export class PortList extends _BasicEntityListParentClass {
  MODEL_NAME = 'port';
  MODEL_LIST_NAME = 'ports';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(PortList)),
  {
    ports: graphql`
      fragment PortList_ports on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: PortFilter }
          orderBy: { type: PortOrderBy }
        ) {
        ports(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "PortList_ports", filters: []) {
          edges {
            node {
              id
              ...PortRow_port
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
      query PortListForwardQuery($count: Int!, $cursor: String, $orderBy: PortOrderBy, $filter: PortFilter) {
        ...PortList_ports @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.ports && props.ports.ports;
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
