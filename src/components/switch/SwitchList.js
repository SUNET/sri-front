import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './SwitchRow';

export class SwitchList extends _BasicEntityListParentClass {
  MODEL_NAME = 'switch';
  MODEL_LIST_NAME = 'switchs';
  ROW_COMPONENT = ROW_COMPONENT;
}

export default createPaginationContainer(
  withTranslation()(withRouter(SwitchList)),
  {
    switchs: graphql`
      fragment SwitchList_switchs on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: SwitchFilter }
          orderBy: { type: SwitchOrderBy }
        ) {
        switchs(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "SwitchList_switchs", filters: []) {
          edges {
            node {
              id
              ...SwitchRow_switch
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
      query SwitchListForwardQuery($count: Int!, $cursor: String, $orderBy: SwitchOrderBy, $filter: SwitchFilter) {
        ...SwitchList_switchs @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.switchs && props.switchs.switchs;
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
