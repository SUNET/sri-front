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
import ModelList from "./ModelList";
import CreateContact from "./CreateContact";

const SearchAllContactsQuery = graphql`
    query SearchAllContactsQuery(
        $count: Int!
        $after: String
        $filter: ContactFilter
    ) {
        viewer {
            ...ModelList_viewer
        }
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

    _handleOnChange = (event) => {
        this.setState({ filterValue: event.target.value });
    };

    render() {
        return (
            <section>
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
                                        defaultValue=""
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
                                    count: ITEMS_PER_PAGE,
                                    filter: {
                                        name_contains: this.state.filterValue
                                    }
                                }}
                                render={({ error, props }) => {
                                    if (error) {
                                        return <div>{error.message}</div>;
                                    } else if (props) {
                                        return (
                                            <ModelList
                                                history={this.props.history}
                                                viewer={props.viewer}
                                                filterValue={
                                                    this.state.filterValue
                                                }
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
