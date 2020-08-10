import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';
import { onCompleteCompositeCreationEntity } from '../MutationsUtils';

const mutation = graphql`
  mutation Create__EntityClassName__Mutation($input: Composite__EntityClassName__Input!) {
    composite___entityName__(input: $input) {
      created {
        errors {
          field
          messages
        }
        __entityName__ {
          id
          name
          description
        }
      }
    }
  }
`;

function Create__EntityClassName__Mutation(__entityName__, form) {
  const variables = {
    input: {
      create_input: {
        name: __entityName__.name,
        description: __entityName__.description,
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
        __entityName__,
        '__EntityClassName__',
        'composite___entityName__',
        '__entityName__s',
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

export default Create__EntityClassName__Mutation;
