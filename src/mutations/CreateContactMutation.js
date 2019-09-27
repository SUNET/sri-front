import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateComentMutation from "./CreateCommentMutation";
import CreateEmailMutation from "./CreateEmailMutation";
import CreatePhoneMutation from "./CreatePhoneMutation";

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
    pgp_fingerprint,
    contact_type,
    comment,
    emails,
    phones,
    organizations,
    callback
) {
    console.log("Organization", Object.keys(organizations)[0]);
    const variables = {
        input: {
            title,
            first_name,
            last_name,
            notes,
            pgp_fingerprint,
            contact_type,
            relationship_works_for: organizations[0].id,
            role: organizations[0].role,
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
                const contact_id = response.create_contact.contact.handle_id;
                CreateComentMutation(contact_id, comment);

                Object.keys(emails).forEach(email => {
                    CreateEmailMutation(contact_id, emails[email].email, emails[email].type);
                });

                Object.keys(phones).forEach(phone => {
                    CreatePhoneMutation(contact_id, phones[phone].number, emails[phone].type);
                });

                callback().replace("/community/contacts/" + response.create_contact.contact.handle_id);
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
