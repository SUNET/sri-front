import React from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import { ContactList, CreateContact } from "./Contact";
import Filter from "./Filter";

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
            <section style={{ minHeight: 450 }}>
                <Route
                    exact
                    path="/community/contacts"
                    render={() => (
                        <section className="mt-3">
                            <Row>
                                <Col sm={9}>
                                    <QueryRenderer
                                        environment={environment}
                                        query={SearchAllContactsQuery}
                                        variables={{
                                            count: ITEMS_PER_PAGE
                                        }}
                                        render={({ error, props }) => {
                                            if (error) {
                                                return (
                                                    <div>{error.message}</div>
                                                );
                                            } else if (props) {
                                                return (
                                                    <ContactList
                                                        history={
                                                            this.props.history
                                                        }
                                                        match={this.props.match}
                                                        contacts={props}
                                                    />
                                                );
                                            }
                                            return <div>Loading</div>;
                                        }}
                                    />
                                </Col>
                                <Col sm={3}>
                                    <Filter />
                                </Col>
                            </Row>
                        </section>
                    )}
                />
                <Route
                    path={`/community/contacts/create`}
                    component={CreateContact}
                />
            </section>
        );
    }
}

export default Search;
