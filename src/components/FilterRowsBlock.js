import React from "react";
import { withTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Filter from "./Filter";
import OrderBy from "./OrderBy";
import RangeDayPicker from "./RangeDayPicker";
import { isBrowser, isMobile } from "react-device-detect";

import "../style/Footer.scss";

class FilterRowsBlock extends React.Component {
    renderDateFilter() {
        const { t, changeFilterDateType, filterDateType, handleDateTo, handleDateFrom, handleResetDate } = this.props;
        return (
            <div className="data-filter-by-date">
                <div className="filter-date d-inline">
                    <div className="pretty p-default p-round">
                        <input
                            type="radio"
                            name="filterDateType"
                            checked={filterDateType === "created"}
                            value="created"
                            onChange={(e) => {
                                changeFilterDateType(e);
                            }}
                        />
                        <div className="state p-info-o">
                            <label>{t("filter.date.created")}</label>
                        </div>
                    </div>

                    <div className="pretty p-default p-round">
                        <input
                            type="radio"
                            name="filterDateType"
                            checked={filterDateType === "modified"}
                            value="modified"
                            onChange={(e) => {
                                changeFilterDateType(e);
                            }}
                        />
                        <div className="state p-info-o">
                            <label>{t("filter.date.updated")}</label>
                        </div>
                    </div>
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
        return <Filter changeFilter={this.props.handleOnChangeFilter} />;
    }
    renderOrderBy() {
        return <OrderBy changeOrderBy={this.props.handleOnChangeOrderBy} />;
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

export default withTranslation()(FilterRowsBlock);
