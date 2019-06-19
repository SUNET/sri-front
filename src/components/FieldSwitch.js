import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash,
    faAngleDown,
    faAngleUp,
    faPlus,
    faMinus
} from "@fortawesome/free-solid-svg-icons";

import "../style/FieldSwitch.scss";

class FieldSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.props.defaultValue };
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        type: PropTypes.string
    };

    handleChange = (event) => {
        this.setState({ checked: event.target.checked });
        this.props.onChange && this.props.onChange(event.target.checked);
    };

    renderCheckBox = () => {
        switch (this.props.type) {
            case "toggle-icon":
                return (
                    <div className="pretty p-icon p-toggle p-plain">
                        <input
                            type="checkbox"
                            id={this.props.id}
                            checked={this.state.checked}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className="state p-on">
                            {this.props.icon==="eyes" && <FontAwesomeIcon icon={faEye} />}
                            {this.props.icon==="plus" && <FontAwesomeIcon icon={faMinus} />}
                            <label>
                                {this.props.labelChecked || this.props.label}
                            </label>
                            {this.props.icon==="angle" && <FontAwesomeIcon icon={faAngleUp} />}
                        </div>
                        <div className="state p-off">
                            {this.props.icon==="eyes" && <FontAwesomeIcon icon={faEyeSlash} />}
                            {this.props.icon==="plus" && <FontAwesomeIcon icon={faPlus} />}
                            <label>
                                {this.props.labelUnChecked || this.props.label}
                            </label>
                            {this.props.icon==="angle" && <FontAwesomeIcon icon={faAngleDown} />}
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
                            <label htmlFor={this.props.id}>{this.props.label}</label>
                        </div>
                    </div>
                );
        }
    };

    render() {
        return <div className="field-checkbox">{this.renderCheckBox()}</div>;
    }
}

export default FieldSwitch;
