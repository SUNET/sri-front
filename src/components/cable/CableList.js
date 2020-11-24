import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { default as ROW_COMPONENT } from './CableRow';

export class CableList extends _BasicEntityListParentClass {
  MODEL_NAME = 'cable';
  MODEL_LIST_NAME = 'cables';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(CableList)),
  {
    cables: graphql`
      fragment CableList_cables on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: CableFilter }
          orderBy: { type: CableOrderBy }
        ) {
        cables(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "CableList_cables", filters: []) {
          edges {
            node {
              id
              ...CableRow_cable
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
      query CableListForwardQuery($count: Int!, $cursor: String, $orderBy: CableOrderBy, $filter: CableFilter) {
        ...CableList_cables @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.cables && props.cables.cables;
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
