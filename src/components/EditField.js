import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { Field, change, touch } from "redux-form";

import FieldInput from "./FieldInput";

import "../style/EditField.scss";

class EditField extends React.Component {
    constructor() {
        super();

        this.state = {
            editable: false
        };
    }

    static propTypes = {
        children: PropTypes.element.isRequired
    };

    editField = (event) => {
        if ((this.props.error && !this.state.editable) || this.props.error === undefined) {
            this.setState({ editable: !this.state.editable });
            if (this.props.initialValue) this.deleteInitialValue();
        }
    };

    editDone = (event) => {
        event.preventDefault();
        if (!this.props.error) {
            this.setState({ editable: false });
        } else {
            this.props.dispatch(touch(this.props.form, "name"));
        }
    };

    deleteInitialValue = () => {
        if (this.props.value === this.props.initialValue) {
            this.props.dispatch(change(this.props.form, "name", ""));
        }
    };

    render() {
        const { error, meta } = this.props;
        const has_error = meta && meta.touched && error;
        return (
            <span className="edit-field">
                <Form.Group className={`${!this.state.editable ? "d-none" : "d-inline"}`}>
                    <Field
                        className="edit-field-title auto"
                        placeholder="Name"
                        component={FieldInput}
                        name="name"
                        onBlur={(e) => this.editDone(e)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") this.editDone(e);
                        }}
                    />
                </Form.Group>
                <span className={`${this.state.editable ? "d-none" : "d-inline"} ${has_error ? "error-title" : ""}`}>
                    {this.props.children}
                </span>
                <i className="icon-pencil" onClick={(e) => this.editField(e)}></i>
            </span>
        );
    }
}

export default EditField;
