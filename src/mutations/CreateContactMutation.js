import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateContactMutation($input: CreateNIContactMutationInput!) {
        create_contact(input: $input) {
            contact {
                handle_id
                first_name
                last_name
                email
                phone
                contact_type
            }
        }
    }
`;

let tempID = 0;

function CreateContactMutation(
    first_name,
    last_name,
    email,
    phone,
    contact_type
) {
    const variables = {
        input: {
            first_name,
            last_name,
            email,
            phone,
            contact_type,
            clientMutationId: tempID++
        }
    };
    return new Promise( (resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(response, environment);
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
