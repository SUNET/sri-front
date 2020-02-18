import React from "react";
import { withTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import Filter from "./Filter";
import OrderBy from "./OrderBy";
import RangeDayPicker from "./RangeDayPicker";

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
                <Col>{this.renderDateFilter()}</Col>
                <Col className="text-right" sm={4}>
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
        const { browserVersion } = this.props;
        return <div>{browserVersion ? this.renderFiltersBoxDesktop() : this.renderFiltersBoxMobile()}</div>;
    }
}

export default withTranslation()(FilterRowsBlock);
