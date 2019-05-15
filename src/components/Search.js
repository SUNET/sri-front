import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ButtonToolbar, Button, Row, Col, Form } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import { Route } from "react-router-dom";

import environment from "../createRelayEnvironment";
import { ITEMS_PER_PAGE } from "../constants";

import SearchFormContainer from "../containers/SearchForm";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";

const SearchAllContactsQuery = graphql`
    query SearchAllContactsQuery($count: Int!, $cursor: String) {
        ...ContactList_contacts @arguments(count: $count, cursor: $cursor)
    }
`;

class Search extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        startSearch: PropTypes.func.isRequired,
        successSearch: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        results: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string.isRequired,
        queried: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            filterValue: ""
        };
    }

    onSubmit = () => {};

    _handleOnChange = (event) => {
        this.setState({ filterValue: event.target.value });
    };

    render() {
        return (
            <section style={{ minHeight: 450 }}>
                <SearchFormContainer
                    onSubmit={this.onSubmit}
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
                                            this._handleOnChange(e)
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
                                render={({ error, props }) => {
                                    if (error) {
                                        return <div>{error.message}</div>;
                                    } else if (props) {
                                        console.log(props);
                                        return (
                                            <ContactList
                                                history={this.props.history}
                                                contacts={props.contacts}
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
