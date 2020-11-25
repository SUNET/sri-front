import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './OpticalPathRow';

export class OpticalPathList extends _BasicEntityListParentClass {
  MODEL_NAME = 'opticalPath';
  MODEL_LIST_NAME = 'opticalPaths';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(OpticalPathList)),
  {
    opticalPaths: graphql`
      fragment OpticalPathList_opticalPaths on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: OpticalPathFilter }
          orderBy: { type: OpticalPathOrderBy }
        ) {
        opticalPaths(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "OpticalPathList_opticalPaths", filters: []) {
          edges {
            node {
              id
              ...OpticalPathRow_opticalPath
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
      query OpticalPathListForwardQuery(
        $count: Int!
        $cursor: String
        $orderBy: OpticalPathOrderBy
        $filter: OpticalPathFilter
      ) {
        ...OpticalPathList_opticalPaths @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.opticalPaths && props.opticalPaths.opticalPaths;
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
