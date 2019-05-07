import React from "react";
import PropTypes from "prop-types";
import { createFragmentContainer } from "react-relay";
import { Jumbotron, Form, Col } from "react-bootstrap";
import graphql from "babel-plugin-relay/macro";

class ContactDetails extends React.PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired,
        viewer: PropTypes.object.isRequired
    };

    renderFullName() {
        return this.props.contact.firstName + " " + this.props.contact.lastName;
    }

    render() {
        const contact = this.props.contact;
        return (
            <Jumbotron>
                <h1 className="mt-3 mb-3">{this.renderFullName()}</h1>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control
                                placeholder="First name"
                                defaultValue={contact.firstName}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                placeholder="Last name"
                                defaultValue={contact.lastName}
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </Jumbotron>
        );
    }
}

const ContactDetailsFragment = createFragmentContainer(
    ContactDetails,
    graphql`
        fragment ContactDetails_viewer on Viewer {
            id
        }
        fragment ContactDetails_contact on Contact {
            ...Contact
        }
    `
);

export default ContactDetailsFragment;
