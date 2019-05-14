import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, ButtonToolbar } from "react-bootstrap";

import Contact from "./Contact";
import DeleteContactMutation from "../mutations/DeleteContactMutation";
import UpdateContactMutation from "../mutations/UpdateContactMutation";
import environment from "../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            handle_id
            ...Contact_contact
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

    constructor(props){
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        }
    }

    _handleContactChange = (field, value) => {
        this.setState({ [field]: value });
    }

    _handleUpdate = (viewerId) => {
        const { firstName, lastName, email, phone } = this.state;
        const contactId = this.props.match.params.contactId;
        UpdateContactMutation(contactId, firstName, lastName, email, phone, viewerId)
    };

    _handleDelete = (contactId, viewerId) => {
        DeleteContactMutation(contactId, viewerId, () =>
            this.props.history.push("/contacts")
        );
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
                        console.log(props);
                        return (
                            <section>
                                <Contact
                                    onChange={this._handleContactChange}
                                    contact={props.viewer.Contact}
                                    viewer={props.viewer}
                                />
                                <ButtonToolbar>
                                    <Button
                                        onClick={() =>
                                            this._handleUpdate(
                                                props.viewer.id
                                            )
                                        }
                                        className="mr-2"
                                        variant="outline-success"
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            this._handleDelete(
                                                props.viewer.Contact.id,
                                                props.viewer.id
                                            )
                                        }
                                        className="mr-2"
                                        variant="outline-danger"
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            this.props.history.goBack()
                                        }
                                        variant="outline-dark"
                                    >
                                        Back
                                    </Button>
                                </ButtonToolbar>
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
