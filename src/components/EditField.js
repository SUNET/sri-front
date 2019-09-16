import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import OutsideClick from "../components/OutsideCLick";

import "../style/EditField.scss";

class EditField extends React.Component {
    constructor() {
        super();

        this.state = {
            editable: false
        };
    }

    static propTypes = {
        children: PropTypes.element.isRequired,
        onChange: PropTypes.func.isRequired
    };

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    };

    editField = (event) => {
        this.setState({ editable: !this.state.editable });
    };

    editDone = (event) => {
        this.setState({ editable: false });
        this.props.onChange(event);
    };

    exitEdition = (event) => {
        if (this.state.editable) {
            this.setState({ editable: false });
        }
    };

    render() {
        return (
            <OutsideClick callback={this.exitEdition}>
                {this.state.editable ? (
                    <Form.Group controlId="formGroupName" className="d-inline">
                        <Form.Control
                            className="edit-field-title auto"
                            placeholder="Full Name"
                            name="full-name"
                            defaultValue={this.props.children.props.children}
                            onBlur={(e) => this.editDone(e)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") this.editDone(e);
                            }}
                        />
                    </Form.Group>
                ) : (
                    this.props.children
                )}

                <FontAwesomeIcon icon={faPen} onClick={(e) => this.editField(e)} />
            </OutsideClick>
        );
    }
}

export default EditField;
