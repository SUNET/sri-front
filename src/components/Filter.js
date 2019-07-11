import React from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../style/Filter.scss";

class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: ""
        };
    }

    render() {
        return (
            <Form className="filter">
                <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <Form.Control
                    placeholder="Filter by word"
                    defaultValue={this.state.filterValue}
                    onChange={(e) => this.props.changeFilter(e)}
                />
            </Form>
        );
    }
}

export default Filter;
