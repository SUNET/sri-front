import React from "react";
import PropTypes from "prop-types";

import { startSearch, successSearch } from "../actions/Search";

import SearchFormContainer from "../containers/SearchForm";
import ModelList from "./ModelList";

class Search extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        results: PropTypes.arrayOf(PropTypes.object).isRequired,
        search: PropTypes.string.isRequired,
        queried: PropTypes.bool.isRequired
    };

    onSubmit = (value) => {
        console.log(startSearch);
        this.props.dispatch(startSearch(value));
        fetch(`https://api.github.com/search/repositories?q=${value}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.props.dispatch(successSearch(json.items));
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
                <ModelList
                    data={this.props.results}
                    total={this.props.results.length}
                    loading={this.props.loading}
                    queried={this.props.queried}
                    search={this.props.search}
                />
            </section>
        );
    }
}

export default Search;
