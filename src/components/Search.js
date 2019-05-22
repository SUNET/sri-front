import React from "react";
import { Route, Link } from "react-router-dom";
import { ButtonToolbar, Button, Row, Col, Form } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import SearchFormContainer from "../containers/SearchForm";
import { ContactList, CreateContact } from "./Contact";

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

    _onSubmit = () => {};

    _handleOnChangeFilter = (event) => {
        this.setState({ filterValue: event.target.value });
    };

    render() {
        return (
            <section style={{ minHeight: 450 }}>
                <SearchFormContainer
                    onSubmit={this._onSubmit}
                    search={this.props.search}
                />

                <Route
                    exact
                    path="/contacts"
                    render={() => (
                        <section>
                            <Row className="mt-2">
                                <Col sm={9}>
                                    <ButtonToolbar>
                                        <Button
                                            as={Link}
                                            to={`${
                                                this.props.match.url
                                            }/create`}
                                            variant="outline-primary"
                                        >
                                            + New Contact
                                        </Button>
                                    </ButtonToolbar>
                                </Col>
                                <Col sm={3}>
                                    <Form.Control
                                        placeholder="Filter"
                                        defaultValue={this.state.filterValue}
                                        onChange={(e) =>
                                            this._handleOnChangeFilter(e)
                                        }
                                    />
                                </Col>
                            </Row>
                            <QueryRenderer
                                environment={environment}
                                query={SearchAllContactsQuery}
                                variables={{
                                    count: ITEMS_PER_PAGE
                                }}
                                render={({ error, props, data }) => {
                                    if (error) {
                                        return <div>{error.message}</div>;
                                    } else if (props) {
                                        return (
                                            <ContactList
                                                history={this.props.history}
                                                contacts={props}
                                            />
                                        );
                                    }
                                    return <div>Loading</div>;
                                }}
                            />
                        </section>
                    )}
                />
                <Route
                    path={`${this.props.match.url}/create`}
                    component={CreateContact}
                />
            </section>
        );
    }
}

export default Search;
