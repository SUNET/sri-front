import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import environment from "../createRelayEnvironment";


class Dropdown extends React.PureComponent {

    renderOptions = (options) => {
        return options.map((option) => {
            return (
                <option key={option.name} value={option.name}>
                    {option.value}
                </option>
            );
        });
    };

    render() {
        return (
            <Form.Group>
                {this.props.label} && <Form.Label>{this.props.label}</Form.Label>
                <QueryRenderer
                    environment={environment}
                    query={DropdownQuery}
                    variables={{
                        name: "contact"
                    }}
                    render={({ error, props }) => {
                        if (error) {
                            return <div>{error.message}</div>;
                        } else if (props) {
                            return (
                                <Form.Control as="select">{this.renderOptions(props)}</Form.Control>
                            );
                        }
                        return <div>Loading</div>;
                    }}
                />

            </Form.Group>
        );
    }
}

export default Dropdown;
