import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './PeeringGroupRow';

export class PeeringGroupList extends _BasicEntityListParentClass {
  MODEL_NAME = 'peeringGroup';
  MODEL_LIST_NAME = 'peeringGroups';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(PeeringGroupList)),
  {
    peeringGroups: graphql`
      fragment PeeringGroupList_peeringGroups on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: PeeringGroupFilter }
          orderBy: { type: PeeringGroupOrderBy }
        ) {
        peeringGroups(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "PeeringGroupList_peeringGroups", filters: []) {
          edges {
            node {
              id
              ...PeeringGroupRow_peeringGroup
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
      query PeeringGroupListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: PeeringGroupOrderBy
        $filter: PeeringGroupFilter
      ) {
        ...PeeringGroupList_peeringGroups @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.peeringGroups && props.peeringGroups.peeringGroups;
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
