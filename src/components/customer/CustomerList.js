import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './CustomerRow';

export class CustomerList extends _BasicEntityListParentClass {
  MODEL_NAME = 'customer';
  MODEL_LIST_NAME = 'customers';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(CustomerList)),
  {
    customers: graphql`
      fragment CustomerList_customers on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: CustomerFilter }
          orderBy: { type: CustomerOrderBy }
        ) {
        customers(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "CustomerList_customers", filters: []) {
          edges {
            node {
              id
              ...CustomerRow_customer
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
      query CustomerListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: CustomerOrderBy
        $filter: CustomerFilter
      ) {
        ...CustomerList_customers @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.customers && props.customers.customers;
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
