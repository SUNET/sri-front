import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Jumbotron, Form, Col } from "react-bootstrap";

import Dropdown from "./Dropdowns/Dropdown";

class Contact extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    renderFullName() {
        return (
            this.props.contact.first_name + " " + this.props.contact.last_name
        );
    }

    render() {
        let contact = this.props.contact;
        return (
            <Jumbotron>
                <h1 className="mt-3 mb-3">{this.renderFullName()}</h1>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formGroupId">
                            <Form.Control
                                placeholder="ID"
                                name="handle_id"
                                defaultValue={contact.handle_id}
                                readOnly
                            />
                        </Form.Group>
                        <Dropdown
                            label="Contact Type"
                            type="contact_type"
                            onChange={(e) =>
                                this.setState({
                                    contact_type: e.target.value
                                })
                            }
                        />
                        <Form.Group controlId="formGroupFirstName">
                            <Form.Control
                                placeholder="First name"
                                name="first_name"
                                defaultValue={contact.first_name}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupLastName">
                            <Form.Control
                                placeholder="Last name"
                                name="last_name"
                                defaultValue={contact.last_name}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control
                                placeholder="Email"
                                name="email"
                                defaultValue={contact.email}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Control
                                placeholder="Phone"
                                name="phone"
                                defaultValue={contact.phone}
                                onChange={(e) => this.props.onChange(e)}
                            />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Jumbotron>
        );
    }
}

const ContactFragment = createFragmentContainer(
    Contact,
    graphql`
        fragment Contact_contact on ContactType {
            handle_id
            contact_type
            first_name
            last_name
            email
            phone
        }
    `
);

export default ContactFragment;
