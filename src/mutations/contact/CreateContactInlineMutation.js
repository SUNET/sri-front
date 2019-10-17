import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

import CreateEmailMutation from "../CreateEmailMutation";
import CreatePhoneMutation from "../CreatePhoneMutation";

const mutation = graphql`
    mutation CreateContactInlineMutation($input: CreateContactInput!) {
        create_contact(input: $input) {
            errors {
                field
                messages
            }
            contact {
                handle_id
                first_name
                last_name
                contact_type
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

function CreateContactInlineMutation(first_name, last_name, email, phone, organization, group) {
    const variables = {
        input: {
            first_name,
            last_name,
            contact_type: "person",
            relationship_works_for: organization,
            relationship_member_of: group,
            clientMutationId: tempID++
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            if (response.create_contact.errors) {
                return response.create_contact.errors;
            } else {
                const contact_id = response.create_contact.contact.handle_id;

                CreateEmailMutation(contact_id, email, "personal");
                CreatePhoneMutation(contact_id, phone, "personal");
            }
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
}

export default CreateContactInlineMutation;
