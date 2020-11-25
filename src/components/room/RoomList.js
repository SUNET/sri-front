import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './RoomRow';

export class RoomList extends _BasicEntityListParentClass {
  MODEL_NAME = 'room';
  MODEL_LIST_NAME = 'rooms';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(RoomList)),
  {
    rooms: graphql`
      fragment RoomList_rooms on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: RoomFilter }
          orderBy: { type: RoomOrderBy }
        ) {
        rooms(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "RoomList_rooms", filters: []) {
          edges {
            node {
              id
              ...RoomRow_room
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
      query RoomListForwardQuery($count: Int!, $cursor: String, $orderBy: RoomOrderBy, $filter: RoomFilter) {
        ...RoomList_rooms @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.rooms && props.rooms.rooms;
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
