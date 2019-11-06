import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateCommentMutation from "../CreateCommentMutation";
import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import AddMemberGroupMutation from "../contact/AddMemberGroupMutation";
import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import UpdateEmailMutation from "../email/UpdateEmailMutation";
import UpdatePhoneMutation from "../phone/UpdatePhoneMutation";

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
            console.log(response, errors);
            if (response.create_group.errors) {
                return response.create_group.errors;
            } else {
                const group_id = response.create_group.group.handle_id;
                if (group.comment) {
                    CreateCommentMutation(group_id, group.comment);
                }
                const members = group.members;
                if (members) {
                    Object.keys(members).forEach((member_key) => {
                        let member = members[member_key];
                        if (!member.created || member.created === undefined) {
                            let fullName = member.name;
                            if (fullName.includes(" ")) {
                                fullName = fullName.split(" ");
                                member.first_name = fullName[0];
                                member.last_name = fullName[1];
                            } else {
                                member.first_name = fullName;
                                member.last_name = fullName;
                            }

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
                            UpdateContactInlineMutation(member, member.organization, group_id, null);
                            UpdateEmailMutation(member.handle_id, member.email, member.email_obj);
                            UpdatePhoneMutation(member.handle_id, member.phone, member.phone_obj);
                        }
                    });
                }
                callback.push("/community/groups");
            }
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