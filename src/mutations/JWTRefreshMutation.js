import { commitMutation } from 'react-relay';
import environment from '../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const mutation = graphql`
  mutation JWTRefreshMutation($input: RefreshInput!) {
    refresh_token(input: $input) {
      token
      payload
    }
  }
`;

function JWTRefreshMutation(token) {
  const variables = {
    input: { token: token },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response, errors);
    },
    onError: (errors) => {
      console.log(errors);
    },
  });
}

export default JWTRefreshMutation;
