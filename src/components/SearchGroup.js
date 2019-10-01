import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import QueryLookupRenderer from "relay-query-lookup-renderer";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import { GroupDetails } from "./group";
import CreateGroupContainer from "../containers/CreateGroup";
import GroupListContainer from "../containers/GroupList";
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
            filterValue: "",
            filterDateType: "created",
            filterDateFrom: "",
            filterDateTo: "",
            filterDate: {},
            orderBy: "handle_id_DESC"
        };
    }

    _handleOnChangeCount = (count) => {
        this.setState({ countList: this.state.countList + count });
    };

    _handleOnChangeFilter = (event) => {
        this.setState({ filterValue: event.target.value });
    };

    _handleOnChangeOrderBy = (orderBy) => {
        this.setState({ orderBy: orderBy });
    };

    handleDateTo = (dateTo) => {
        this.setState({ filterDateTo: dateTo });
    };

    handleDateFrom = (dateFrom) => {
        this.setState({ filterDateFrom: dateFrom });
    };

    changeFilterDateType = (event) => {
        this.setState({ filterDateType: event.target.value });
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.state.filterDateFrom !== nextState.filterDateFrom || this.state.filterDateTo !== nextState.filterDateTo) {
            this.filterDateUpdate(nextState);
        }
    }

    filterDateUpdate = (nextState) => {
        if (nextState.filterDateFrom && nextState.filterDateTo) {
            this.setState({
                filterDate: { created_gte: nextState.filterDateFrom, created_lte: nextState.filterDateTo }
            });
            // return { created_gte: this.state.filterDateFrom, created_lte: this.state.filterDateTo };
        } else if (nextState.filterDateFrom) {
            this.setState({ filterDate: { created_gte: nextState.filterDateFrom } });
            // return { created_gte: this.state.filterDateFrom };
        } else if (nextState.filterDateTo) {
            this.setState({ filterDate: { created_lte: nextState.filterDateTo } });
            // return { created_lte: this.state.filterDateTo };
        } else {
            this.setState({ filterDate: {} });
            // return {};
        }
        console.log(nextState);
    }

    renderModelList() {
        return (
            <QueryLookupRenderer
                lookup={true}
                environment={environment}
                query={SearchGroupAllQuery}
                variables={{
                    count: ITEMS_PER_PAGE,
                    filter: {
                        AND: [
                            {
                                name_contains: this.state.filterValue,
                            },
                            this.state.filterDate
                        ]
                    },
                    orderBy: this.state.orderBy
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
                    return <div>Loading</div>;
                }}
            />
        );
    }

    render() {
        return (
            <section>
                <Switch>
                    <Route
                        exact
                        path={`${this.props.match.url}/groups`}
                        render={() => (
                            <>
                                <Row>
                                    <Col>
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
                                                <label>Created</label>
                                            </div>
                                        </div>

                                        <div className="pretty p-default p-round">
                                            <input
                                                type="radio"
                                                name="filterDateType"
                                                checked={this.state.filterDateType === "updated"}
                                                value="updated"
                                                onChange={(e) => {
                                                    this.changeFilterDateType(e);
                                                }}
                                            />
                                            <div className="state p-info-o">
                                                <label>Updated</label>
                                            </div>
                                        </div>
                                        <RangeDayPicker dateTo={this.handleDateTo} dateFrom={this.handleDateFrom} />
                                    </Col>
                                    <Col className="text-right">
                                        <Filter changeFilter={this._handleOnChangeFilter} />
                                        <OrderBy changeOrderBy={this._handleOnChangeOrderBy} />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>{this.renderModelList()}</Col>
                                </Row>
                            </>
                        )}
                    />
                    <Route path={`${this.props.match.url}/groups/create`} component={CreateGroupContainer} />
                    <Route path={`${this.props.match.url}/groups/:groupId`} component={GroupDetails} />
                </Switch>
            </section>
        );
    }
}

export default withRouter(SearchGroup);
