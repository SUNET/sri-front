import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './ExternalEquipmentRow';

export class ExternalEquipmentList extends _BasicEntityListParentClass {
  MODEL_NAME = 'externalEquipment';
  MODEL_LIST_NAME = 'externalEquipments';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(ExternalEquipmentList)),
  {
    externalEquipments: graphql`
      fragment ExternalEquipmentList_externalEquipments on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: ExternalEquipmentFilter }
          orderBy: { type: ExternalEquipmentOrderBy }
        ) {
        externalEquipments(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "ExternalEquipmentList_externalEquipments", filters: []) {
          edges {
            node {
              id
              ...ExternalEquipmentRow_externalEquipment
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
      query ExternalEquipmentListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: ExternalEquipmentOrderBy
        $filter: ExternalEquipmentFilter
      ) {
        ...ExternalEquipmentList_externalEquipments
          @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.externalEquipments && props.externalEquipments.externalEquipments;
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
