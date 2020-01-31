import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import CreateComentMutation from "../CreateCommentMutation";
import DeleteRelationshipMutation from "../DeleteRelationshipMutation";
import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation CreateContactMutation($input: CompositeContactMutationInput!) {
        composite_contact(input: $input) {
            created {
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
                            organization_id
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
            subcreated {
                errors {
                    field
                    messages
                }
                email {
                    handle_id
                    name
                    type
                }
            }
            phones_created {
                errors {
                    field
                    messages
                }
                phone {
                    handle_id
                    name
                    type
                }
            }
            rolerelations {
                errors {
                    field
                    messages
                }
                rolerelation {
                    relation_id
                    type
                    start {
                        handle_id
                        first_name
                        last_name
                    }
                    end {
                        handle_id
                        name
                    }
                }
            }
        }
    }
`;

export default function CreateContactMutation(contact, form) {
    const newEmails = [];
    const newPhones = [];

    const roles = [];

    // let fullName = contact.name.trim();
    // if (fullName.includes(" ")) {
    //     fullName = fullName.split(" ");
    //     contact.first_name = fullName[0];
    //     contact.last_name = fullName[1];
    // } else {
    //     contact.first_name = fullName;
    //     contact.last_name = fullName;
    // }

    const emails = contact.emails;
    if (emails) {
        Object.keys(emails).forEach((email_key) => {
            let email = emails[email_key];
            newEmails.push({
                name: email.email,
                type: email.type
            });
        });
    }

    const phones = contact.phones;
    if (phones) {
        Object.keys(phones).forEach((phone_key) => {
            let phone = phones[phone_key];
            newPhones.push({
                name: phone.phone,
                type: phone.type
            });
        });
    }

    const organizations = contact.organizations;
    if (organizations) {
        Object.keys(organizations).forEach((organization_key) => {
            let organization = organizations[organization_key];
            if (organization.status === "saved") {
                if (organization.origin === "store") {
                    if (organization.role_obj) {
                        DeleteRelationshipMutation(organization.role_obj.relation_id);
                    }
                }
                roles.push({
                    role_handle_id: organization.role,
                    organization_handle_id: organization.organization
                });
            }
        });
    }

    const variables = {
        input: {
            create_input: {
                notes: contact.notes,
                title: contact.title,
                first_name: contact.first_name,
                last_name: contact.last_name,
                contact_type: contact.contact_type,
                pgp_fingerprint: contact.pgp_fingerprint,
                clientMutationId: ""
            },
            create_subinputs: newEmails,
            create_phones: newPhones,
            link_rolerelations: roles
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.composite_contact.created.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.composite_contact.created.errors;
            } else {
                const contact_id = response.composite_contact.created.contact.handle_id;
                if (contact.comment) {
                    CreateComentMutation(contact_id, contact.comment);
                }
                form.props.history.push("/community/contacts/" + contact_id);
                form.props.notify(i18n.t("notify.contact-created-success"), "success");
            }
        },
        updater: (proxyStore, data) => {},
        onError: (err) => console.error(err)
    });
}
