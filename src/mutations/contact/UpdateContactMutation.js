import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateContactMutation($input: CompositeContactMutationInput!) {
        composite_contact(input: $input) {
            updated {
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
            subupdated {
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
            phones_updated {
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

export default function UpdateContactMutation(contact, form) {
    const newEmails = [];
    const updateEmails = [];
    const deleteEmails = [];

    const newPhones = [];
    const updatePhones = [];
    const deletePhones = [];

    const roles = [];
    const deleteRoles = [];

    let fullName = contact.name.trim();
    if (fullName.includes(" ")) {
        fullName = fullName.split(" ");
        contact.first_name = fullName[0];
        contact.last_name = fullName[1];
    } else {
        contact.first_name = fullName;
        contact.last_name = fullName;
    }

    const emails = contact.emails;
    if (emails) {
        Object.keys(emails).forEach((email_key) => {
            let email = emails[email_key];
            if (email.status === "remove") {
                deleteEmails.push({ handle_id: email.handle_id });
            } else if (email.status === "saved") {
                if (email.origin === "store") {
                    updateEmails.push({
                        handle_id: email.handle_id,
                        name: email.email,
                        type: email.type
                    });
                } else {
                    newEmails.push({
                        name: email.email,
                        type: email.type
                    });
                }
            }
        });
    }

    const phones = contact.phones;
    if (phones) {
        Object.keys(phones).forEach((phone_key) => {
            let phone = phones[phone_key];
            if (phone.status === "remove") {
                deletePhones.push({ handle_id: phone.handle_id });
            } else if (phone.status === "saved") {
                if (phone.origin === "store") {
                    updatePhones.push({
                        handle_id: phone.handle_id,
                        name: phone.phone,
                        type: phone.type
                    });
                } else {
                    newPhones.push({
                        name: phone.phone,
                        type: phone.type
                    });
                }
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
                        // the backend should update the relationship when a node changes, not delete it to create a new one
                        if (form.props.isDirty_organizations_roles[organization_key]) {
                            deleteRoles.push({ relation_id: organization.role_obj.relation_id });
                            roles.push({
                                role_handle_id: organization.role,
                                organization_handle_id: organization.organization
                            });
                        }
                    }
                } else {
                    roles.push({
                        role_handle_id: organization.role,
                        organization_handle_id: organization.organization
                    });
                }
            } else if (organization.status === "remove") {
                deleteRoles.push({ relation_id: organization.role_obj.relation_id });
            }
        });
    }

    const variables = {
        input: {
            update_input: {
                handle_id: contact.handle_id,
                notes: contact.notes,
                title: contact.title,
                first_name: contact.first_name,
                last_name: contact.last_name,
                contact_type: contact.contact_type.toLowerCase(),
                pgp_fingerprint: contact.pgp_fingerprint,
                clientMutationId: ""
            },
            create_subinputs: newEmails,
            update_subinputs: updateEmails,
            delete_subinputs: deleteEmails,
            create_phones: newPhones,
            update_phones: updatePhones,
            delete_phones: deletePhones,
            link_rolerelations: roles,
            unlink_subinputs: deleteRoles
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.composite_contact.updated.errors) {
                return response.composite_contact.updated.errors;
            } else {
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
            }
        },
        updater: (proxyStore, data) => {},
        onError: (err) => console.error(err)
    });
}
