import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { default as ROW_COMPONENT } from './ProviderRow';

export class ProviderList extends _BasicEntityListParentClass {
  MODEL_NAME = 'provider';
  MODEL_LIST_NAME = 'providers';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(ProviderList)),
  {
    providers: graphql`
      fragment ProviderList_providers on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: ProviderFilter }
          orderBy: { type: ProviderOrderBy }
        ) {
        providers(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "ProviderList_providers", filters: []) {
          edges {
            node {
              id
              ...ProviderRow_provider
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
      query ProviderListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: ProviderOrderBy
        $filter: ProviderFilter
      ) {
        ...ProviderList_providers @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.providers && props.providers.providers;
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
