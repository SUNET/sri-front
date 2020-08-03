import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation CreateHostMutation($input: CompositeHostMutationInput!) {
    composite_host(input: $input) {
      created {
        errors {
          field
          messages
        }
        host {
          id
          name
          description
        }
      }
    }
  }
`;

function CreateHostMutation(host, form) {
  const variables = {
    input: {
      create_input: {
        name: host.name,
        description: host.description,
      },
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompleteCompositeCreationEntity(
        form,
        response,
        host,
        'Host',
        'composite_host',
        'hosts',
        CreateCommentMutation,
      );
    },
    onError: (errors) => console.error(errors),
    configs: [
      {
        type: 'RANGE_ADD',
        parentName: ROOT_ID,
        parentID: ROOT_ID,
      },
    ],
  });
}

export default CreateHostMutation;
