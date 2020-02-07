import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { withTranslation } from "react-i18next";

import ContactUpdateFormContainer from "../../containers/contact/ContactUpdateForm";
import DeleteContactMutation from "../../mutations/contact/DeleteContactMutation";
import environment from "../../createRelayEnvironment";

const ContactDetailsQuery = graphql`
    query ContactDetailsQuery($contactId: ID!) {
        getContactById(id: $contactId) {
            ...ContactUpdateForm_contact
            id
            name
            notes
            title
            contact_type
            first_name
            last_name
            pgp_fingerprint
            emails {
                id
                name
                type
            }
            phones {
                id
                name
                type
            }
            roles {
                relation_id
                role_data {
                    id
                    name
                }
                end {
                    id
                    name
                    organization_id
                    organization_number
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

    handleDelete = () => {
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
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details contact-details">
                                <ContactUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    contact={props.getContactById}
                                    history={this.props.history}
                                    refetch={retry}
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
