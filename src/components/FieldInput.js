import React from "react";
import { Form } from "react-bootstrap";

class FieldInput extends React.Component {
    render() {
        const { input, meta } = this.props;
        console.log(this.props);
        const has_error = meta.touched && meta.error;
        return (
            <>
                <Form.Control {...this.props} {...input} />
                <div className="invalid-feedback">{meta.error}</div>
            </>
        );
    }
}

export default FieldInput;
