import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ConnectionHandler } from "relay-runtime";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteContactMutation($input: DeleteContactInput!) {
        deleteContact(input: $input) {
            deletedId
        }
    }
`;

export default function DeleteContactMutation(contactId, viewerId, callback) {
    const variables = {
        input: {
            id: contactId,
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
            const deletedId = deleteContactField.getValue("deletedId");
            console.log(deletedId);
            const viewerProxy = proxyStore.get(viewerId);
            console.log(viewerProxy);
            const connection = ConnectionHandler.getConnection(
                viewerProxy,
                "ModelList_allContacts"
            );
            ConnectionHandler.deleteNode(connection, deletedId);
            callback();
        }
    });
}
