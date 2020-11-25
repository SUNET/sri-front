import _BasicEntityListParentClass from '../common/_BasicEntityListParentClass';
import React from 'react';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { default as ROW_COMPONENT } from './ODFRow';

export class ODFList extends _BasicEntityListParentClass {
  MODEL_NAME = 'odf';
  MODEL_LIST_NAME = 'odfs';
  ROW_COMPONENT = ROW_COMPONENT;
  renderList() {
    let { odfs } = this.props;

    return (
      <tbody>
        {odfs &&
          odfs.odfs &&
          odfs.odfs.edges.map(({ node }) => {
            return (
              <this.ROW_COMPONENT
                key={node.id}
                ODF={node}
                onClick={this._handleOnClick}
                columnsVisible={this.props.columns_visible}
                showAllColumns={this.props.all_columns}
              />
            );
          })}
      </tbody>
    );
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(ODFList)),
  {
    odfs: graphql`
      fragment ODFList_odfs on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: ODFFilter }
          orderBy: { type: ODFOrderBy }
        ) {
        odfs(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "ODFList_odfs", filters: []) {
          edges {
            node {
              id
              ...ODFRow_ODF
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
      query ODFListForwardQuery($count: Int!, $cursor: String, $orderBy: ODFOrderBy, $filter: ODFFilter) {
        ...ODFList_odfs @arguments(count: $count, cursor: $cursor, orderBy: $orderBy, filter: $filter)
      }
    `,
    getConnectionFromProps(props) {
      return props.ODFs && props.ODFs.ODFs;
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
