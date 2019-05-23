import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../createRelayEnvironment";

const DropdownQuery = graphql`
    query DropdownQuery($name: String!) {
        getChoicesForDropdown(name: $name) {
            name
            value
        }
    }
`;

class Dropdown extends React.PureComponent {
    static propTypes = {
        type: PropTypes.string.isRequired
    };

    renderOptions = (options) => {
        return options.map((option) => {
            return (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            );
        });
    };

    render() {
        return (
            <Form.Group>
                {this.props.label && (
                    <Form.Label>{this.props.label}</Form.Label>
                )}
                <QueryRenderer
                    environment={environment}
                    query={DropdownQuery}
                    variables={{
                        name: this.props.type
                    }}
                    render={({ error, props }) => {
                        if (error) {
                            return <div>{error.message}</div>;
                        } else if (props) {
                            return (
                                <Form.Control
                                    as="select"
                                    onChange={(e) => this.props.onChange(e)}
                                >
                                    <option value="" />
                                    {this.renderOptions(
                                        props.getChoicesForDropdown
                                    )}
                                </Form.Control>
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
