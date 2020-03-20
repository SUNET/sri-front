import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";
import CreateCommentMutation from "../CreateCommentMutation";

const mutation = graphql`
    mutation Create__EntityClassName__Mutation($input: Create__EntityClassName__Input!) {
        create___entityName__(input: $input) {
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

function Create__EntityClassName__Mutation(__entityName__, form) {
    const variables = {
        input: {
            name: __entityName__.name,
            description: __entityName__.description,
            url: __entityName__.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.create___entityName__.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.create___entityName__.updated.errors;
            } else {
                const __entityName___id = response.create___entityName__.__entityName__.id;
                if (__entityName__.comment) {
                    CreateCommentMutation(__entityName___id, __entityName__.comment);
                }
                form.props.history.push("/__entityBlock__/__entityName__s/" + __entityName___id);
                form.props.notify(i18n.t("notify.__entityBlock__/__entityName__s-created-success"), "success");
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

export default Create__EntityClassName__Mutation;
