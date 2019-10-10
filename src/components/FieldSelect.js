import React from "react";
import { Form } from "react-bootstrap";

class FieldSelect extends React.Component {
    render() {
        const {
            input,
            meta: { error, touched }
        } = this.props;
        const copyProps = { ...this.props };
        const has_error = touched && error;
        delete copyProps["input"];
        delete copyProps["meta"];
        return (
            <div className={has_error ? "has-error" : ""}>
                <Form.Control {...copyProps} {...input} as="select" />
                {has_error && <span>{error}</span>}
            </div>
        );
    }
}

export default FieldSelect;
