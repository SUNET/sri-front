import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import CreateComentMutation from "../CreateCommentMutation";
import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation CreateGroupMutation($input: CompositeGroupMutationInput!) {
        composite_group(input: $input) {
            created {
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
            subcreated {
                errors {
                    field
                    messages
                }
                contact {
                    handle_id
                    first_name
                    last_name
                    contact_type
                    emails {
                        handle_id
                        name
                        type
                    }
                    phones {
                        handle_id
                        name
                        type
                    }
                    member_of_groups {
                        name
                    }
                }
            }
            subupdated {
                errors {
                    field
                    messages
                }
                contact {
                    handle_id
                    first_name
                    last_name
                    contact_type
                    emails {
                        handle_id
                        name
                        type
                    }
                    phones {
                        handle_id
                        name
                        type
                    }
                    member_of_groups {
                        name
                    }
                }
            }
        }
    }
`;

export default function UpdateGroupMutation(group, form) {
    const newMembers = [];
    const updateMembers = [];

    const members = group.members;
    if (members) {
        Object.keys(members).forEach((member_key) => {
            let member = members[member_key];
            if (member.status === "saved") {
                let fullName = member.name.trim();
                if (fullName.includes(" ")) {
                    fullName = fullName.split(" ");
                    member.first_name = fullName[0];
                    member.last_name = fullName[1];
                } else {
                    member.first_name = fullName;
                    member.last_name = fullName;
                }
                if (!member.created || member.created === undefined) {
                    newMembers.push({
                        first_name: member.first_name,
                        last_name: member.last_name,
                        contact_type: "person",
                        email: member.email,
                        email_type: "personal",
                        phone: member.phone,
                        phone_type: "personal",
                        relationship_works_for: member.organization
                    });
                } else {
                    updateMembers.push({
                        handle_id: member.handle_id,
                        first_name: member.first_name,
                        last_name: member.last_name,
                        contact_type: member.contact_type,
                        email_handle_id: member.email_obj ? member.email_obj.handle_id : null,
                        email: member.email,
                        email_type: member.email_obj ? member.email_obj.type : "personal",
                        phone_handle_id: member.phone_obj ? member.phone_obj.handle_id : null,
                        phone: member.phone,
                        phone_type: member.phone_obj ? member.email_obj.type : "personal",
                        relationship_works_for: member.organization
                    });
                }
            }
        });
    }

    const variables = {
        input: {
            create_input: {
                handle_id: group.handle_id,
                name: group.name,
                description: group.description,
                clientMutationId: ""
            },
            create_subinputs: newMembers,
            update_subinputs: updateMembers
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.composite_group.created.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.composite_group.created.errors;
            } else {
                const group_id = response.composite_group.created.group.handle_id;
                if (group.comment) {
                    CreateComentMutation(group_id, group.comment);
                }
                form.props.notify(i18n.t("notify.group-created-success"), "success");
                form.props.history.push("/community/groups/" + group_id);
            }
        },
        updater: (store) => {},
        onError: (err) => console.error(err)
    });
}
