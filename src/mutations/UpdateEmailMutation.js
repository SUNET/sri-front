import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation UpdateEmailMutation($input: UpdateEmailInput!) {
        update_email(input: $input) {
            errors {
                field
                messages
            }
            email {
                handle_id
                name
                type
            }
        }
    }
`;

let tempID = 0;

function UpdateEmailMutation(contact, name, email) {
    const variables = {
        input: {
            contact,
            name,
            type: email.type,
            handle_id: email.handle_id,
            clientMutationId: tempID++
        }
    };
    const optimisticResponse = {
        update_email: {
            email: {
                contact,
                name,
                type: email.type,
                handle_id: email.handle_id
            }
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        optimisticResponse,
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

export default UpdateEmailMutation;
