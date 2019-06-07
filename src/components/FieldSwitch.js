import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
    faAngleDown,
    faAngleUp
} from "@fortawesome/free-solid-svg-icons";

import "../style/FieldSwitch.scss";

class FieldSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.props.defaultValue };
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string
    };

    handleChange = (event) => {
        this.setState({ checked: event.target.checked });
        this.props.onChange(event.target.checked);
    };

    renderCheckBox = (icon) => {
        switch (this.props.icon) {
            case "eyes":
                return (
                    <div className="pretty p-icon p-toggle p-plain">
                        <input
                            type="checkbox"
                            id={this.props.id}
                            checked={this.state.checked}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="state p-success-o p-on">
                            <FontAwesomeIcon icon={faEye} />
                            {this.props.labelChecked && (
                                <label>{this.props.labelChecked}</label>
                            )}
                        </div>
                        <div className="state p-off">
                            <FontAwesomeIcon icon={faEyeSlash} />
                            {this.props.labelUnChecked && (
                                <label>{this.props.labelUnChecked}</label>
                            )}
                        </div>
                    </div>
                );
            case "angle":
                return (
                    <div className="pretty p-icon p-toggle p-plain">
                        <input
                            type="checkbox"
                            id={this.props.id}
                            checked={this.state.checked}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="state p-on">
                            {this.props.labelChecked && (
                                <label>{this.props.labelChecked}</label>
                            )}
                            <FontAwesomeIcon icon={faAngleUp} />
                        </div>
                        <div className="state p-off">
                            {this.props.labelUnChecked && (
                                <label>{this.props.labelUnChecked}</label>
                            )}
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="pretty custom p-switch p-fill">
                        <input
                            type="checkbox"
                            id={this.props.id}
                            checked={this.state.checked}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="state p-primary">
                            <label />
                        </div>
                    </div>
                );
        }
    };

    render() {
        return (
            <div className="field-checkbox">
                {this.renderCheckBox()}
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        );
    }
}

export default FieldSwitch;
