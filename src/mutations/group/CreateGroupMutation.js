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
                    id
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
                    id
                    first_name
                    last_name
                    contact_type {
                        name
                        value
                    }
                    emails {
                        id
                        name
                        type {
                            name
                            value
                        }
                    }
                    phones {
                        id
                        name
                        type {
                            name
                            value
                        }
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
                    id
                    first_name
                    last_name
                    contact_type {
                        name
                        value
                    }
                    emails {
                        id
                        name
                        type {
                            name
                            value
                        }
                    }
                    phones {
                        id
                        name
                        type {
                            name
                            value
                        }
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
                if (member.created || member.created !== undefined) {
                    updateMembers.push({
                        id: member.id,
                        first_name: member.first_name,
                        last_name: member.last_name,
                        contact_type: member.contact_type.value
                    });
                }
            }
        });
    }

    const variables = {
        input: {
            create_input: {
                id: group.id,
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
                const group_id = response.composite_group.created.group.id;
                if (group.comment) {
                    CreateComentMutation(group_id, group.comment);
                }
                form.props.history.push("/community/groups/" + group_id);
                form.props.notify(i18n.t("notify.group-created-success"), "success");
            }
        },
        updater: (store) => {},
        onError: (err) => console.error(err)
    });
}
