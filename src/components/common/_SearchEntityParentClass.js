// React imports
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { isBrowser } from "react-device-detect";

// GraphQL imports
import environment from "../../createRelayEnvironment";
import { QueryRenderer } from "react-relay";

// Utils
import renameKeys from "rename-keys";
import { isEmpty } from "../../utils";

// Components imports
import FilterColumnsContainer from "../../containers/FilterColumns";
import FilterRowsBlock from "../FilterRowsBlock";
import LateralSliderMenu from "../../components/LateralSliderMenu";

// Constants
import { ITEMS_PER_PAGE } from "../../config";

class _SearchEntityParentClass extends React.Component {
    MODEL_NAME = "";
    MODEL_LIST_NAME = "";
    LIST_QUERY = undefined;
    DEFAULT_COLUMNS = [];
    PATH_ENTITY = "";
    PATH_ENTITY_ID = "";

    LIST_CONTAINER = undefined;
    CREATE_COMPONENT = undefined;
    DETAIL_CONTAINER = undefined;

    state = {
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
    // lifecycle
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

    // handlers events
    handleColumnChangeOrderBy = (event, orderBy) => {
        if (event.target.checked) {
            orderBy = orderBy.concat("_ASC");
        } else {
            orderBy = orderBy.concat("_DESC");
        }

        this.setState({ orderBy: { orderBy: orderBy } });
    };
    handleOnChangeCount = (count) => {
        this.setState({ countList: this.state.countList + count });
    };
    handleOnChangeFilter = (filterValue) => {
        this.setState({
            filterValue: this.DEFAULT_COLUMNS.map((column) => {
                return { [column.value + "_contains"]: filterValue };
            })
        });
    };
    handleOnChangeOrderBy = (orderBy) => {
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
    getFilters = () => {
        const filterArrayAND = [];
        let filterArrayOR = [];
        let filters = {};

        if (!isEmpty(this.state.filterDate)) {
            filterArrayAND.push(this.state.filterDate);
        }

        if (!isEmpty(this.state.filterValue)) {
            filterArrayOR = [...filterArrayOR, ...this.state.filterValue];
        }

        if (filterArrayAND.length > 0) filters.AND = filterArrayAND;
        if (filterArrayOR.length > 0) filters.OR = filterArrayOR;
        return filters;
    };

    // renders
    renderColumnsFilter() {
        return (
            <FilterColumnsContainer
                columns={this.DEFAULT_COLUMNS}
                type="hidden-col"
                model={this.MODEL_NAME}
                classContainer="filter-columns-internal-menu"
            ></FilterColumnsContainer>
        );
    }
    renderListContainer(props, retry) {
        let listComponentProps = {
            [this.MODEL_LIST_NAME]: { ...props }
        };
        return (
            <this.LIST_CONTAINER
                {...listComponentProps}
                changeCount={this.handleOnChangeCount}
                columnChangeOrderBy={this.handleColumnChangeOrderBy}
                orderBy={this.state.orderBy.orderBy}
                defaultColumns={this.DEFAULT_COLUMNS}
                refetch={retry}
                clickInMobileShowMenu={() => {
                    this.setState({
                        openMobileFiltersPanel: !this.state.openMobileFiltersPanel
                    });
                }}
            />
        );
    }
    renderList() {
        console.log(this.props);

        return (
            <Row className="mt-3">
                <Col>
                    <QueryRenderer
                        environment={environment}
                        query={this.LIST_QUERY}
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
                        path={`${this.PATH_ENTITY}`}
                        render={() => (
                            <>
                                {isBrowser ? this.renderFilterBox() : this.renderLateralMenuWithFiltersBox()}
                                {this.renderList()}
                            </>
                        )}
                    />
                    <Route path={`${this.PATH_ENTITY}/create`} component={this.CREATE_COMPONENT} />
                    <Route path={`${this.PATH_ENTITY}/:${this.PATH_ENTITY_ID}`} component={this.DETAIL_CONTAINER} />
                </Switch>
            </section>
        );
    }
}

export default _SearchEntityParentClass;
