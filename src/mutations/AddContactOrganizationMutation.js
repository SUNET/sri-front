import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const mutation = graphql`
    mutation AddContactOrganizationMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            contact {
                handle_id
                first_name
                last_name
                contact_type
            }
        }
    }
`;

export default function AddContactOrganizationMutation(contact, organization) {
    const variables = {
        input: {
            handle_id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            contact_type: contact.contact_type,
            relationship_works_for: organization,
            role: contact.role,
            clientMutationId: ""
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        updater: (proxyStore, data) => {
            const payload = proxyStore.get(contact.id, "Contact");
            console.log(payload, data);
            // console.log(proxyStore.getRoot());
            // console.log(proxyStore.getDataID());
            // contact_node.setValue(contact.first_name, "first_name");
            // contact_node.setValue(contact.last_name, "last_name");
            // contact_node.setValue(contact.email, "email");
            // contact_node.setValue(contact.phone, "phone");
            // contact_node.setValue(contact.contact_type, "contact_type");
        },
        onError: (err) => console.error(err),
    });
}
