import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

import CONFIG from '../../config';
import FilterColumns from '../FilterColumns';

import { isBrowser, isMobile } from 'react-device-detect';
import { Table } from 'react-bootstrap';

import LIST_METHODS from '../common/ListElements/ListMethods';

const { ITEMS_PER_PAGE, ALL_ITEMS } = CONFIG;

export class _BasicEntityListParentClass extends React.Component {
  MODEL_NAME = undefined;
  MODEL_LIST_NAME = undefined;
  ROW_COMPONENT = undefined;
  countRows = ITEMS_PER_PAGE;

  shouldComponentUpdate(nextProps, nextState) {
    const haveNewElements = nextProps[this.MODEL_LIST_NAME] !== null;
    return haveNewElements;
  }
  loadMore = (type) => {
    let itemsPerLoad = ITEMS_PER_PAGE;
    if (type === 'all') {
      itemsPerLoad = ALL_ITEMS;
    }
    if (!this.props.relay.hasMore()) {
      return;
    } else if (this.props.relay.isLoading()) {
      return;
    }
    this.countRows = this.countRows + itemsPerLoad;

    this.props.changeCount(this.countRows);
    this.props.relay.refetchConnection(this.countRows, null, {
      filter: this.props.currentFilters,
    });
  };

  loadLess = () => {
    this.countRows = ITEMS_PER_PAGE;
    this.props.changeCount(this.countRows);
    this.props.relay.refetchConnection(this.countRows, null, {
      filter: this.props.currentFilters,
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
    let models = this.props[this.MODEL_LIST_NAME];
    return (
      <tbody>
        {models &&
          models[this.MODEL_LIST_NAME] &&
          models[this.MODEL_LIST_NAME].edges.map(({ node }) => {
            const rowComponentProps = {
              [this.MODEL_NAME]: node,
              key: node.id,
              customer: node,
              onClick: this._handleOnClick,
              columnsVisible: this.props.columns_visible,
              showAllColumns: this.props.all_columns,
            };
            return <this.ROW_COMPONENT {...rowComponentProps} />;
          })}
      </tbody>
    );
  }

  render() {
    const { t } = this.props;
    const models = this.props[this.MODEL_LIST_NAME];
    return (
      <>
        <Table responsive={isMobile} className="model-list" borderless>
          {this.renderHeaderList()}
          {this.renderList()}
        </Table>
        {models && (
          <div className="text-right mt-1">
            {this.props.relay.hasMore() ? (
              <>
                <button onClick={() => LIST_METHODS.loadMore(null, this)} className="btn outline btn-load mr-2">
                  {t('paginator.load_more')}
                </button>

                <button onClick={() => LIST_METHODS.loadMore('all', this)} className="btn outline">
                  <i className={'fa icon-load' + (this.props.relay.isLoading() ? ' fa-spin' : '')}></i>
                  {t('paginator.load_all')}
                </button>
              </>
            ) : this.props[this.MODEL_LIST_NAME][this.MODEL_LIST_NAME].edges.length > ITEMS_PER_PAGE ? (
              <button onClick={() => LIST_METHODS.loadLess(this)} className="btn outline btn-load mr-2">
                {t('paginator.load_less')}
              </button>
            ) : null}
          </div>
        )}
      </>
    );
  }
}

export default _BasicEntityListParentClass;
