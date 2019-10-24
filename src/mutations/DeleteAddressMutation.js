import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ROOT_ID } from "relay-runtime";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteAddressMutation($input: DeleteAddressInput!) {
        delete_address(input: $input) {
            success
        }
    }
`;

export default function DeleteAddressMutation(handle_id, callback) {
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
        onCompleted: (response) => {
            console.log(response, environment);
        },
        configs: [
            {
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                deletedIDFieldName: "handle_id"
            }
        ]
    });
}
