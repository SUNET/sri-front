import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";
import CreateCommentMutation from "../CreateCommentMutation";

const mutation = graphql`
    mutation CreateProviderMutation($input: CreateProviderInput!) {
        create_provider(input: $input) {
            errors {
                field
                messages
            }
            provider {
                id
                name
                description
                url
            }
        }
    }
`;

function CreateProviderMutation(provider, form) {
    const variables = {
        input: {
            name: provider.name,
            description: provider.description,
            url: provider.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.create_provider.errors) {
                form.props.notify(i18n.t("notify/generic-error"), "error");
                return response.create_provider.updated.errors;
            } else {
                const provider_id = response.create_provider.provider.id;
                if (provider.comment) {
                    CreateCommentMutation(provider_id, provider.comment);
                }
                if (form.props.history) {
                    form.props.history.push("/network/providers/" + provider_id);
                } else {
                    form.props.createdEntity('Provider', provider_id);
                    form.props.hideModalForm();
                }
                form.props.notify(i18n.t("entity-notify-create/providers"), "success");
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

export default CreateProviderMutation;
