import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

import UpdateContactInlineMutation from "./UpdateContactInlineMutation";
import CreateContactInlineMutation from "./CreateContactInlineMutation";
import UpdateEmailMutation from "./UpdateEmailMutation";
import UpdatePhoneMutation from "./UpdatePhoneMutation";

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
            Object.keys(members).forEach(member_key => {
                let member = members[member_key];
                console.log("Enter " + member_key);
                if(member.status === "saved"){
                    let fullName = member.name;
                    fullName = fullName.split(" ");
                    member.first_name = fullName[0];
                    member.last_name = fullName[1];

                    if(!member.created || member.created === undefined){
                        CreateContactInlineMutation(
                            member.first_name,
                            member.last_name,
                            member.email,
                            member.phone,
                            member.organization,
                            group.id
                        );
                    }else{
                        UpdateContactInlineMutation(
                            member.handle_id,
                            member.first_name,
                            member.last_name,
                            member.contact_type,
                            member.organization,
                        );

                        UpdateEmailMutation(member.id, member.email, member.email_obj);
                        UpdatePhoneMutation(member.id, member.phone, member.phone_obj);
                    }
                }
            });
            // callback.push("/community/groups/" + group.id);
            // const payload = proxyStore.get(contact.id, "Contact");
            // console.log(proxyStore.getRoot());
            // console.log(proxyStore.getDataID());
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err),
    });
}
