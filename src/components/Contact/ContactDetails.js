import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, ButtonToolbar, Form } from "react-bootstrap";

import Contact from "./Contact";
import DeleteContactMutation from "../../mutations/DeleteContactMutation";
import UpdateContactMutation from "../../mutations/UpdateContactMutation";
import environment from "../../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            ...Contact_contact
        }
    }
`;

class ContactDetails extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            contact_type: ""
        };
    }

    _handleContactChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    _handleUpdate = (contact) => {
        const update_contact = {
            id: this.props.match.params.contactId,
            first_name: this.state.first_name || contact.first_name,
            last_name: this.state.last_name || contact.last_name,
            email: this.state.email || contact.email,
            phone: this.state.phone || contact.phone,
            contact_type: this.state.contact_type || contact.contact_type
        };
        UpdateContactMutation(update_contact);
    };

    _handleDelete = () => {
        const contactId = this.props.match.params.contactId;
        DeleteContactMutation(contactId, () =>
            this.props.history.push(`/community/contacts`)
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
                        return (
                            <section className="mt-3">
                                <Form>
                                    <Contact
                                        onChange={this._handleContactChange}
                                        contact={props.getContactById}
                                    />
                                    <ButtonToolbar>
                                        <Button
                                            onClick={() =>
                                                this._handleUpdate(
                                                    props.getContactById
                                                )
                                            }
                                            className="mr-2"
                                            variant="outline-success"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            onClick={() => this._handleDelete()}
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
                                </Form>
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
