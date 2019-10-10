import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

import UpdateContactInlineMutation from "./UpdateContactInlineMutation";
import CreateContactInlineMutation from "./CreateContactInlineMutation";
import UpdateEmailMutation from "./UpdateEmailMutation";
import UpdatePhoneMutation from "./UpdatePhoneMutation";
import DeleteRelationshMutation from "./DeleteRelationshMutation";

import RelationshipGroupContactQuery from "./RelationshipGroupContactQuery";

const mutation = graphql`
    mutation UpdateGroupMutation($input: UpdateGroupInput!) {
        update_group(input: $input) {
            group {
                handle_id
                name
                description
                comments {
                    user {
                        first_name
                        last_name
                    }
                    comment
                    submit_date
                }
            }
        }
    }
`;

export default function UpdateGroupMutation(group, callback) {
    const variables = {
        input: {
            handle_id: group.id,
            name: group.name,
            description: group.description,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (proxyStore, data) => {
            const members = group.members;
            Object.keys(members).forEach((member_key) => {
                let member = members[member_key];
                if (member.status === "saved") {
                    let fullName = member.name;
                    fullName = fullName.split(" ");
                    member.first_name = fullName[0];
                    member.last_name = fullName[1];

                    if (!member.created || member.created === undefined) {
                        CreateContactInlineMutation(
                            member.first_name,
                            member.last_name,
                            member.email,
                            member.phone,
                            member.organization,
                            group.id
                        );
                    } else {
                        UpdateContactInlineMutation(member, member.organization, group.id);

                        UpdateEmailMutation(member.id, member.email, member.email_obj);
                        UpdatePhoneMutation(member.id, member.phone, member.phone_obj);
                    }
                } else if (member.status === "remove") {
                    RelationshipGroupContactQuery(group.id, member.handle_id, DeleteRelationshMutation);
                }
            });
            callback.push("/community/groups/" + group.id);
            // const payload = proxyStore.get(contact.id, "Contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err)
    });
}
