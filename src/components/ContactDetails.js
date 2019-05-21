import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Button, ButtonToolbar, Form } from "react-bootstrap";

import Contact from "./Contact";
import DeleteContactMutation from "../mutations/DeleteContactMutation";
import UpdateContactMutation from "../mutations/UpdateContactMutation";
import environment from "../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
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
        const { first_name, last_name, email, phone, contact_type } = contact || this.state;
        console.log(contact);
        console.log(first_name);
        console.log(last_name);
        console.log(email);
        console.log(phone);
        console.log(contact_type);
        console.log(first_name);
        const contactId = this.props.match.params.contactId;
        UpdateContactMutation(contactId, first_name, last_name, email, phone, contact_type);
    };

    _handleDelete = () => {
        const contactId = this.props.match.params.contactId;
        DeleteContactMutation(contactId, () =>
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
                        return (
                            <section>
                                <Form>
                                    <Contact
                                        onChange={this._handleContactChange}
                                        contact={props.getContactById}
                                    />
                                    <ButtonToolbar>
                                        <Button
                                            onClick={() => {this._handleUpdate(props.getContactById); console.log("Contact");console.log(props.getContactById);}}
                                            className="mr-2"
                                            variant="outline-success"
                                        >
                                            Update
                                        </Button>
                                        <Button
                                            onClick={this._handleDelete}
                                            className="mr-2"
                                            variant="outline-danger"
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            onClick={() => this.props.history.goBack()}
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
