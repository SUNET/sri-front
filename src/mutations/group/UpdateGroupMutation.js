import { commitMutation } from "react-relay";
import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import UpdateContactInlineMutation from "../contact/UpdateContactInlineMutation";
import CreateContactInlineMutation from "../contact/CreateContactInlineMutation";
import UpdateEmailMutation from "../email/UpdateEmailMutation";
import UpdatePhoneMutation from "../phone/UpdatePhoneMutation";
import CreateEmailMutation from "../email/CreateEmailMutation";
import CreatePhoneMutation from "../phone/CreatePhoneMutation";
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
                }
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

export default function UpdateGroupMutation(group, notifications, callback, reset) {
    const variables = {
        input: {
            handle_id: group.handle_id,
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
                notifications(i18n.t("notify.error"), "error");
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
                            debugger;
                            if (!member.created || member.created === undefined) {
                                CreateContactInlineMutation(
                                    member.first_name,
                                    member.last_name,
                                    member.email,
                                    member.phone,
                                    member.organization,
                                    group.handle_id
                                );
                            } else {
                                if (member.email_obj.handle_id) {
                                    UpdateEmailMutation(member.handle_id, member.email, member.email_obj);
                                } else {
                                    if (member.email) {
                                        CreateEmailMutation(member.handle_id, member.email, "personal");
                                    }
                                }
                                if (member.phone_obj.handle_id) {
                                    UpdatePhoneMutation(member.handle_id, member.phone, member.phone_obj);
                                } else {
                                    if (member.phone) {
                                        CreatePhoneMutation(member.handle_id, member.phone, "personal");
                                    }
                                }

                                UpdateContactInlineMutation(member, member.organization, group.handle_id, null);
                            }
                        } else if (member.status === "remove") {
                            RelationshipGroupContactQuery(
                                group.handle_id,
                                member.handle_id,
                                DeleteRelationshipMutation
                            );
                        }
                    });
                }
                notifications(i18n.t("notify.changes-saved"), "success");
                reset();
                callback();
            }
        },

        updater: (store) => {
            console.log("store", store);
            console.log("root", store.getRoot());
            // Get the payload returned from the server
            // const payload = store.getRootField("update_group");
            console.log("Conn", ConnectionHandler.getConnection(store.getRoot(), "GroupList_groups", {}));
        },
        onError: (err) => console.error(err)
    });
}
