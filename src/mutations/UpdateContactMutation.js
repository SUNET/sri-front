import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateContactMutation($input: UpdateNIContactMutationInput!) {
        update_contact(input: $input) {
            contact {
                handle_id
            }
        }
    }
`;

export default function UpdateContactMutation(
    handle_id,
    first_name,
    last_name,
    email,
    phone,
    contact_type
) {
    const variables = {
        input: {
            handle_id,
            first_name,
            last_name,
            email,
            phone,
            contact_type,
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
            const contact = proxyStore.get(handle_id, "Contact");
            contact.setValue(first_name, "first_name");
            contact.setValue(last_name, "last_name");
            contact.setValue(email, "email");
            contact.setValue(phone, "phone");
            contact.setValue(contact_type, "contact_type");
        }
    });
}
