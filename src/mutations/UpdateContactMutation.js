import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateContactMutation($input: UpdateContactInput!) {
            updateContact(input: $input){
                contact{
                    id
                }
            }
    }
`;

export default function UpdateContactMutation(
    id,
    firstName,
    lastName,
    email,
    phone,
    viewerId
) {
    const variables = {
        input: {
            id,
            name: firstName + " " + lastName,
            firstName,
            lastName,
            email,
            phone,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response) => {
            console.log(response, environment);
        },
        onError: (err) => console.error(err),
        updater: (proxyStore) => {
            const contact = proxyStore.get(id, "Contact");
            contact.setValue(firstName, "firstName");
            contact.setValue(lastName, "lastName");
            contact.setValue(email, "email");
            contact.setValue(phone, "phone");
        }
    });
}
