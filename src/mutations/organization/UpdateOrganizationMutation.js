import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

// import { CONTACT_WORK } from "../../utils/constants";

const mutation = graphql`
    mutation UpdateOrganizationMutation($input: CompositeOrganizationMutationInput!) {
        composite_organization(input: $input) {
            updated {
                errors {
                    field
                    messages
                }
                organization {
                    id
                    name
                    type {
                        name
                        value
                    }
                    website
                    organization_id
                    organization_number
                    affiliation_customer
                    affiliation_end_customer
                    affiliation_host_user
                    affiliation_partner
                    affiliation_provider
                    affiliation_site_owner
                    parent_organization {
                        organization_id
                    }
                    contacts {
                        id
                        first_name
                        last_name
                        contact_type {
                            name
                            value
                        }
                        emails {
                            id
                            name
                            type {
                                name
                                value
                            }
                        }
                        phones {
                            id
                            name
                            type {
                                name
                                value
                            }
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
                            }
                        }
                        member_of_groups {
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
                    created
                    creator {
                        email
                    }
                    modified
                    modifier {
                        email
                    }
                }
            }
            address_created {
                errors {
                    field
                    messages
                }
                address {
                    id
                    name
                    street
                    postal_code
                    postal_area
                    phone
                }
            }
            address_updated {
                errors {
                    field
                    messages
                }
                address {
                    id
                    name
                    street
                    postal_code
                    postal_area
                    phone
                }
            }
            subcreated {
                errors {
                    field
                    messages
                }
                contact {
                    id
                    first_name
                    last_name
                    contact_type {
                        name
                        value
                    }
                    emails {
                        id
                        name
                        type {
                            name
                            value
                        }
                    }
                    phones {
                        id
                        name
                        type {
                            name
                            value
                        }
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
                        }
                    }
                    member_of_groups {
                        name
                    }
                }
            }
            subupdated {
                errors {
                    field
                    messages
                }
                contact {
                    id
                    first_name
                    last_name
                    contact_type {
                        name
                        value
                    }
                    emails {
                        id
                        name
                        type {
                            name
                            value
                        }
                    }
                    phones {
                        id
                        name
                        type {
                            name
                            value
                        }
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
                        }
                    }
                    member_of_groups {
                        name
                    }
                }
            }
        }
    }
`;

export default function UpdateOrganizationMutation(organization, form) {
    const newAddress = [];
    const updateAddress = [];
    const deleteAddress = [];

    const newContacts = [];
    const updateContacts = [];
    const deleteContacts = [];

    const deleteRoles = [];

    if (form.props.isDirty_relationship_parent_of && organization.relationship_parent_of_relation_id) {
        deleteRoles.push({ relation_id: organization.relationship_parent_of_relation_id });
    }

    const addresses = organization.addresses;
    if (addresses) {
        Object.keys(addresses).forEach((address_key) => {
            let address = addresses[address_key];
            if (address.status === "saved") {
                if (!address.created || address.created === undefined) {
                    newAddress.push({
                        organization: organization.id,
                        name: "main",
                        street: address.street,
                        postal_code: address.postal_code,
                        postal_area: address.postal_area,
                        phone: address.phone
                    });
                } else {
                    updateAddress.push({
                        organization: organization.id,
                        name: "main",
                        id: address.id,
                        street: address.street,
                        postal_code: address.postal_code,
                        postal_area: address.postal_area,
                        phone: address.phone
                    });
                }
            } else if (address.status === "remove") {
                deleteAddress.push({ id: address.id });
            }
        });
    }
    const contacts = organization.contacts;
    if (contacts) {
        Object.keys(contacts).forEach((contact_key) => {
            let contact = contacts[contact_key];
            if (contact.status === "saved") {
                let fullName = contact.name.trim();
                if (fullName.includes(" ")) {
                    fullName = fullName.split(" ");
                    contact.first_name = fullName[0];
                    contact.last_name = fullName[1];
                } else {
                    contact.first_name = fullName;
                    contact.last_name = fullName;
                }
                // the backend should update the relationship when a node changes, not delete it to create a new one
                if (contact.origin === "store") {
                    if (form.props.isDirty_contacts_roles[contact_key]) {
                        if (contact.role_obj) {
                            deleteRoles.push({ relation_id: contact.role_obj.relation_id });
                        }
                    }
                }

                if (contact.created || contact.created !== undefined) {
                    updateContacts.push({
                        id: contact.id,
                        first_name: contact.first_name,
                        last_name: contact.last_name,
                        contact_type: contact.contact_type.value,
                        role_id: contact.role
                    });
                }
            } else if (contact.status === "remove") {
                deleteRoles.push({ relation_id: contact.role_relation_id });
            }
        });
    }

    const variables = {
        input: {
            update_input: {
                id: organization.id,
                name: organization.name,
                description: organization.description,
                organization_id: organization.organization_id,
                organization_number: organization.organization_number,
                type: organization.type,
                website: organization.website,
                affiliation_customer: organization.affiliation_customer,
                affiliation_end_customer: organization.affiliation_end_customer,
                affiliation_host_user: organization.affiliation_host_user,
                affiliation_partner: organization.affiliation_partner,
                affiliation_provider: organization.affiliation_provider,
                affiliation_site_owner: organization.affiliation_site_owner,
                incident_management_info: organization.incident_management_info,
                relationship_parent_of: organization.relationship_parent_of,
                clientMutationId: ""
            },
            create_subinputs: newContacts,
            update_subinputs: updateContacts,
            delete_subinputs: deleteContacts,
            create_address: newAddress,
            update_address: updateAddress,
            delete_address: deleteAddress,
            unlink_subinputs: deleteRoles
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.composite_organization.updated.errors) {
                return response.composite_organization.updated.errors;
            } else {
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
            }
        },
        updater: (proxyStore) => {},
        onError: (err) => console.error(err)
    });
}
