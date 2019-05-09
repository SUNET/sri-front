import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button } from "react-bootstrap";

import Contact from "./Contact";
import environment from "../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: ID) {
        viewer {
            ...Contact_viewer
            Contact(id: $contactId) {
                id
                name
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

    render() {
        return (
            <div>
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
                            <Contact
                                contact={props.viewer.Contact}
                                viewer={props.viewer}
                            />
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
            <Button
                onClick={() => {
                    this.props.history.goBack();
                }}
                variant="outline-danger"
            >
                Delete
            </Button>
            </div>
        );
    }
}

export default ContactDetails;
