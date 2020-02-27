// React imports
import React from "react";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";

// GraphQL imports
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { QueryRenderer } from "react-relay";

// Components imports
import FilterColumnsContainer from "../../containers/FilterColumns";
import FilterRowsBlock from "../FilterRowsBlock";
import LateralSliderMenu from "../../components/LateralSliderMenu";

// Constants
import { ITEMS_PER_PAGE } from "../../config";

const MODEL_NAME = "customer";
const defaultColumns = [];
const SearchCustomerAllQuery = graphql`
    query SearchCustomerAllQuery($count: Int!, $filter: CustomerFilter, $orderBy: CustomerOrderBy) {
        ...CustomerList_customers @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
`;

class SearchCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsPerPage: ITEMS_PER_PAGE,
            countList: ITEMS_PER_PAGE,
            filterValue: {},
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
    // lifecycle
    UNSAFE_componentWillUpdate(nextProps, nextState) {}

    // handlers events
    handleColumnChangeOrderBy = (event, orderBy) => {};
    handleOnChangeCount = (count) => {};
    handleOnChangeFilter = (filterValue) => {};
    handleOnChangeOrderBy = (orderBy) => {};
    handleDateTo = (dateTo) => {};
    handleDateFrom = (dateFrom) => {};
    handleResetDate = (from, to) => {};
    changeFilterDateType = (event) => {};
    getFilters = () => {};

    // renders
    renderColumnsFilter() {}
    renderListContainer(props, retry) {
        console.log('props: ', props);
        return <></>;
    }
    renderList() {
        return (
            <Row className="mt-3">
                <Col>
                    <QueryRenderer
                        environment={environment}
                        query={SearchCustomerAllQuery}
                        variables={{
                            count: this.state.itemsPerPage,
                            ...this.state.orderBy,
                            filter: this.getFilters()
                        }}
                        render={({ error, props, retry }) => {
                            if (error) {
                                return <div>{error.message}</div>;
                            } else if (props) {
                                return this.renderListContainer(props, retry);
                            }
                            return <div>Loading</div>;
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
                        path="/network/customers"
                        render={() => (
                            <>
                                {isBrowser ? this.renderFilterBox() : this.renderLateralMenuWithFiltersBox()}
                                {this.renderList()}
                            </>
                        )}
                    />
                    {/* <Route path="/network/customers/create" component={CreateCustomer} />
                    <Route path="/network/customers/:id" component={CustomerDetailsContainer} /> */}
                </Switch>
            </section>
        );
    }
}

export default withTranslation()(withRouter(SearchCustomer));
