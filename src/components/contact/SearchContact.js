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

import CreateContactRoute from "./CreateContactRoute/CreateContactRoute";
import ContactDetailsContainer from "../../containers/contact/ContactDetails";
import ContactListContainer from "../../containers/contact/ContactList";

import LateralSliderMenu from "../../components/LateralSliderMenu";
import FilterColumnsContainer from "../../containers/FilterColumns";
import FilterRowsBlock from "../FilterRowsBlock";
import { isEmpty } from "../../utils";

import { isBrowser, isMobile } from "react-device-detect";

const defaultColumns = [
    { name: "Name", value: "name", filter: "order" },
    { name: "Organization", value: "organizations", filter: "order" },
    { name: "Roles", value: "roles", filter: "order-filter" },
    { name: "Contact Type", value: "contact_type", filter: "order" }
];

const SearchContactsAllQuery = graphql`
    query SearchContactsAllQuery($count: Int!, $filter: ContactFilter, $orderBy: ContactOrderBy) {
        ...ContactList_contacts @arguments(count: $count, filter: $filter, orderBy: $orderBy)
        ...ContactList_organization_types
        ...ContactList_roles_default
    }
`;

const MODEL_NAME = "contact";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsPerPage: ITEMS_PER_PAGE,
            countList: ITEMS_PER_PAGE,
            filterValue: {},
            filterColumnValue: {},
            filterColumnValueCallBack: [],
            filterDateType: "created",
            filterDateFrom: undefined,
            filterDateTo: undefined,
            filterDate: {},
            orderBy: { orderBy: "handle_id_DESC" },
            openMobileFiltersPanel: false
        };
        if (isMobile) {
            props.showHideColumn("name", true, MODEL_NAME);
        }
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
            const listFilter = orderFilter.filters.map((filter) => {
                return { name: filter };
            });
            /* The filter format for (contact - organization, roles) is diferent to the (organization - type)
            so it takes a callback to restore the state */
            this.setState({
                filterColumnValue: { [orderFilter.column + "_in"]: listFilter },
                filterColumnValueCallBack: orderFilter.filters
            });

            this.setState({});
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
                {
                    roles_contains: {
                        name: filterValue
                    }
                },
                {
                    organizations_contains: {
                        name: filterValue
                    }
                },
                { contact_type_contains: filterValue }
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

    renderColumnsFilter() {
        console.log(this.props);

        return (
            <FilterColumnsContainer
                columns={defaultColumns}
                type="hidden-col"
                model={MODEL_NAME}
                classContainer="filter-columns-internal-menu"
            ></FilterColumnsContainer>
        );
    }

    renderList() {
        return (
            <Row className="mt-3">
                <Col>
                    <QueryRenderer
                        environment={environment}
                        query={SearchContactsAllQuery}
                        variables={{
                            count: this.state.itemsPerPage,
                            ...this.state.orderBy,
                            filter: this.getFilters()
                        }}
                        render={({ error, props, retry }) => {
                            if (error) {
                                return <div>{error.message}</div>;
                            } else if (props) {
                                return (
                                    <ContactListContainer
                                        contacts={props}
                                        organization_types={props}
                                        roles_default={props}
                                        changeCount={this.handleOnChangeCount}
                                        columnChangeOrderBy={this.handleColumnChangeOrderBy}
                                        orderBy={this.state.orderBy.orderBy}
                                        changeOrderFilterColumns={this.handleChangeOrderFilterColumns}
                                        filterColumn={this.state.filterColumnValueCallBack}
                                        defaultColumns={defaultColumns}
                                        refetch={retry}
                                        clickInMobileShowMenu={() =>
                                            this.setState({
                                                openMobileFiltersPanel: !this.state.openMobileFiltersPanel
                                            })
                                        }
                                    />
                                );
                            }
                            return (
                                <div>
                                    {/*<div className="model-list default">
                                                            <div>
                                                                <div></div>
                                                            </div>
                                                            <div>{this.createTable()}</div>
                                                        </div>*/}
                                    <div>Loading</div>
                                </div>
                            );
                        }}
                    />
                </Col>
            </Row>
        );
    }

    renderFilterBox() {
        return (
            <FilterRowsBlock
                handleOnChangeFilter={this.handleOnChangeFilter}
                handleOnChangeOrderBy={this.handleOnChangeOrderBy}
                filterDateType={this.state.filterDateType}
                handleDateTo={this.handleDateTo}
                handleDateFrom={this.handleDateFrom}
                handleResetDate={this.handleResetDate}
                changeFilterDateType={this.changeFilterDateType}
            ></FilterRowsBlock>
        );
    }

    renderLateralMenuWithFiltersBox() {
        const { t } = this.props;
        return (
            <LateralSliderMenu
                open={this.state.openMobileFiltersPanel}
                clickInClose={() => this.setState({ openMobileFiltersPanel: false })}
                header={{
                    iconClass: "icon-filter",
                    text: t("filter.mobile.title")
                }}
                footer={{
                    accept: {
                        onClick: () => {
                            this.setState({ openMobileFiltersPanel: false });
                        },
                        text: t("actions.accept")
                    }
                }}
            >
                {this.renderFilterBox()}
                <Col>
                    <Row className="justify-content-center">{this.renderColumnsFilter()}</Row>
                    <hr />
                </Col>
            </LateralSliderMenu>
        );
    }

    render() {
        return (
            <section className="mt-3">
                <Switch>
                    <Route
                        exact
                        path="/community/contacts"
                        render={() => (
                            <>
                                {isBrowser ? this.renderFilterBox() : this.renderLateralMenuWithFiltersBox()}
                                {this.renderList()}
                            </>
                        )}
                    />
                    <Route path="/community/contacts/create" component={CreateContactRoute} />
                    <Route path="/community/contacts/:contactId" component={ContactDetailsContainer} />
                </Switch>
            </section>
        );
    }
}

export default withTranslation()(withRouter(Search));
