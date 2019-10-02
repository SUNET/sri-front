import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateComentMutation from "./CreateCommentMutation";
import AddMemberGroupMutation from "./AddMemberGroupMutation";

const mutation = graphql`
    mutation CreateGroupMutation($input: CreateGroupInput!) {
        create_group(input: $input) {
            group {
                handle_id
                name
                description
            }
        }
    }
`;

let tempID = 0;

function CreateGroupMutation(
    name,
    description,
    comment,
    members,
    callback
) {
    const variables = {
        input: {
            name,
            description,
            clientMutationId: tempID++
        }
    };
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(errors);
                console.log(response, environment);
                const group_id = response.create_contact.contact.handle_id;
                CreateComentMutation(group_id, comment);

                Object.keys(members).forEach(member => {
                    AddMemberGroupMutation(member, group_id);
                });

                callback().replace("/community/groups/" + response.create_group.group.handle_id);
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
                    connectionInfo: [
                        {
                            key: "GroupList_groups",
                            rangeBehavior: "append"
                        }
                    ],
                    edgeName: "groupEdge"
                }
            ]
        });
    });
}

export default CreateGroupMutation;
