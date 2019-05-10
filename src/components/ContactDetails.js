import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button } from "react-bootstrap";

import Contact from "./Contact";
import DeleteContactMutation from "../mutations/DeleteContactMutation";
import environment from "../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: ID) {
        viewer {
            ...Contact_viewer
            Contact(id: $contactId) {
                id
                ...Contact_contact
            }
        }
    }
`;

class ContactDetails extends React.PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    _handleDelete = (contactId, viewerId) => {
        console.log("Hundle Delete");
        DeleteContactMutation(contactId, viewerId, () => this.props.history.push("/contacts"));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={ContactDetailsQuery}
                variables={{
                    contactId: this.props.match.params.contactId
                }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section>
                                <Contact
                                    contact={props.viewer.Contact}
                                    viewer={props.viewer}
                                />
                                <Button
                                    onClick={() => this._handleDelete(
                                        props.viewer.Contact.id,
                                        props.viewer.id
                                    )}
                                    variant="outline-danger"
                                >
                                    Delete
                                </Button>
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default ContactDetails;
