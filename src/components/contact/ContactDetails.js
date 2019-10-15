import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withTranslation } from "react-i18next";

import ContactUpdateFormContainer from "../../containers/contact/ContactUpdateForm";
import DeleteContactMutation from "../../mutations/contact/DeleteContactMutation";
import UpdateContactMutation from "../../mutations/contact/UpdateContactMutation";
import environment from "../../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: Int!) {
        getContactById(handle_id: $contactId) {
            ...ContactUpdateForm_contact
            handle_id
            name
            notes
            title
            contact_type
            first_name
            last_name
            pgp_fingerprint
            emails {
                handle_id
                name
                type
            }
            phones {
                handle_id
                name
                type
            }
            roles {
                relation_id
                role_data {
                    handle_id
                    name
                }
                end {
                    handle_id
                    name
                }
            }
            created
            creator {
                email
            }
            modified
            modifier {
                email
            }
            comments {
                id
                user {
                    first_name
                    last_name
                }
                comment
                submit_date
            }
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

    handleSubmit = (contact) => {
        contact.id = this.props.match.params.contactId;
        UpdateContactMutation(contact, this.props.history);
    };

    _handleDelete = () => {
        const contactId = this.props.match.params.contactId;
        DeleteContactMutation(contactId, () => this.props.history.push(`/community/contacts`));
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
                        this.contact = props.getContactById;
                        return (
                            <section className="model-details">
                                <ContactUpdateFormContainer
                                    onSubmit={this.handleSubmit}
                                    contact={props.getContactById}
                                    history={this.props.history}
                                />
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default withTranslation()(ContactDetails);
