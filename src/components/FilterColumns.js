import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

import FilterColumnsContainer from '../containers/FilterColumns';

import '../style/FilterColumns.scss';

class FilterColumns extends React.Component {
  static propTypes = {
    filterColumns: PropTypes.func,
    type: PropTypes.string,
  };

  renderMenu() {
    const { columns, type, model } = this.props;
    return <FilterColumnsContainer columns={columns} type={type} model={model}></FilterColumnsContainer>;
  }
  renderBrowserMenuCTA() {
    const { t, type } = this.props;
    return (
      <Dropdown alignRight>
        <Dropdown.Toggle as="span">
          {this.props.type === 'order' && <i className="icon-filter"></i>}
          {this.props.type === 'hidden-col' && <i className="icon-column"></i>}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {type === 'order' && (
            <>
              <Dropdown.Item>{t('filter_columns.order_desc')}</Dropdown.Item>
              <Dropdown.Item>{t('filter_columns.order_asc')}</Dropdown.Item>
            </>
          )}
          {type === 'hidden-col' && <Dropdown.Header>{t('filter_columns.header')}</Dropdown.Header>}
          <Dropdown.Divider />
          {this.renderMenu()}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  render() {
    return <div className={`filter-columns ${this.props.type}`}>{this.renderBrowserMenuCTA()}</div>;
  }
}

export default withTranslation()(FilterColumns);
