import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ConnectionHandler } from "relay-runtime";

const mutation = graphql`
    mutation CreateContactMutation($input: CreateNIContactMutationInput!) {
        create_contact(input: $input) {
            contacttype {
                handle_id
                first_name
                last_name
                email
                phone
                contact_type
            }
        }
    }
`;

function sharedUpdater(proxyStore, newEdge) {
    // Get the current user record from the store
    // const userProxy = proxyStore.get(user.id);

    // Get the user's Todo List using ConnectionHandler helper
    const connection = ConnectionHandler.getConnection(
        proxyStore,
        "ContactList_contacts"
    );

    if (connection) {
        ConnectionHandler.insertEdgeAfter(connection, newEdge);
    }
}

let tempID = 0;

export default function CreateContactMutation(
    user,
    first_name,
    last_name,
    email,
    phone,
    contact_type,
    callback
) {
    const variables = {
        input: {
            first_name,
            last_name,
            email,
            phone,
            contact_type,
            clientMutationId: tempID++
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
            const id = "client:newContact:" + tempID++;
            const newContact = proxyStore.create(id, "Contact");
            newContact.setValue(id, "handle_id");
            newContact.setValue(first_name, "first_name");
            newContact.setValue(last_name, "last_name");
            newContact.setValue(email, "email");
            newContact.setValue(phone, "phone");
            newContact.setValue(contact_type, "contact_type");

            const newEdge = proxyStore.create(
                "client:newEdge:" + tempID++,
                "ContactEdge"
            );
            newEdge.setLinkedRecord(newContact, "node");

            sharedUpdater(proxyStore, newEdge);
        },
        updater: (proxyStore) => {
            const payload = proxyStore.getRootField("create_contact");
            const newEdge = payload.getLinkedRecord("contactEdge");
            sharedUpdater(proxyStore, newEdge);
        }
    });
}
