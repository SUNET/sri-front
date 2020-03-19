import { commitMutation } from "react-relay";
// import { ConnectionHandler } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";

import i18n from "../../i18n";
import environment from "../../createRelayEnvironment";

const mutation = graphql`
    mutation Update__EntityClassName__Mutation($input: Update__EntityClassName__Input!) {
        update___entityName__(input: $input) {
            errors {
                field
                messages
            }
            __entityName__ {
                id
                name
                description
                url
            }
        }
    }
`;

export default function Update__EntityClassName__Mutation(__entityName__, form) {
    const variables = {
        input: {
            id: __entityName__.id,
            name: __entityName__.name,
            description: __entityName__.description,
            url: __entityName__.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log("response: ", response);
            if (response.update___entityName__.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.update___entityName__.updated.errors;
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
