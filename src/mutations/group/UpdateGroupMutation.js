import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import UpdateEmailMutation from "../email/UpdateEmailMutation";
import UpdatePhoneMutation from "../phone/UpdatePhoneMutation";
import DeleteRelationshipMutation from "../DeleteRelationshipMutation";
import RelationshipGroupContactQuery from "../group/RelationshipGroupContactQuery";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateGroupMutation($input: UpdateGroupInput!) {
        update_group(input: $input) {
            errors {
                field
                messages
            }
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

export default function UpdateGroupMutation(group, notifications) {
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
        onCompleted: (response, errors) => {
            if (response.update_group.errors) {
                return response.update_group.errors;
            } else {
                const members = group.members;
                if (members) {
                    Object.keys(members).forEach((member_key) => {
                        let member = members[member_key];
                        if (member.status === "saved") {
                            let fullName = member.name;
                            if (fullName.includes(" ")) {
                                fullName = fullName.split(" ");
                                member.first_name = fullName[0];
                                member.last_name = fullName[1];
                            } else {
                                member.first_name = fullName;
                                member.last_name = fullName;
                            }

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
                                UpdateContactInlineMutation(member, member.organization, group.id, null);

                                UpdateEmailMutation(member.id, member.email, member.email_obj);
                                UpdatePhoneMutation(member.id, member.phone, member.phone_obj);
                            }
                        } else if (member.status === "remove") {
                            RelationshipGroupContactQuery(group.id, member.handle_id, DeleteRelationshipMutation);
                        }
                    });
                }
                notifications(i18n.t("notify.changes-saved"), "success");
                // const payload = proxyStore.get(contact.id, "Contact");
                // contact_node.setValue(contact.first_name, "first_name");
                // contact_node.setValue(contact.last_name, "last_name");
                // contact_node.setValue(contact.email, "email");
                // contact_node.setValue(contact.phone, "phone");
                // contact_node.setValue(contact.contact_type, "contact_type");
            }
        },
        onError: (err) => console.error(err)
    });
}
