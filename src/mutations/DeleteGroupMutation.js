import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { ROOT_ID } from "relay-runtime";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation DeleteGroupMutation($input: DeleteGroupInput!) {
        delete_group(input: $input) {
            success
        }
    }
`;

export default function DeleteGroupMutation(handle_id, callback) {
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
            callback();
        },
        configs: [
            {
                type: "RANGE_DELETE",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                connectionKeys: [
                    {
                        key: "GroupList_groups",
                        rangeBehavior: "append"
                    }
                ],
                pathToConnection: ["client:root", "contacts"],
                deletedIDFieldName: "handle_id"
            }
        ]
    });
}
