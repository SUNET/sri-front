import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";

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

let tempID = 0;

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
                form.props.reset();
                form.refetch();
                form.props.notify(i18n.t("notify.changes-saved"), "success");
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
