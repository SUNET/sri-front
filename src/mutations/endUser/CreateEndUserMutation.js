import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";
import CreateCommentMutation from "../CreateCommentMutation";

const mutation = graphql`
    mutation CreateEndUserMutation($input: CreateEndUserInput!) {
        create_endUser(input: $input) {
            errors {
                field
                messages
            }
            endUser {
                id
                name
                description
                url
            }
        }
    }
`;

function CreateEndUserMutation(endUser, form) {
    const variables = {
        input: {
            name: endUser.name,
            description: endUser.description,
            url: endUser.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.create_endUser.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.create_endUser.errors;
            } else {
                const endUser_id = response.create_endUser.endUser.id;
                if (endUser.comment) {
                    CreateCommentMutation(endUser_id, endUser.comment);
                }
                if (form.props.history) {
                    form.props.history.push("/network/end-users/" + endUser_id);
                } else {
                    form.props.createdEntity('EndUser', endUser_id);
                    form.props.hideModalForm();
                }
                form.props.notify(i18n.t("notify.network/endUsers-created-success"), "success");
            }
        },
        onError: (errors) => console.error(errors),
        configs: [
            {
                type: "RANGE_ADD",
                parentName: ROOT_ID,
                parentID: ROOT_ID
            }
        ]
    });
}

export default CreateEndUserMutation;
