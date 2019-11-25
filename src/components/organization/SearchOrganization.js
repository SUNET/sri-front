import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";

import renameKeys from "rename-keys";

import environment from "../../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../../config";
import CreateOrganization from "./CreateOrganization";
import OrganizationDetailsContainer from "../../containers/organization/OrganizationDetails";
import OrganizationListContainer from "../../containers/organization/OrganizationList";
import Filter from "../Filter";
import OrderBy from "../OrderBy";
import RangeDayPicker from "../RangeDayPicker";
import { isEmpty } from "../../utils";

//mock - This should be returned to the backend in the future.
const defaultColumns = [
    { name: "Name", value: "name", filter: "order" },
    { name: "Organization ID", value: "organization_id", filter: "order" },
    { name: "Type", value: "type", filter: "order-filter" },
    { name: "Affiliation", value: "afffiliation" },
    { name: "Parent Organization ID", value: "parent_organization_id" }
];

const SearchOrganizationAllQuery = graphql`
    query SearchOrganizationAllQuery($count: Int!, $filter: OrganizationFilter, $orderBy: OrganizationOrderBy) {
        ...OrganizationList_organizations @arguments(count: $count, filter: $filter, orderBy: $orderBy)
        ...OrganizationList_organization_types
    }
`;

class SearchOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countList: ITEMS_PER_PAGE,
            filterValue: {},
            filterColumnValue: {},
            filterDateType: "created",
            filterDateFrom: "",
            filterDateTo: "",
            filterDate: {},
            orderBy: { orderBy: "handle_id_DESC" }
        };
    }

    // save in the state the column orderby
    handleColumnChangeOrderBy = (event, orderBy) => {
        if (event.target.checked) {
            orderBy = orderBy.concat("_ASC");
        } else {
            orderBy = orderBy.concat("_DESC");
        }

        this.setState({ orderBy: { orderBy: orderBy } });
    };

    // update state for order filter columns
    handleChangeOrderFilterColumns = (orderFilter) => {
        if (orderFilter.orderBy) {
            this.setState({ orderBy: { orderBy: orderFilter.orderBy } });
        }
        if (orderFilter.filters.length > 0) {
            this.setState({
                filterColumnValue: { [orderFilter.column + "_in"]: orderFilter.filters }
            });
        } else {
            this.setState({ filterColumnValue: {} });
        }
    };

    //save in the state the number of pages shown
    handleOnChangeCount = (count) => {
        this.setState({ countList: this.state.countList + count });
    };

    // save in the state the filter box
    // these filters cannot be generalized by backend implementation
    handleOnChangeFilter = (filterValue) => {
        this.setState({
            filterValue: [
                { name_contains: filterValue },
                { organization_id_contains: filterValue },
                { type_contains: filterValue }
            ]
        });
    };

    // save in the state the orderby
    handleOnChangeOrderBy = (orderBy) => {
        this.setState({ orderBy: { orderBy: orderBy } });
    };

    handleDateTo = (dateTo) => {
        this.setState({ filterDateTo: dateTo });
    };

    handleDateFrom = (dateFrom) => {
        this.setState({ filterDateFrom: dateFrom });
    };

    // reset the date status by clicking on the button
    handleResetDate = (from, to) => {
        this.setState({ filterDateFrom: from, filterDateto: to, filterDate: {} });
    };

    // changes the keys of the state object between created or modified
    changeFilterDateType = (event) => {
        this.setState({ filterDateType: event.target.value });
        let newfilterDate = renameKeys(this.state.filterDate, (key) => {
            return key.replace(this.state.filterDateType, event.target.value);
        });
        this.setState({ filterDate: { ...newfilterDate } });
    };

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        // updates the component if you see changes in the date status
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

    // mount the filter object to pass it to the QueryRender
    getFilters = () => {
        const filterArrayAND = [];
        let filterArrayOR = [];
        let filters = {};

        if (!isEmpty(this.state.filterDate)) {
            filterArrayAND.push(this.state.filterDate);
        }

        if (!isEmpty(this.state.filterColumnValue)) {
            filterArrayAND.push(this.state.filterColumnValue);
        }

        if (!isEmpty(this.state.filterValue)) {
            filterArrayOR = [...filterArrayOR, ...this.state.filterValue];
        }

        if (filterArrayAND.length > 0) filters.AND = filterArrayAND;
        if (filterArrayOR.length > 0) filters.OR = filterArrayOR;
        return filters;
    };

    render() {
        const { t } = this.props;
        return (
            <section className="mt-3">
                <Switch>
                    <Route
                        exact
                        path="/community/organizations"
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
                                        <Filter changeFilter={this.handleOnChangeFilter} />
                                        <OrderBy changeOrderBy={this.handleOnChangeOrderBy} />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <QueryRenderer
                                            environment={environment}
                                            query={SearchOrganizationAllQuery}
                                            variables={{
                                                count: ITEMS_PER_PAGE,
                                                ...this.state.orderBy,
                                                filter: this.getFilters()
                                            }}
                                            render={({ error, props, retry }) => {
                                                if (error) {
                                                    return <div>{error.message}</div>;
                                                } else if (props) {
                                                    return (
                                                        <OrganizationListContainer
                                                            organizations={props}
                                                            organization_types={props}
                                                            changeCount={this.handleOnChangeCount}
                                                            columnChangeOrderBy={this.handleColumnChangeOrderBy}
                                                            orderBy={this.state.orderBy.orderBy}
                                                            changeOrderFilterColumns={
                                                                this.handleChangeOrderFilterColumns
                                                            }
                                                            filterColumn={this.state.filterColumnValue.type_in}
                                                            defaultColumns={defaultColumns}
                                                            refetch={retry}
                                                        />
                                                    );
                                                }
                                                return <div>Loading</div>;
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </>
                        )}
                    />
                    <Route path="/community/organizations/create" component={CreateOrganization} />
                    <Route path="/community/organizations/:organizationId" component={OrganizationDetailsContainer} />
                </Switch>
            </section>
        );
    }
}

export default withTranslation()(withRouter(SearchOrganization));
