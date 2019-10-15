import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation UpdateContactInlineMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            errors {
                field
                messages
            }
            contact {
                handle_id
                first_name
                last_name
                contact_type
                roles {
                    name
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
`;

let tempID = 0;

function UpdateContactInlineMutation(contact, organization, group, role) {
    const variables = {
        input: {
            handle_id: contact.handle_id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            contact_type: contact.contact_type.toLowerCase(),
            relationship_works_for: organization,
            relationship_member_of: group,
            role: role,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(errors);
            console.log(response, environment);
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                connectionInfo: [
                    {
                        key: "ContactList_contacts",
                        rangeBehavior: "append"
                    }
                ],
                edgeName: "contactEdge"
            }
        ]
    });
}

export default UpdateContactInlineMutation;
