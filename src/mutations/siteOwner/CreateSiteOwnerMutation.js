import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";
import i18n from "../../i18n";
import CreateCommentMutation from "../CreateCommentMutation";

const mutation = graphql`
    mutation CreateSiteOwnerMutation($input: CreateSiteOwnerInput!) {
        create_siteOwner(input: $input) {
            errors {
                field
                messages
            }
            siteOwner {
                id
                name
                description
                url
            }
        }
    }
`;

function CreateSiteOwnerMutation(siteOwner, form) {
    const variables = {
        input: {
            name: siteOwner.name,
            description: siteOwner.description,
            url: siteOwner.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            if (response.create_siteOwner.errors) {
                form.props.notify(i18n.t("notify.error"), "error");
                return response.create_siteOwner.updated.errors;
            } else {
                const siteOwner_id = response.create_siteOwner.siteOwner.id;
                if (siteOwner.comment) {
                    CreateCommentMutation(siteOwner_id, siteOwner.comment);
                }
                if (form.props.history) {
                    form.props.history.push("/network/site-owners/" + siteOwner_id);
                } else {
                    form.props.createdEntity('SiteOwner', siteOwner_id);
                    form.props.hideModalForm();
                }
                form.props.notify(i18n.t("notify.network/siteOwners-created-success"), "success");
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

export default CreateSiteOwnerMutation;
