import { commitMutation } from "react-relay";
import environment from "../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const mutation = graphql`
    mutation JWTVerifyMutation($input: VerifyInput!) {
        verify_token(input: $input) {
            payload
        }
    }
`;

function JWTVerifyMutation(token) {
    const variables = {
        input: { token: token }
    };
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(response, errors);
                if (errors) {
                    return reject(errors);
                }
                return resolve(response);
            },
            onError: (errors) => console.error(errors)
        });
    });
}

export default JWTVerifyMutation;
