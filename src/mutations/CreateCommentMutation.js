import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateCommentMutation($input: CreateCommentInput!) {
        create_comment(input: $input) {
            comment {
                object_id
                comment
                user {
                    first_name
                    last_name
                }
                submit_date
            }
        }
    }
`;

let tempID = 0;

function CreateCommentMutation(object_id, comment) {
    const variables = {
        input: {
            object_id,
            comment,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, environment);
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID,
                // connectionInfo: [
                //     {
                //         key: "ContactList_contacts",
                //         rangeBehavior: "append"
                //     }
                // ],
                // edgeName: "contactEdge"
            }
        ]
    });
}

export default CreateCommentMutation;
