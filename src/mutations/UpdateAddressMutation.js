import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation UpdateAddressMutation($input: UpdateAddressInput!) {
        update_address(input: $input) {
            errors {
                field
                messages
            }
            address {
                handle_id
            }
        }
    }
`;

let tempID = 0;

function UpdateAddressMutation(organization, address) {
    const variables = {
        input: {
            organization,
            name: address.name,
            handle_id: address.handle_id,
            street: address.street,
            postal_code: address.postal_code,
            postal_area: address.postal_area,
            phone: address.phone,
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

export default UpdateAddressMutation;
