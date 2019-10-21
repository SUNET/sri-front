import React from "react";
import { Form } from "react-bootstrap";

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
            <div className="filter">
                <Form.Control
                    placeholder="Filter by word"
                    defaultValue={this.state.filterValue}
                    onChange={(e) => this.props.changeFilter(e)}
                />
            </div>
        );
    }
}

export default Filter;
