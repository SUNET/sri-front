import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateAddressMutation($input: CreateAddressInput!) {
        create_address(input: $input) {
            errors {
                field
                messages
            }
            address {
                id
                name
                phone
                street
                postal_code
                postal_area
            }
        }
    }
`;

let tempID = 0;

function CreateAddressMutation(organization, address) {
    const variables = {
        input: {
            organization: organization,
            name: "main",
            phone: address.phone,
            street: address.street,
            postal_code: address.postal_code,
            postal_area: address.postal_area,
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

export default CreateAddressMutation;
