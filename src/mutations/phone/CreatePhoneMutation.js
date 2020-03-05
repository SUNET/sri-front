import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreatePhoneMutation($input: CreatePhoneInput!) {
        create_phone(input: $input) {
            errors {
                field
                messages
            }
            phone {
                id
                name
                type
            }
        }
    }
`;

let tempID = 0;

function CreatePhoneMutation(contact, name, type) {
    const variables = {
        input: {
            contact,
            name,
            type,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID
            }
        ]
    });
}

export default CreatePhoneMutation;
