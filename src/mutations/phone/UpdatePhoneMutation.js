import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation UpdatePhoneMutation($input: UpdatePhoneInput!) {
        update_phone(input: $input) {
            errors {
                field
                messages
            }
            phone {
                id
                name
                type
            }
        }
    }
`;

let tempID = 0;

function UpdatePhoneMutation(contact, name, phone) {
    const variables = {
        input: {
            contact,
            name,
            type: phone ? phone.type : "personal",
            id: phone.id,
            clientMutationId: tempID++
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
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

export default UpdatePhoneMutation;
