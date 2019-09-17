import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateComentMutation from "./CreateCommentMutation";

const mutation = graphql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        create_contact(input: $input) {
            contact {
                handle_id
                title
                first_name
                last_name
                notes
                contact_type
                phone
                email
                pgp_fingerprint
                roles {
                    name
                    end {
                        handle_id
                        name
                    }
                }
                member_of_groups {
                    name
                }
            }
        }
    }
`;

let tempID = 0;

function CreateContactMutation(
    title,
    first_name,
    last_name,
    notes,
    email,
    phone,
    pgp_fingerprint,
    contact_type,
    comment,
    roles,
    organizations,
    callback
) {
    const variables = {
        input: {
            title,
            first_name,
            last_name,
            notes,
            email,
            phone,
            pgp_fingerprint,
            contact_type,
            relationship_works_for: organizations.handle_id,
            role: roles.handle_id,
            clientMutationId: tempID++
        }
    };
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(errors);
                console.log(response, environment);
                CreateComentMutation(response.create_contact.contact.handle_id, comment);
                callback().replace("/community/contacts/"+ response.create_contact.contact.handle_id);
                if (errors) {
                    return reject(errors);
                }
                return resolve(response);
            },
            onError: (errors) => console.error(errors),
            configs: [
                {
                    type: "RANGE_ADD",
                    parentName: ROOT_ID,
                    parentID: ROOT_ID,
                    connectionInfo: [
                        {
                            key: "ContactList_contacts",
                            rangeBehavior: "append"
                        }
                    ],
                    edgeName: "contactEdge"
                }
            ]
        });
    });
}

export default CreateContactMutation;
