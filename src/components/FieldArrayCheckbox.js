import React from "react";
import { Form } from "react-bootstrap";
import { Field } from "redux-form";
import FieldCheckbox from "./FieldCheckbox";

class FieldArrayCheckbox extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {React.Children.map(
                        this.props.children,
                        (child, index) =>
                            console.log(child) && <div>{child.checked && <FieldCheckbox {...child.props} />}</div>
                    )}
                </div>
                <hr />
                <div>
                    {React.Children.map(this.props.children, (child, index) => (
                        <div>{!child.checked && <FieldCheckbox {...child.props} />}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FieldArrayCheckbox;
