import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateGroupMutation($input: CompositeGroupMutationInput!) {
        composite_group(input: $input) {
            updated {
                errors {
                    field
                    messages
                }
                group {
                    handle_id
                    name
                    description
                    contacts {
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
                        roles {
                            role_data {
                                handle_id
                                name
                            }
                            end {
                                handle_id
                                name
                            }
                        }
                        outgoing {
                            name
                            relation {
                                relation_id
                                type
                                end {
                                    handle_id
                                    node_name
                                }
                            }
                        }
                    }
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
    const deleteMembers = [];

    const removeRelationsMembers = [];

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
            } else if (member.status === "remove") {
                removeRelationsMembers.push({ relation_id: member.group_relation_id });
            }
        });
    }

    const variables = {
        input: {
            update_input: {
                handle_id: group.handle_id,
                name: group.name,
                description: group.description,
                clientMutationId: ""
            },
            create_subinputs: newMembers,
            update_subinputs: updateMembers,
            delete_subinputs: deleteMembers,
            unlink_subinputs: removeRelationsMembers
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.composite_group.updated.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.composite_group.updated.errors;
            } else {
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
            }
        },
        updater: (store) => {},
        onError: (err) => console.error(err)
    });
}
