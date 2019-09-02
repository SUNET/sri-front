import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateContactMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            contact {
                handle_id
            }
        }
    }
`;

export default function UpdateContactMutation(contact) {
    const variables = {
        input: {
            handle_id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone,
            contact_type: contact.contact_type,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, environment);
        },
        onError: (err) => console.error(err),
        updater: (proxyStore) => {
            console.log(proxyStore.get(contact.id, "Contact"));
            const contact_node = proxyStore.get(contact.id, "Contact");
            contact_node.setValue(contact.first_name, "first_name");
            contact_node.setValue(contact.last_name, "last_name");
            contact_node.setValue(contact.email, "email");
            contact_node.setValue(contact.phone, "phone");
            contact_node.setValue(contact.contact_type, "contact_type");
        }
    });
}
