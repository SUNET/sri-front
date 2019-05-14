import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteContactMutation($input: DeleteNIContactMutationInput!) {
        delete_contact(input: $input) {
            nodehandle
        }
    }
`;

export default function DeleteContactMutation(handle_id, viewerId, callback) {
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
            console.log("Upadter");
            const deleteContactField = proxyStore.getRootField("deleteContact");
            console.log(deleteContactField);
            const handle_id = deleteContactField.getValue("handle_id");
            console.log(handle_id);
            const viewerProxy = proxyStore.get(viewerId);
            console.log(viewerProxy);
            const connection = ConnectionHandler.getConnection(
                viewerProxy,
                "ContactList_contacts"
            );
            ConnectionHandler.deleteNode(connection, handle_id);
            callback();
        }
    });
}
