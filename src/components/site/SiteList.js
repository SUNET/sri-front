import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './SiteRow';

export class SiteList extends _BasicEntityListParentClass {
  MODEL_NAME = 'site';
  MODEL_LIST_NAME = 'sites';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(SiteList)),
  {
    sites: graphql`
      fragment SiteList_sites on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: SiteFilter }
          orderBy: { type: SiteOrderBy }
        ) {
        sites(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "SiteList_sites", filters: []) {
          edges {
            node {
              id
              ...SiteRow_site
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
      query SiteListForwardQuery($count: Int!, $cursor: String, $orderBy: SiteOrderBy, $filter: SiteFilter) {
        ...SiteList_sites @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.sites && props.sites.sites;
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
