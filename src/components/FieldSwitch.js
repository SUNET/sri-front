import React, { Component } from "react";
import PropTypes from "prop-types";
import Switch from "react-switch";

import "../style/FieldSwitch.scss";

class FieldSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.props.defaultValue };
    }

    static propTypes = {
        label: PropTypes.string
    };

    handleChange = (checked) => {
        this.setState({ checked });
    };

    render() {
        return (
            <div className="field-switch">
                <Switch
                    className="react-switch"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    height={14}
                    width={28}
                    id={this.props.id}
                />
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}

export default FieldSwitch;
