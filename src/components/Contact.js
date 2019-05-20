import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Jumbotron, Form, Col } from "react-bootstrap";

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
        console.log(this.props);
        return (
            <Jumbotron>
                <h1 className="mt-3 mb-3">{this.renderFullName()}</h1>
                <Form.Row>
                    <Col>
                        <Form.Control
                            placeholder="ID"
                            name="handle_id"
                            defaultValue={contact.handle_id}
                            readOnly
                        />
                        <Form.Control
                            placeholder="Node name"
                            name="contact_type"
                            defaultValue={contact.contact_type}
                        />
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Control
                            placeholder="First name"
                            name="first_name"
                            defaultValue={contact.first_name}
                            onChange={(e) => this.props.onChange(e)}
                        />
                        <Form.Control
                            placeholder="Last name"
                            name="last_name"
                            defaultValue={contact.last_name}
                            onChange={(e) => this.props.onChange(e)}
                        />
                        <Form.Control
                            placeholder="Email"
                            name="email"
                            defaultValue={contact.email}
                            onChange={(e) => this.props.onChange(e)}
                        />
                        <Form.Control
                            placeholder="Phone"
                            name="phone"
                            defaultValue={contact.phone}
                            onChange={(e) => this.props.onChange(e)}
                        />
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
