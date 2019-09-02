import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateCommentMutation($input: CreateCommentInput!) {
        create_comment(input: $input) {
            comment {
                object_pk
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

function CreateCommentMutation(object_pk, comment) {
    const variables = {
        input: {
            object_pk,
            comment,
            clientMutationId: tempID++
        }
    };
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(response, environment);
                if (errors) {
                    return reject(errors);
                }
                return resolve(response);
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
    });
}

export default CreateCommentMutation;
