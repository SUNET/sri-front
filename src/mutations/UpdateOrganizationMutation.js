import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation UpdateOrganizationMutation($input: UpdateOrganizationInput!) {
        update_organization(input: $input) {
            organization {
                handle_id
                name
                type
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

export default function UpdateOrganizationMutation(organization) {
    const variables = {
        input: {
            handle_id: organization.id,
            name: organization.name,
            type: organization.type,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        updater: (proxyStore, data) => {
            // const payload = proxyStore.get(contact.id, "Contact");
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err)
    });
}
