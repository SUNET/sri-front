import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { ROOT_ID } from 'relay-runtime';
import environment from '../../createRelayEnvironment';

const mutation = graphql`
  mutation DeleteEmailMutation($input: DeleteEmailInput!) {
    delete_email(input: $input) {
      success
    }
  }
`;

export default function DeleteEmailMutation(id, callback) {
  const variables = {
    input: {
      id: id,
      clientMutationId: '',
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onError: (err) => console.error(err),
    onCompleted: (response) => {
      console.log(response, environment);
    },
    configs: [
      {
        parentName: ROOT_ID,
        parentID: ROOT_ID,
        deletedIDFieldName: 'id',
      },
    ],
  });
}
