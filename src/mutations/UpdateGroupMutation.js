import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateGroupMutation($input: UpdateGroupInput!) {
        update_group(input: $input) {
            group {
                handle_id
                name
                description
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

export default function UpdateGroupMutation(group, callback) {
    const variables = {
        input: {
            handle_id: group.id,
            name: group.name,
            description: group.description,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        updater: (proxyStore, data) => {
            callback.push("/community/groups/" + group.id);
            // const payload = proxyStore.get(contact.id, "Contact");
            // console.log(proxyStore.getRoot());
            // console.log(proxyStore.getDataID());
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err),
    });
}
