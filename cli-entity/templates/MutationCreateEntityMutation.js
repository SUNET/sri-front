import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../../createRelayEnvironment";
import { ROOT_ID } from "relay-runtime";

const mutation = graphql`
    mutation Create__EntityClassName__Mutation($input: Create__EntityClassName__Input!) {
        create___entityName__(input: $input) {
            errors {
                field
                messages
            }
            __entityName__ {
                id
                name
                description
                url
            }
        }
    }
`;

let tempID = 0;

function Create__EntityClassName__Mutation(customer) {
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

export default Create__EntityClassName__Mutation;