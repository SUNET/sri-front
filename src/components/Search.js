import React from "react";
import PropTypes from "prop-types";

import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../createRelayEnvironment";

import SearchFormContainer from "../containers/SearchForm";
import ModelList from "./ModelList";

const SearchAllContactsQuery = graphql`
    query SearchAllContactsQuery {
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

    onSubmit = (value) => {
        this.props.startSearch(value);
        fetch(`https://api.github.com/search/repositories?q=${value}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.props.successSearch(json.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
        return (
            <section>
                <SearchFormContainer
                    onSubmit={this.onSubmit}
                    search={this.props.search}
                />
                <QueryRenderer
                    environment={environment}
                    query={SearchAllContactsQuery}
                    render={({ error, props }) => {
                        if (error) {
                            return <div>{error.message}</div>;
                        } else if (props) {
                            return (
                                <ModelList
                                    // data={this.props.results}
                                    // total={this.props.results.length}
                                    // loading={this.props.loading}
                                    // queried={this.props.queried}
                                    // search={this.props.search}
                                    history={this.props.history}
                                    viewer={props.viewer}
                                />
                            );
                        }
                        return <div>Loading</div>;
                    }}
                />
            </section>
        );
    }
}

export default Search;
