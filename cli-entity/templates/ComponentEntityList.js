// TODO: ORDER IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { createPaginationContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import CONFIG from '../../config';
import FilterColumns from '../FilterColumns';

import { isBrowser, isMobile } from 'react-device-detect';
import { Table } from 'react-bootstrap';

import { default as ROW_COMPONENT } from './__EntityClassName__Row';

const { ITEMS_PER_PAGE, ALL_ITEMS } = CONFIG;

export class __EntityClassName__List extends React.Component {
  MODEL_NAME = '__entityName__';
  MODEL_LIST_NAME = '__entityName__s';
  ROW_COMPONENT = ROW_COMPONENT;
  static propTypes = {
    __entityName__s: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const haveNewElements = nextProps[this.MODEL_LIST_NAME] !== null;
    return haveNewElements;
  }

  _loadMore = (type) => {
    let itemsPerLoad = ITEMS_PER_PAGE;
    if (type === 'all') {
      itemsPerLoad = ALL_ITEMS;
    }
    if (!this.props.relay.hasMore()) {
      return;
    } else if (this.props.relay.isLoading()) {
      return;
    }

    this.props.changeCount(itemsPerLoad);
    this.props.relay.loadMore(itemsPerLoad, () => {
      this.forceUpdate(); // this fixed updated props because relay doesn't do it.
    });
  };

  handleFilterColumns = () => {};

  _handleOnClick = (event, data) => {
    this.props.history.push(`${this.props.match.url}/${data.id}`);
  };

  renderFiltersColumns() {
    return (
      <div className="model-list__header-cta">
        <FilterColumns
          type="hidden-col"
          columns={this.props.defaultColumns}
          model={this.MODEL_NAME}
          filterColumns={this.handleFilterColumns}
        />
      </div>
    );
  }

  renderShowFiltersLateralPanel() {
    return (
      <div className="model-list__header-cta" onClick={this.props.clickInMobileShowMenu}>
        <i className="icon-filter"></i>
      </div>
    );
  }

  renderHeaderList() {
    return (
      <thead>
        <tr>
          {this.props.defaultColumns.map((column) => {
            // Hiding the columns passed by props
            if (this.props.columns_visible[column.value] === true || this.props.all_columns) {
              return (
                <th key={column.name}>
                  {column.filter === 'order' ? (
                    <div className="pretty custom p-icon p-toggle p-plain order-col">
                      <input
                        type="checkbox"
                        name={'orderby-' + column.value}
                        checked={this.props.orderBy.includes(column.value + '_ASC')}
                        onChange={(e) => {
                          this.props.columnChangeOrderBy(e, column.value);
                        }}
                      />
                      <div className="state p-on">
                        <label>
                          <span>{column.name}</span> <FontAwesomeIcon icon={faAngleUp} />
                        </label>
                      </div>
                      <div className="state p-off">
                        <label>
                          <span>{column.name}</span> <FontAwesomeIcon icon={faAngleDown} />
                        </label>
                      </div>
                    </div>
                  ) : (
                    column.name
                  )}
                </th>
              );
            } else {
              return null;
            }
          })}
          {isMobile && <th className="p-1">{this.renderShowFiltersLateralPanel()}</th>}
          {isBrowser && <th className="">{this.renderFiltersColumns()}</th>}
        </tr>
      </thead>
    );
  }

  renderList() {
    let { __entityName__s } = this.props;

    return (
      <tbody>
        {__entityName__s &&
          __entityName__s.__entityName__s &&
          __entityName__s.__entityName__s.edges.map(({ node }) => {
            return (
              <this.ROW_COMPONENT
                key={node.id}
                __entityName__={node}
                onClick={this._handleOnClick}
                columnsVisible={this.props.columns_visible}
                showAllColumns={this.props.all_columns}
              />
            );
          })}
      </tbody>
    );
  }

  render() {
    const { t, __entityName__s } = this.props;

    return (
      <>
        <Table responsive={isMobile} className="model-list" borderless>
          {this.renderHeaderList()}
          {this.renderList()}
        </Table>
        {__entityName__s && (
          <div className="text-right mt-1">
            {this.props.relay.hasMore() ? (
              <>
                <button onClick={() => this._loadMore()} className="btn outline btn-load mr-2">
                  {t('paginator.load_more')}
                </button>

                <button onClick={() => this._loadMore('all')} className="btn outline">
                  <i className={'fa icon-load' + (this.props.relay.isLoading() ? ' fa-spin' : '')}></i>
                  {t('paginator.load_all')}
                </button>
              </>
            ) : this.props[this.MODEL_LIST_NAME][this.MODEL_LIST_NAME].edges.length > ITEMS_PER_PAGE ? (
              <button onClick={() => this.props.refetch()} className="btn outline btn-load mr-2">
                {t('paginator.load_less')}
              </button>
            ) : null}
          </div>
        )}
      </>
    );
  }
}

export default createPaginationContainer(
  withTranslation()(withRouter(__EntityClassName__List)),
  {
    __entityName__s: graphql`
      fragment __EntityClassName__List___entityName__s on Query
        @argumentDefinitions(
          count: { type: "Int" }
          cursor: { type: "String" }
          filter: { type: __EntityClassName__Filter }
          orderBy: { type: __EntityClassName__OrderBy }
        ) {
        __entityName__s(first: $count, after: $cursor, filter: $filter, orderBy: $orderBy)
          @connection(key: "__EntityClassName__List___entityName__s", filters: []) {
          edges {
            node {
              id
              ...__EntityClassName__Row___entityName__
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
      query __EntityClassName__ListForwardQuery($count: Int!, $cursor: String, $orderBy: __EntityClassName__OrderBy) {
        ...__EntityClassName__List___entityName__s @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
      }
    `,
    getConnectionFromProps(props) {
      return props.__entityName__s && props.__entityName__s.__entityName__s;
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
