import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteContactMutation($input: DeleteNIContactMutationInput!) {
        delete_contact(input: $input) {
            contact {
                handle_id
            }
        }
    }
`;

export default function DeleteContactMutation(handle_id, callback) {
    const variables = {
        input: {
            handle_id: handle_id,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onError: (err) => console.error(err),
        updater: (proxyStore) => {
            const deleteContactField = proxyStore.getRootField(
                "delete_contact"
            );
            const handle_id = deleteContactField.getValue("handle_id");
            const connection = ConnectionHandler.getConnection(
                "ContactList_contacts"
            );
            ConnectionHandler.deleteNode(connection, handle_id);
        }
    });
}
