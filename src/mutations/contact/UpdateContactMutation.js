import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import UpdateEmailMutation from "../UpdateEmailMutation";
import UpdatePhoneMutation from "../UpdatePhoneMutation";
import UpdateContactInlineMutation from "./UpdateContactInlineMutation";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateContactMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            errors {
                field
                messages
            }
            contact {
                handle_id
                title
                notes
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
                    name
                    end {
                        handle_id
                        name
                    }
                }
                comments {
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
                member_of_groups {
                    name
                }
            }
        }
    }
`;

export default function UpdateContactMutation(contact, callback) {
    const variables = {
        input: {
            handle_id: contact.id,
            notes: contact.notes,
            title: contact.title,
            first_name: contact.first_name,
            last_name: contact.last_name,
            contact_type: contact.contact_type,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            const emails = contact.emails;
            Object.keys(emails).forEach((email_key) => {
                let email = emails[email_key];
                if (email.status === "remove") {
                } else {
                    UpdateEmailMutation(contact.id, email.email, email.type);
                }
            });
            const phones = contact.phones;
            Object.keys(phones).forEach((phone) => {
                UpdatePhoneMutation(contact.id, phones[phone].phone, phones[phone].type);
            });
            const organizations = contact.organizations;
            Object.keys(organizations).forEach((organization_key) => {
                let organization = organizations[organization_key];
                UpdateContactInlineMutation(
                    response.create_contact.contact,
                    organization.organization,
                    null,
                    organization.role
                );
            });

            callback.push("/community/groups/" + contact.id);
            // const payload = proxyStore.get(contact.id, "Contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        updater: (proxyStore, data) => {
            // const payload = proxyStore.get(contact.id, "Contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err)
    });
}
