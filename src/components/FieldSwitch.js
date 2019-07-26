import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faAngleDown, faAngleUp, faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";

import "../style/FieldSwitch.scss";

class FieldSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: this.props.defaultValue || false };
    }

    componentWillUpdate(prevProps) {
        if (this.props.defaultValue !== prevProps.defaultValue) {
            this.setState({ checked: prevProps.defaultValue });
        }
    }

    static propTypes = {
        label: PropTypes.string,
        icon: PropTypes.string,
        classNames: PropTypes.string,
        color: PropTypes.string,
        type: PropTypes.string,
        handleChecked: PropTypes.func,
        forcedDefault: PropTypes.bool // disabled handleChange
    };

    handleChange = (event) => {
        if (!this.props.forcedDefault || !this.state.checked) {
            this.setState({ checked: event.target.checked });
            this.props.handleChecked && this.props.handleChecked(event);
        }
    };

    renderCheckBox = () => {
        switch (this.props.type) {
            case "toggle-icon":
                return (
                    <div className={`pretty custom p-icon p-toggle p-plain ${this.props.classNames}`}>
                        <input
                            type="checkbox"
                            id={this.props.id}
                            checked={this.state.checked}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <div className={`state p-on ${this.props.color}`}>
                            {this.props.icon === "eyes" && <FontAwesomeIcon icon={faEye} />}
                            {this.props.icon === "plus" && <FontAwesomeIcon icon={faMinus} />}
                            {this.props.icon === "check" && <FontAwesomeIcon icon={faCheck} />}
                            <label>{this.props.labelChecked || this.props.label}</label>
                            {this.props.icon === "angle" && <FontAwesomeIcon icon={faAngleUp} />}
                        </div>
                        <div className="state p-off">
                            {this.props.icon === "eyes" && <FontAwesomeIcon icon={faEyeSlash} />}
                            {this.props.icon === "plus" && <FontAwesomeIcon icon={faPlus} />}
                            {this.props.icon === "check" && <FontAwesomeIcon icon={faCheck} />}
                            <label>{this.props.labelUnChecked || this.props.label}</label>
                            {this.props.icon === "angle" && <FontAwesomeIcon icon={faAngleDown} />}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className={`pretty custom p-switch p-fill ${this.props.classNames}`}>
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
