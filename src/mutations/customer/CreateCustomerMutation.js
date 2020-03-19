import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation CreateCustomerMutation($input: CreateCustomerInput!) {
        create_customer(input: $input) {
            errors {
                field
                messages
            }
            customer {
                id
                name
                description
                url
            }
        }
    }
`;

let tempID = 0;

function CreateCustomerMutation(customer, callback) {
    const variables = {
        input: {
            name: customer.name,
            description: customer.description,
            url: customer.url
        }
    };
    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log(response, errors);
            callback();
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

export default CreateCustomerMutation;
