import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";

import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import UpdateEmailMutation from "../UpdateEmailMutation";
import UpdatePhoneMutation from "../UpdatePhoneMutation";
import CreateAddressMutation from "../CreateAddressMutation";
import UpdateAddressMutation from "../UpdateAddressMutation";
import DeleteAddressMutation from "../DeleteAddressMutation";
import DeleteRelationshMutation from "../DeleteRelationshMutation";

const mutation = graphql`
    mutation UpdateOrganizationMutation($input: UpdateOrganizationInput!) {
        update_organization(input: $input) {
            errors {
                field
                messages
            }
            organization {
                handle_id
                name
                type
                website
                customer_id
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
    }
`;

export default function UpdateOrganizationMutation(organization, callback) {
    const variables = {
        input: {
            handle_id: organization.id,
            name: organization.name,
            description: organization.description,
            customer_id: organization.customer_id,
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
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.update_organization.errors) {
                return response.update_organization.errors;
            } else {
                const addresses = organization.addresses;
                if (addresses) {
                    Object.keys(addresses).forEach((address_key) => {
                        let address = addresses[address_key];
                        if (address.status === "saved") {
                            if (address.origin === "store") {
                                UpdateAddressMutation(organization.id, address);
                            } else {
                                CreateAddressMutation(organization.id, address);
                            }
                        } else if (address.status === "remove") {
                            DeleteAddressMutation(address.handle_id);
                        }
                    });
                }

                const contacts = organization.contacts;
                if (contacts) {
                    Object.keys(contacts).forEach((contact_key) => {
                        let contact = contacts[contact_key];
                        if (contact.status === "saved") {
                            let fullName = contact.name;
                            fullName = fullName.split(" ");
                            contact.first_name = fullName[0];
                            contact.last_name = fullName[1];

                            if (!contact.created || contact.created === undefined) {
                                CreateContactInlineMutation(
                                    contact.first_name,
                                    contact.last_name,
                                    contact.email,
                                    contact.phone,
                                    contact.organization,
                                    null
                                );
                            } else {
                                if (contact.origin === "store") {
                                    DeleteRelationshMutation(contact.role_relation_id);
                                } else if (contact.origin === "new") {
                                    if (contact.role && contact.role_obj.relation_id) {
                                        DeleteRelationshMutation(contact.role_obj.relation_id);
                                    }
                                }
                                UpdateContactInlineMutation(contact, organization.id, null, contact.role);
                                UpdateEmailMutation(contact.handle_id, contact.email, contact.email_obj);
                                UpdatePhoneMutation(contact.handle_id, contact.phone, contact.phone_obj);
                            }
                        } else if (contact.status === "remove") {
                            DeleteRelationshMutation(contact.role_relation_id);
                        }
                    });
                }
                // callback.push("/community/organizations/" + organization.id);
                // const payload = proxyStore.get(contact.id, "Contact");
                // contact_node.setValue(contact.first_name, "first_name");
                // contact_node.setValue(contact.last_name, "last_name");
                // contact_node.setValue(contact.email, "email");
                // contact_node.setValue(contact.phone, "phone");
                // contact_node.setValue(contact.contact_type, "contact_type");
            }
        },
        updater: (proxyStore) => {
            // Get the payload returned from the server
            const payload = proxyStore.get(organization.id, "Organization");
            console.log("pp", payload);
            // Add it to the user's todo list
        },
        onError: (err) => console.error(err)
    });
}
