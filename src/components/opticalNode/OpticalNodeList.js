import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { default as ROW_COMPONENT } from './OpticalNodeRow';

export class OpticalNodeList extends _BasicEntityListParentClass {
  MODEL_NAME = 'opticalNode';
  MODEL_LIST_NAME = 'opticalNodes';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(OpticalNodeList)),
  {
    opticalNodes: graphql`
      fragment OpticalNodeList_opticalNodes on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OpticalNodeFilter }
          orderBy: { type: OpticalNodeOrderBy }
        ) {
        opticalNodes(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OpticalNodeList_opticalNodes", filters: []) {
          edges {
            node {
              id
              ...OpticalNodeRow_opticalNode
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
      query OpticalNodeListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OpticalNodeOrderBy
        $filter: OpticalNodeFilter
      ) {
        ...OpticalNodeList_opticalNodes @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.opticalNodes && props.opticalNodes.opticalNodes;
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
