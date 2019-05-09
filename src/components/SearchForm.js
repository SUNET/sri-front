import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import Form from "react-bootstrap/Form";

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
                <Form.Control
                    type="text"
                    className="u-full-width"
                    name="search"
                    placeholder="Search ..."
                    onChange={this.handleChange}
                    id="searchInput"
                    defaultValue={this.props.search}
                />
            </form>
        );
    }
}

SearchForm = reduxForm({
    form: "search"
})(SearchForm);

export default SearchForm;
