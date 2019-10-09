import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateCommentMutation from "./CreateCommentMutation";
import CreateContactInlineMutation from "./CreateContactInlineMutation";
import AddMemberGroupMutation from "./AddMemberGroupMutation";
import UpdateContactInlineMutation from "./UpdateContactInlineMutation";
import UpdateEmailMutation from "./UpdateEmailMutation";
import UpdatePhoneMutation from "./UpdatePhoneMutation";

const mutation = graphql`
    mutation CreateGroupMutation($input: CreateGroupInput!) {
        create_group(input: $input) {
            errors {
                field
                messages
            }
            group {
                handle_id
                name
                description
            }
        }
    }
`;

let tempID = 0;

function CreateGroupMutation(group, callback) {
    const variables = {
        input: {
            name: group.name,
            description: group.description,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(errors);
            console.log(response);
            const group_id = response.create_group.group.handle_id;
            if (group.comment) {
                CreateCommentMutation(group_id, group.comment);
            }
            const members = group.members;
            Object.keys(members).forEach((member_key) => {
                let member = members[member_key];
                if (!member.created || member.created === undefined) {
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
                } else {
                    AddMemberGroupMutation(member, group_id);
                    UpdateContactInlineMutation(member, member.organization, group_id);
                    UpdateEmailMutation(member.handle_id, member.email, member.email_obj);
                    UpdatePhoneMutation(member.handle_id, member.phone, member.phone_obj);
                }
            });

            callback.push("/community/groups/" + group_id);
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
}

export default CreateGroupMutation;
