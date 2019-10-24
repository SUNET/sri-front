import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import CreateEmailMutation from "../CreateEmailMutation";
import CreatePhoneMutation from "../CreatePhoneMutation";
import UpdateEmailMutation from "../UpdateEmailMutation";
import UpdatePhoneMutation from "../UpdatePhoneMutation";
import DeleteEmailMutation from "../DeleteEmailMutation";
import DeletePhoneMutation from "../DeletePhoneMutation";
import UpdateContactInlineMutation from "./UpdateContactInlineMutation";
import DeleteRelationshMutation from "../DeleteRelationshMutation";
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
                    relation_id
                    role_data {
                        handle_id
                        name
                    }
                    end {
                        handle_id
                        name
                        customer_id
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

export default function UpdateContactMutation(contact) {
    let fullName = contact.name;
    fullName = fullName.split(" ");
    contact.first_name = fullName[0];
    contact.last_name = fullName[1];

    const variables = {
        input: {
            handle_id: contact.id,
            notes: contact.notes,
            title: contact.title,
            first_name: contact.first_name,
            last_name: contact.last_name,
            contact_type: contact.contact_type,
            pgp_fingerprint: contact.pgp_fingerprint,
            clientMutationId: ""
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.update_contact.errors) {
                return response.update_contact.errors;
            } else {
                const emails = contact.emails;
                if (emails) {
                    Object.keys(emails).forEach((email_key) => {
                        let email = emails[email_key];
                        if (email.status === "remove") {
                            DeleteEmailMutation(email.handle_id);
                        } else if (email.status === "saved") {
                            if (email.origin === "store") {
                                UpdateEmailMutation(contact.id, email.email, email);
                            } else {
                                CreateEmailMutation(contact.id, email.email, email.type);
                            }
                        }
                    });
                }

                const phones = contact.phones;
                if (phones) {
                    Object.keys(phones).forEach((phone_key) => {
                        let phone = phones[phone_key];
                        if (phone.status === "remove") {
                            DeletePhoneMutation(phone.handle_id);
                        } else if (phone.status === "saved") {
                            UpdatePhoneMutation(contact.id, phone.phone, phone);
                        } else {
                            CreatePhoneMutation(contact.id, phone.phone, phone.type);
                        }
                    });
                }

                const organizations = contact.organizations;
                if (organizations) {
                    Object.keys(organizations).forEach((organization_key) => {
                        let organization = organizations[organization_key];
                        if (organization.status === "saved") {
                            if (organization.origin === "store") {
                                if (organization.role_obj) {
                                    DeleteRelationshMutation(organization.role_obj.relation_id);
                                }
                                UpdateContactInlineMutation(
                                    response.update_contact.contact,
                                    organization.organization,
                                    null,
                                    organization.role
                                );
                            } else {
                                UpdateContactInlineMutation(
                                    response.update_contact.contact,
                                    organization.organization,
                                    null,
                                    organization.role
                                );
                            }
                        } else if (organization.status === "remove") {
                            DeleteRelationshMutation(organization.role_obj.relation_id);
                        }
                    });
                }
            }
        },
        updater: (proxyStore, data) => {
            // const payload = proxyStore.get(contact.id, "update_contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err)
    });
}
