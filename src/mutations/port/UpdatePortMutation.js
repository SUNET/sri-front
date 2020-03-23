import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation UpdatePortMutation($input: UpdatePortInput!) {
        update_port(input: $input) {
            errors {
                field
                messages
            }
            port {
                id
                name
                description
            }
        }
    }
`;

export default function UpdatePortMutation(port, form) {
    const variables = {
        input: {
            id: port.id,
            name: port.name,
            description: port.description
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log("response: ", response);
            if (response.update_port.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.update_port.updated.errors;
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
