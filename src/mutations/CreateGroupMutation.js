import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateCommentMutation from "./CreateCommentMutation";
import CreateContactInlineMutation from "./CreateContactInlineMutation";
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
    members,
    comment,
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
                const group_id = response.create_group.group.handle_id;
                CreateCommentMutation(group_id, comment);

                Object.keys(members).forEach(member_key => {
                    let member = members[member_key];
                    if(!member.created || member.created === undefined){
                        let fullName = member.name;
                        fullName = fullName.split(" ");
                        member.first_name = fullName[0];
                        member.last_name = fullName[1];

                        CreateContactInlineMutation(
                            member.first_name,
                            member.last_name,
                            member.email,
                            member.phone,
                            member.organization,
                            group_id
                        );
                    }else{
                        console.log(member);
                        debugger;
                        AddMemberGroupMutation(member, group_id);
                    }
                });

                callback().push("/community/groups/" + response.create_group.group.handle_id);
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
