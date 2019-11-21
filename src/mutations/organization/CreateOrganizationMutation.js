import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import CreateComentMutation from "../CreateCommentMutation";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation CreateOrganizationMutation($input: CompositeOrganizationMutationInput!) {
        composite_organization(input: $input) {
            created {
                errors {
                    field
                    messages
                }
                organization {
                    handle_id
                    name
                    type
                    website
                    organization_id
                    organization_number
                    affiliation_customer
                    affiliation_end_customer
                    affiliation_host_user
                    affiliation_partner
                    affiliation_provider
                    affiliation_site_owner
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
                    handle_id
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
                    handle_id
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
                    handle_id
                    first_name
                    last_name
                    contact_type
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
                    handle_id
                    first_name
                    last_name
                    contact_type
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
                    member_of_groups {
                        name
                    }
                }
            }
        }
    }
`;

export default function CreateOrganizationMutation(organization, form) {
    const newAddress = [];
    const updateAddress = [];
    const deleteAddress = [];

    const newContacts = [];
    const updateContacts = [];
    const deleteContacts = [];

    const addresses = organization.addresses;
    if (addresses) {
        Object.keys(addresses).forEach((address_key) => {
            let address = addresses[address_key];
            if (address.status === "saved") {
                if (!address.created || address.created === undefined) {
                    newAddress.push({
                        organization: organization.handle_id,
                        name: "main",
                        street: address.street,
                        postal_code: address.postal_code,
                        postal_area: address.postal_area,
                        phone: address.phone
                    });
                } else {
                    updateAddress.push({
                        organization: organization.handle_id,
                        name: "main",
                        handle_id: address.handle_id,
                        street: address.street,
                        postal_code: address.postal_code,
                        postal_area: address.postal_area,
                        phone: address.phone
                    });
                }
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

                if (!contact.created || contact.created === undefined) {
                    newContacts.push({
                        first_name: contact.first_name,
                        last_name: contact.last_name,
                        contact_type: "person",
                        email: contact.email,
                        email_type: "personal",
                        phone: contact.phone,
                        phone_type: "personal",
                        role_handle_id: contact.role
                    });
                } else {
                    updateContacts.push({
                        handle_id: contact.handle_id,
                        first_name: contact.first_name,
                        last_name: contact.last_name,
                        contact_type: contact.contact_type.toLowerCase(),
                        email_handle_id: contact.email_obj ? contact.email_obj.handle_id : null,
                        email: contact.email,
                        email_type: contact.email_obj ? contact.email_obj.type : "personal",
                        phone_handle_id: contact.phone_obj ? contact.phone_obj.handle_id : null,
                        phone: contact.phone,
                        phone_type: contact.phone_obj ? contact.email_obj.type : "personal",
                        role_handle_id: contact.role
                    });
                }
            }
        });
    }

    const variables = {
        input: {
            create_input: {
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
            delete_address: deleteAddress
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.composite_organization.created.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.create_organization.created.errors;
            } else {
                const organization_id = response.composite_organization.created.organization.handle_id;
                if (organization.comment) {
                    CreateComentMutation(organization_id, organization.comment);
                }
                form.props.history.push("/community/organizations/" + organization_id);
                form.props.notify(i18n.t("notify.organization-created-success"), "success");
            }
        },
        updater: (proxyStore) => {},
        onError: (err) => console.error(err)
    });
}
