import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
// import OutsideClick from "../components/OutsideCLick";
import { Field } from "redux-form";

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

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    editField = (event) => {
        this.setState({ editable: !this.state.editable });
    };

    editDone = (event) => {
        this.setState({ editable: false });
    };

    exitEdition = (event) => {
        if (this.state.editable) {
            this.setState({ editable: false });
        }
    };

    render() {
        return (
            <>
                {this.state.editable ? (
                    <Form.Group className="d-inline">
                        <Field
                            className="edit-field-title auto"
                            placeholder="Full Name"
                            component={FieldInput}
                            name="name"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") this.editDone(e);
                            }}
                        />
                    </Form.Group>
                ) : (
                    <>{this.props.children}</>
                )}

                <FontAwesomeIcon icon={faPen} onClick={(e) => this.editField(e)} />
            </>
        );
    }
}

export default EditField;
