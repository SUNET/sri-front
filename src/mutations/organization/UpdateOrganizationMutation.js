import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";

import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import UpdateEmailMutation from "../UpdateEmailMutation";
import UpdatePhoneMutation from "../UpdatePhoneMutation";
import DeleteRelationshMutation from "../DeleteRelationshMutation";
import RelationshipGroupContactQuery from "../RelationshipGroupContactQuery";

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
                comments {
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

export default function UpdateOrganizationMutation(organization, callback) {
    const variables = {
        input: {
            handle_id: organization.id,
            name: organization.name,
            description: organization.description,
            type: organization.type,
            incident_management_info: organization.incident_management_info,
            relationship_parent_of: organization.relationship_parent_of,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.update_organization.errors) {
                return response.update_organization.errors;
            } else {
                const contacts = organization.contacts;
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
                                DeleteRelationshMutation(contact.role_obj.relation_id);
                            }
                            UpdateContactInlineMutation(contact, organization.id, null, contact.role);
                            UpdateEmailMutation(contact.handle_id, contact.email, contact.email_obj);
                            UpdatePhoneMutation(contact.handle_id, contact.phone, contact.phone_obj);
                        }
                    } else if (contact.status === "remove") {
                        RelationshipGroupContactQuery(organization.id, contact.handle_id, DeleteRelationshMutation);
                    }
                });
                callback.push("/community/organizations/" + organization.id);
                // const payload = proxyStore.get(contact.id, "Contact");
                // contact_node.setValue(contact.first_name, "first_name");
                // contact_node.setValue(contact.last_name, "last_name");
                // contact_node.setValue(contact.email, "email");
                // contact_node.setValue(contact.phone, "phone");
                // contact_node.setValue(contact.contact_type, "contact_type");
            }
        },
        onError: (err) => console.error(err)
    });
}
