import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { default as ROW_COMPONENT } from './SiteOwnerRow';

export class SiteOwnerList extends _BasicEntityListParentClass {
  MODEL_NAME = 'siteOwner';
  MODEL_LIST_NAME = 'siteOwners';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(SiteOwnerList)),
  {
    siteOwners: graphql`
      fragment SiteOwnerList_siteOwners on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: SiteOwnerFilter }
          orderBy: { type: SiteOwnerOrderBy }
        ) {
        siteOwners(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "SiteOwnerList_siteOwners", filters: []) {
          edges {
            node {
              id
              ...SiteOwnerRow_siteOwner
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
      query SiteOwnerListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: SiteOwnerOrderBy
        $filter: SiteOwnerFilter
      ) {
        ...SiteOwnerList_siteOwners @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.siteOwners && props.siteOwners.siteOwners;
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
