import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './PeeringPartnerRow';

export class PeeringPartnerList extends _BasicEntityListParentClass {
  MODEL_NAME = 'peeringPartner';
  MODEL_LIST_NAME = 'peeringPartners';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(PeeringPartnerList)),
  {
    peeringPartners: graphql`
      fragment PeeringPartnerList_peeringPartners on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: PeeringPartnerFilter }
          orderBy: { type: PeeringPartnerOrderBy }
        ) {
        peeringPartners(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "PeeringPartnerList_peeringPartners", filters: []) {
          edges {
            node {
              id
              ...PeeringPartnerRow_peeringPartner
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
      query PeeringPartnerListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: PeeringPartnerOrderBy
        $filter: PeeringPartnerFilter
      ) {
        ...PeeringPartnerList_peeringPartners
          @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.peeringPartners && props.peeringPartners.peeringPartners;
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
