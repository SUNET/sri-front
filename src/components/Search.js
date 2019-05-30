import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import QueryLookupRenderer from "relay-query-lookup-renderer";
import graphql from "babel-plugin-relay/macro";
import { withRouter } from "react-router-dom";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import { ContactList, CreateContact, ContactDetails } from "./Contact";
import Filter from "./Filter";
import { RouteNotFound } from "./NotFound";

const SearchAllContactsQuery = graphql`
    query SearchAllContactsQuery($count: Int!) {
        ...ContactList_contacts @arguments(count: $count)
    }
`;

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ""
        };
    }

    _handleOnChangeFilter = (event) => {
        this.setState({ filterValue: event.target.value });
    };

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
                                        <QueryLookupRenderer
                                            lookup={true}
                                            environment={environment}
                                            query={SearchAllContactsQuery}
                                            variables={{
                                                count: ITEMS_PER_PAGE
                                            }}
                                            render={({ error, props }) => {
                                                console.log(environment.getStore().getSource());
                                                if (error) {
                                                    return (
                                                        <div>
                                                            {error.message}
                                                        </div>
                                                    );
                                                } else if (props) {
                                                    return (
                                                        <ContactList
                                                            contacts={props}
                                                        />
                                                    );
                                                }
                                                return <div>Loading</div>;
                                            }}
                                        />
                                    </Col>
                                    <Col sm={3}>
                                        <Filter
                                            handleOnChangeFilter={
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
