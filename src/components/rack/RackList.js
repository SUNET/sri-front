import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './RackRow';

export class RackList extends _BasicEntityListParentClass {
  MODEL_NAME = 'rack';
  MODEL_LIST_NAME = 'racks';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(RackList)),
  {
    racks: graphql`
      fragment RackList_racks on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: RackFilter }
          orderBy: { type: RackOrderBy }
        ) {
        racks(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "RackList_racks", filters: []) {
          edges {
            node {
              id
              ...RackRow_rack
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
      query RackListForwardQuery($count: Int!, $cursor: String, $orderBy: RackOrderBy, $filter: RackFilter) {
        ...RackList_racks @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.racks && props.racks.racks;
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
