import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './ServiceRow';

export class ServiceList extends _BasicEntityListParentClass {
  MODEL_NAME = 'service';
  MODEL_LIST_NAME = 'services';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(ServiceList)),
  {
    services: graphql`
      fragment ServiceList_services on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: ServiceFilter }
          orderBy: { type: ServiceOrderBy }
        ) {
        services(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "ServiceList_services", filters: []) {
          edges {
            node {
              id
              ...ServiceRow_service
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
      query ServiceListForwardQuery($count: Int!, $cursor: String, $orderBy: ServiceOrderBy, $filter: ServiceFilter) {
        ...ServiceList_services @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.services && props.services.services;
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
