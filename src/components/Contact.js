import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Jumbotron, Form, Col } from "react-bootstrap";

class Contact extends React.PureComponent {
    static propTypes = {
        viewer: PropTypes.object.isRequired,
        onChange: PropTypes.func
    };

    renderFullName() {
        return this.props.contact.firstName + " " + this.props.contact.lastName;
    }

    render() {
        let contact = this.props.contact;
        return (
            <Jumbotron>
                <h1 className="mt-3 mb-3">{this.renderFullName()}</h1>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                placeholder="ID"
                                defaultValue={contact.id}
                                readOnly
                            />
                            <Form.Control
                                placeholder="Node name"
                                defaultValue={contact.nodeName}
                                readOnly
                            />
                            <Form.Control
                                placeholder="First name"
                                defaultValue={contact.firstName}
                                onChange={(e) =>
                                    this.props.onChange(
                                        "firstName",
                                        e.target.value
                                    )
                                }
                            />
                            <Form.Control
                                placeholder="Last name"
                                defaultValue={contact.lastName}
                                onChange={(e) =>
                                    this.props.onChange(
                                        "lastName",
                                        e.target.value
                                    )
                                }
                            />
                            <Form.Control
                                placeholder="Email"
                                defaultValue={contact.email}
                                onChange={(e) =>
                                    this.props.onChange(
                                        "email",
                                        e.target.value
                                    )
                                }
                            />
                            <Form.Control
                                placeholder="Phone"
                                defaultValue={contact.phone}
                                onChange={(e) =>
                                    this.props.onChange(
                                        "phone",
                                        e.target.value
                                    )
                                }
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </Jumbotron>
        );
    }
}

const ContactFragment = createFragmentContainer(
    Contact,
    graphql`
        fragment Contact_viewer on Viewer {
            id
        }
        fragment Contact_contact on Contact {
            id
            nodeName
            name
            firstName
            lastName
            email
            phone
        }
    `
);

export default ContactFragment;
