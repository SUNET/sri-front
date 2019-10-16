import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "redux-form";

class FieldCheckbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: ""
        };
    }
    change = (event) => {
        this.setState({ checked: event.target.checked });
    };
    render() {
        const { name } = this.props;
        return (
            <>
                {this.props.label}
                <Field className="mr-2" type="checkbox" name={name} component="input" />
            </>
        );
    }
}

export default FieldCheckbox;
