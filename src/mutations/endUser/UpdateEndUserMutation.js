import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateEndUserMutation($input: UpdateEndUserInput!) {
        update_endUser(input: $input) {
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

export default function UpdateEndUserMutation(endUser, form) {
    const variables = {
        input: {
            id: endUser.id,
            name: endUser.name,
            description: endUser.description,
            url: endUser.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log("response: ", response);
            if (response.update_endUser.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.update_endUser.updated.errors;
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
