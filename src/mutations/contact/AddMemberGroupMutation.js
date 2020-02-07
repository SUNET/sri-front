import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation AddMemberGroupMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            contact {
                id
                first_name
                last_name
                contact_type
                member_of_groups {
                    id
                    name
                }
            }
        }
    }
`;

export default function AddMemberGroupMutation(contact, group) {
    const variables = {
        input: {
            id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            contact_type: contact.contact_type.toLowerCase(),
            relationship_member_of: group,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        updater: (proxyStore, data) => {
            // const payload = proxyStore.get(contact.id, "Contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err),
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
