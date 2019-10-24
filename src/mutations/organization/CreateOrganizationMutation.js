import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import CreateComentMutation from "../CreateCommentMutation";
import CreateAddressMutation from "../CreateAddressMutation";
import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import UpdateEmailMutation from "../UpdateEmailMutation";
import UpdatePhoneMutation from "../UpdatePhoneMutation";

const mutation = graphql`
    mutation CreateOrganizationMutation($input: CreateOrganizationInput!) {
        create_organization(input: $input) {
            errors {
                field
                messages
            }
            organization {
                handle_id
                name
                type
                incident_management_info
                affiliation_customer
                affiliation_end_customer
                affiliation_host_user
                affiliation_partner
                affiliation_provider
                affiliation_site_owner
                customer_id
                addresses {
                    handle_id
                    website
                    street
                    postal_code
                    postal_area
                    phone
                }
                incoming {
                    name
                    relation {
                        relation_id
                        type
                        end {
                            handle_id
                            node_name
                        }
                        start {
                            handle_id
                            node_name
                        }
                    }
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
    }
`;

let tempID = 0;

function CreateOrganizationMutation(organization, callback) {
    const variables = {
        input: {
            name: organization.name,
            description: organization.description,
            type: organization.type,
            customer_id: organization.customer_id,
            affiliation_customer: organization.affiliation_customer,
            affiliation_end_customer: organization.affiliation_end_customer,
            affiliation_host_user: organization.affiliation_host_user,
            affiliation_partner: organization.affiliation_partner,
            affiliation_provider: organization.affiliation_provider,
            affiliation_site_owner: organization.affiliation_site_owner,
            incident_management_info: organization.incident_management_info,
            relationship_parent_of: organization.relationship_parent_of,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);

            if (response.create_organization.errors) {
                return response.create_organization.errors;
            } else {
                const organization_id = response.create_organization.organization.handle_id;
                if (organization.comment) {
                    CreateComentMutation(organization_id, organization.comment);
                }

                const addresses = organization.addresses;
                if (addresses) {
                    Object.keys(addresses).forEach((address_key) => {
                        let address = addresses[address_key];
                        CreateAddressMutation(organization_id, address);
                    });
                }

                const contacts = organization.contacts;
                if (contacts) {
                    Object.keys(contacts).forEach((contact_key) => {
                        let contact = contacts[contact_key];
                        if (!contact.created || contact.created === undefined) {
                            let fullName = contact.name;
                            fullName = fullName.split(" ");
                            contact.first_name = fullName[0];
                            contact.last_name = fullName[1];

                            CreateContactInlineMutation(
                                contact.first_name,
                                contact.last_name,
                                contact.email,
                                contact.phone,
                                organization_id,
                                null
                            );
                        } else {
                            UpdateContactInlineMutation(contact, organization_id, null, contact.role);
                            UpdateEmailMutation(contact.handle_id, contact.email, contact.email_obj);
                            UpdatePhoneMutation(contact.handle_id, contact.phone, contact.phone_obj);
                        }
                    });
                }

                callback.push("/community/organizations");
            }
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                connectionInfo: [
                    {
                        key: "OrganizationList_organizations",
                        rangeBehavior: "append"
                    }
                ],
                edgeName: "organizationEdge"
            }
        ]
    });
}

export default CreateOrganizationMutation;
