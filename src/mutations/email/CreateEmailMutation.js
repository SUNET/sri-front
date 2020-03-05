import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateEmailMutation($input: CreateEmailInput!) {
        create_email(input: $input) {
            errors {
                field
                messages
            }
            email {
                id
                name
                type
            }
        }
    }
`;

let tempID = 0;

function CreateEmailMutation(contact, name, type) {
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

export default CreateEmailMutation;
