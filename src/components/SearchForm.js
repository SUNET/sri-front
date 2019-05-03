import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";

class SearchForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleSubmit = (e) => {
        this.props.onSubmit(this.state.value);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <label htmlFor="searchInput">Search Contact</label>
                <input
                    type="text"
                    className="u-full-width"
                    name="search"
                    placeholder="Contact name"
                    onChange={this.handleChange}
                    id="searchInput"
                    defaultValue={this.props.search}
                />
                <input
                    type="submit"
                    className="button-primary"
                    value="Search"
                />
            </form>
        );
    }
}

SearchForm = reduxForm({
    form: "search"
})(SearchForm);

export default SearchForm;
