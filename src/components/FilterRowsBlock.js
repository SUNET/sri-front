import React from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import { isBrowser, isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import Filter from './Filter';
import OrderBy from './OrderBy';
import RangeDayPicker from './RangeDayPicker';

import '../style/Footer.scss';

export class FilterRowsBlock extends React.Component {
  renderDateFilterByType(type) {
    // created or modified
    const { t, changeFilterDateType, filterDateType } = this.props;
    const isModified = type === 'modified';
    const modifiedString = 'updated';
    const typeString = isModified ? modifiedString : type;
    return (
      <div className="pretty p-default p-round" data-name={`filter-date-${type}`}>
        <input
          type="radio"
          name="filterDateType"
          checked={filterDateType === type}
          value={type}
          onChange={(e) => {
            changeFilterDateType(e);
          }}
        />
        <div className="state p-info-o">
          <label>{t(`filter.date.${typeString}`)}</label>
        </div>
      </div>
    );
  }

  renderDateFilter() {
    const { handleDateTo, handleDateFrom, handleResetDate } = this.props;
    return (
      <div className="data-filter-by-date">
        <div className="filter-date d-inline">
          {this.renderDateFilterByType('created')}
          {this.renderDateFilterByType('modified')}
        </div>

        <RangeDayPicker
          dateTo={(event) => handleDateTo(event)}
          dateFrom={(event) => handleDateFrom(event)}
          resetDate={(event) => handleResetDate(event)}
        />
      </div>
    );
  }

  renderFilterByWord() {
    const { handleOnChangeFilter, initialTextValue } = this.props;
    return <Filter initialValue={initialTextValue} changeFilter={handleOnChangeFilter} />;
  }

  renderOrderBy() {
    const { handleOnChangeOrderBy } = this.props;
    return <OrderBy changeOrderBy={handleOnChangeOrderBy} />;
  }

  renderFiltersBoxDesktop() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={7}>
          {this.renderDateFilter()}
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={5} className="mt-3 mt-xl-0">
          {this.renderFilterByWord()}
          {this.renderOrderBy()}
        </Col>
      </Row>
    );
  }

  renderFiltersBoxMobile() {
    return (
      <div>
        <Col>
          <Row className="justify-content-center">{this.renderFilterByWord()}</Row>
          <hr />
          <Row className="justify-content-center">{this.renderDateFilter()}</Row>
          <hr />
          <Row className="justify-content-center">{this.renderOrderBy()}</Row>
          <hr />
        </Col>
      </div>
    );
  }

  render() {
    return (
      <div>
        {isBrowser && this.renderFiltersBoxDesktop()}
        {isMobile && this.renderFiltersBoxMobile()}
      </div>
    );
  }
}

FilterRowsBlock.defaultProps = {
  initialTextValue: '',
};

FilterRowsBlock.propTypes = {
  handleOnChangeFilter: PropTypes.func.isRequired,
  handleOnChangeOrderBy: PropTypes.func.isRequired,
  filterDateType: PropTypes.oneOf(['created', 'modified']).isRequired,
  handleDateTo: PropTypes.func.isRequired,
  handleDateFrom: PropTypes.func.isRequired,
  handleResetDate: PropTypes.func.isRequired,
  changeFilterDateType: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  initialTextValue: PropTypes.string,
};

export default withTranslation()(FilterRowsBlock);
