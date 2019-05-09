import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        createContact(input: $input) {
            contact {
                id
                handleId
                nodeMetaType
                nodeName
                name
                firstName
                lastName
                email
                phone
            }
        }
    }
`;

let tempID = 0;

export default function CreateContactMutation(
    firstName,
    lastName,
    email,
    phone,
    viewerId,
    callback
) {
    const variables = {
        input: {
            name: firstName + " " + lastName,
            firstName,
            lastName,
            email,
            phone,
            handleId: 200 + tempID,
            nodeName: "Contact",
            nodeMetaType: "PHYSICAL",
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response) => {
            console.log(response, environment);
            callback();
        },
        onError: (err) => console.error(err),
        optimisticUpdater: (proxyStore) => {
            // 1 - create the `newContact` as a mock that can be added to the store
            const id = "client:newPost:" + tempID++;
            const newContact = proxyStore.create(id, "Contact");
            newContact.setValue(id, "id");
            newContact.setValue(firstName, "firstName");
            newContact.setValue(lastName, "lastName");
            newContact.setValue(email, "email");
            newContact.setValue(phone, "phone");
            // newContact.setValue(200 + tempID, "handleId");
            // newContact.setValue("Contact", "nodeName");
            // newContact.setValue("PHYSICAL", "nodeMetaType");

            // 2 - add `newContact` to the store
            const viewerProxy = proxyStore.get(viewerId);
            console.log(viewerProxy);
            const connection = ConnectionHandler.getConnection(
                viewerProxy,
                "ModelList_allContacts",
                []
            );
            console.log(connection);
            if (connection) {
                ConnectionHandler.insertEdgeAfter(connection, newContact);
            }
        },
        updater: (proxyStore) => {
            // 1 - retrieve the `newContact` from the server response
            const createContactField = proxyStore.getRootField("createContact");
            const newContact = createContactField.getLinkedRecord("contact");

            // 2 - add `newContact` to the store
            const viewerProxy = proxyStore.get(viewerId);
            const connection = ConnectionHandler.getConnection(
                viewerProxy,
                "ModelList_allContacts",
                []
            );

            if (connection) {
                ConnectionHandler.insertEdgeAfter(connection, newContact);
            }
        }
    });
}
