import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
    mutation UpdateContactMutation($input: UpdateContactInput!) {
        update_contact(input: $input) {
            contact {
                handle_id
                title
                contact_type
                first_name
                last_name
                email
                phone
                PGP_fingerprint
                roles {
                    name
                    end_node {
                        handle_id
                        name
                    }
                }
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

export default function UpdateContactMutation(contact, environment) {
    const variables = {
        input: {
            handle_id: contact.id,
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email,
            phone: contact.phone,
            contact_type: contact.contact_type,
            clientMutationId: "1048"
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        updater: (proxyStore, data) => {
            console.log("entra");
            // const payload = proxyStore.get(contact.id, "Contact");
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
