import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import QueryLookupRenderer from "relay-query-lookup-renderer";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import { ContactList, CreateContact, ContactDetails } from "./Contact";
import Filter from "./Filter";
import OrderBy from "./OrderBy";
import { RouteNotFound } from "./NotFound";

const SearchAllContactsQuery = graphql`
    query SearchAllContactsQuery(
        $count: Int!
        $filter: ContactFilter
        $orderBy: ContactOrderBy
    ) {
        ...ContactList_contacts
            @arguments(count: $count, filter: $filter, orderBy: $orderBy)
    }
`;

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countList: ITEMS_PER_PAGE,
            filterValue: "",
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

    renderModelList() {
        return (
            <QueryLookupRenderer
                lookup={true}
                environment={environment}
                query={SearchAllContactsQuery}
                variables={{
                    count: ITEMS_PER_PAGE,
                    filter: {
                        AND: [
                            {
                                name_contains: this.state.filterValue
                            }
                        ]
                    },
                    orderBy: this.state.orderBy
                }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <ContactList
                                contacts={props}
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
                        path={`${this.props.match.url}/contacts`}
                        render={() => (
                            <section className="mt-3">
                                <Row>
                                    <Col sm={9}>
                                        <OrderBy changeOrderBy={this._handleOnChangeOrderBy} className="text-right" />
                                        {this.renderModelList()}
                                    </Col>
                                    <Col sm={3}>
                                        <Filter
                                            changeFilter={
                                                this._handleOnChangeFilter
                                            }
                                        />
                                    </Col>
                                </Row>
                            </section>
                        )}
                    />
                    <Route
                        path={`${this.props.match.url}/contacts/create`}
                        component={CreateContact}
                    />
                    <Route
                        path={`${this.props.match.url}/contacts/:contactId`}
                        component={ContactDetails}
                    />
                    <RouteNotFound />
                </Switch>
            </section>
        );
    }
}

export default withRouter(Search);
