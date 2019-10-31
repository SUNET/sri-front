import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import renameKeys from "rename-keys";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import GroupDetailsContainer from "../containers/group/GroupDetails";
import CreateGroup from "./group/CreateGroup";
import GroupListContainer from "../containers/group/GroupList";
import Filter from "./Filter";
import OrderBy from "./OrderBy";
import RangeDayPicker from "./RangeDayPicker";
// import { RouteNotFound } from "./NotFound";

const SearchGroupAllQuery = graphql`
    query SearchGroupAllQuery($count: Int!, $filter: GroupFilter, $orderBy: GroupOrderBy) {
        ...GroupList_groups @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
`;

class SearchGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countList: ITEMS_PER_PAGE,
            filterValue: {},
            filterDateType: "created",
            filterDateFrom: undefined,
            filterDateTo: undefined,
            filterDate: {},
            orderBy: { orderBy: "handle_id_DESC" }
        };
    }

    _handleOnChangeCount = (count) => {
        this.setState({ countList: this.state.countList + count });
    };

    _handleOnChangeFilter = (filterValue) => {
        this.setState({ filterValue: { name_contains: filterValue } });
    };

    _handleOnChangeOrderBy = (orderBy) => {
        this.setState({ orderBy: { orderBy: orderBy } });
    };

    handleDateTo = (dateTo) => {
        this.setState({ filterDateTo: dateTo });
    };

    handleDateFrom = (dateFrom) => {
        this.setState({ filterDateFrom: dateFrom });
    };

    handleResetDate = (from, to) => {
        this.setState({ filterDateFrom: from, filterDateto: to, filterDate: {} });
    };

    changeFilterDateType = (event) => {
        this.setState({ filterDateType: event.target.value });
        let newfilterDate = renameKeys(this.state.filterDate, (key) => {
            return key.replace(this.state.filterDateType, event.target.value);
        });
        this.setState({ filterDate: { ...newfilterDate } });
    };

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const filterDateType = this.state.filterDateType;
        if (nextState.filterDateFrom !== undefined && this.state.filterDateFrom !== nextState.filterDateFrom) {
            this.setState({
                filterDate: { ...this.state.filterDate, [filterDateType + "_gte"]: nextState.filterDateFrom }
            });
        }
        if (nextState.filterDateTo !== undefined && this.state.filterDateTo !== nextState.filterDateTo) {
            this.setState({
                filterDate: { ...this.state.filterDate, [filterDateType + "_lte"]: nextState.filterDateTo }
            });
        }
    }

    componentWillUnmount(nextProps, nextState) {
        this.handleResetDate(undefined, undefined);
    }

    getFilters = () => {
        const filterArray = [];
        let filters = {};

        if (!(Object.keys(this.state.filterDate).length === 0 && this.state.filterDate.constructor === Object)) {
            filterArray.push(this.state.filterDate);
        }

        if (!(Object.keys(this.state.filterValue).length === 0 && this.state.filterValue.constructor === Object)) {
            filterArray.push(this.state.filterValue);
        }

        if (filterArray.length > 0) filters = { AND: filterArray };
        return filters;
    };

    createTable = () => {
        let table = [];

        for (let i = 1; i < ITEMS_PER_PAGE; i++) {
            table.push(
                <article key={i}>
                    <div></div>
                </article>
            );
        }
        return table;
    };

    render() {
        const { t } = this.props;
        return (
            <section className="mt-3">
                <Switch>
                    <Route
                        exact
                        path={`${this.props.match.url}/groups`}
                        render={() => (
                            <>
                                <Row>
                                    <Col>
                                        <div className="filter-date d-inline">
                                            <div className="pretty p-default p-round">
                                                <input
                                                    type="radio"
                                                    name="filterDateType"
                                                    checked={this.state.filterDateType === "created"}
                                                    value="created"
                                                    onChange={(e) => {
                                                        this.changeFilterDateType(e);
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
                                                    checked={this.state.filterDateType === "modified"}
                                                    value="modified"
                                                    onChange={(e) => {
                                                        this.changeFilterDateType(e);
                                                    }}
                                                />
                                                <div className="state p-info-o">
                                                    <label>{t("filter.date.updated")}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <RangeDayPicker
                                            dateTo={this.handleDateTo}
                                            dateFrom={this.handleDateFrom}
                                            resetDate={this.handleResetDate}
                                        />
                                    </Col>
                                    <Col className="text-right" sm={4}>
                                        <Filter changeFilter={this._handleOnChangeFilter} />
                                        <OrderBy changeOrderBy={this._handleOnChangeOrderBy} />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <QueryRenderer
                                            environment={environment}
                                            query={SearchGroupAllQuery}
                                            variables={{
                                                count: ITEMS_PER_PAGE,
                                                ...this.state.orderBy,
                                                filter: this.getFilters()
                                            }}
                                            render={({ error, props }) => {
                                                if (error) {
                                                    return <div>{error.message}</div>;
                                                } else if (props) {
                                                    return (
                                                        <GroupListContainer
                                                            groups={props}
                                                            changeCount={this._handleOnChangeCount}
                                                        />
                                                    );
                                                }
                                                return (
                                                    <div>
                                                        <div className="model-list default">
                                                            <div>
                                                                <div></div>
                                                            </div>
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </>
                        )}
                    />
                    <Route path={`${this.props.match.url}/groups/create`} component={CreateGroup} />
                    <Route path={`${this.props.match.url}/groups/:groupId`} component={GroupDetailsContainer} />
                </Switch>
            </section>
        );
    }
}

export default withTranslation()(withRouter(SearchGroup));
