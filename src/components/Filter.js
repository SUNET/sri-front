import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "../style/Filter.scss";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ""
        };
    }

    changeFilter = (event) => {
        this.setState({ filterValue: event.target.value });
        this.props.changeFilter(event.target.value);
    };

    clearFilter = () => {
        this.input.value = "";
        this.setState({ filterValue: "" });
        this.props.changeFilter("");
    };

    render() {
        return (
            <div className="filter">
                <Form.Control
                    placeholder="Filter by word"
                    name="filter"
                    type="text"
                    onChange={(e) => this.changeFilter(e)}
                    ref={(input) => (this.input = input)}
                />
                {this.state.filterValue && (
                    <FontAwesomeIcon className="clear-input" icon={faTimes} onClick={this.clearFilter} />
                )}
            </div>
        );
    }
}

export default Filter;
