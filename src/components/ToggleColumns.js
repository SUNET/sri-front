import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

import FieldSwitch from './FieldSwitch';

import '../style/FilterColumns.scss';

class FilterColumns extends React.Component {
  static propTypes = {
    filterColumns: PropTypes.func,
    type: PropTypes.string,
  };

  cancelFilterColumns = () => {
    this.props.cancelFilterColumns(this.props.columns_visible);
  };

  applyFilterColumns = () => {
    this.props.filterColumns && this.props.filterColumns();
  };

  handleChangeColumns = (event) => {
    if (event.target.id === 'all_columns') {
      this.props.showAllColumns(this.props.columns_visible);
    } else {
      this.props.showHideColumn(event.target.id, event.target.checked);
    }
  };

  render() {
    const { t } = this.props;
    return (
      <div className={`filter-columns ${this.props.type}`}>
        <Dropdown alignRight>
          <Dropdown.Toggle as="span">
            {this.props.type === 'order' && <FontAwesomeIcon icon={faFilter} />}
            {this.props.type === 'hidden-col' && <FontAwesomeIcon icon={faBars} />}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {this.props.type === 'order' && (
              <>
                <Dropdown.Item>{t('filter_columns.order_desc')}</Dropdown.Item>
                <Dropdown.Item>{t('filter_columns.order_asc')}</Dropdown.Item>
              </>
            )}
            {this.props.type === 'hidden-col' && <Dropdown.Header>{t('filter_columns.header')}</Dropdown.Header>}
            <Dropdown.Divider />
            <div>
              {this.props.columns.map((column) => {
                return (
                  <FieldSwitch
                    key={column.value}
                    type="toggle-icon"
                    icon="check"
                    color="p-success-o"
                    classNames="off-hidden"
                    label={column.name}
                    handleChecked={(e) => {
                      this.handleChangeColumns(e);
                    }}
                    defaultValue={this.props.columns_visible[column.value]}
                    id={column.value}
                  />
                );
              })}

              <FieldSwitch
                type="toggle-icon"
                icon="check"
                color="p-success-o"
                classNames="off-hidden"
                label="All"
                forcedDefault={true}
                handleChecked={(e) => {
                  this.handleChangeColumns(e);
                }}
                defaultValue={this.props.all_columns}
                id="all_columns"
              />
            </div>
            {/*<Dropdown.Divider />
                        <div>
                            <Row>
                                <Col>
                                    <Button onClick={this.cancelFilterColumns()}>{t("actions.cancel")}</Button>
                                </Col>
                                <Col>
                                    <Button onClick={this.applyFilterColumns()}>{t("actions.accept")}</Button>
                                </Col>
                            </Row>
                        </div>*/}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default withTranslation()(FilterColumns);
