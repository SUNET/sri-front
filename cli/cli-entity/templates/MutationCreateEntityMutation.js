import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation Create__EntityClassName__Mutation($input: Composite__EntityClassName__MutationInput!) {
    composite___entityName__(input: $input) {
      created {
        errors {
          field
          messages
        }
        __entityName__ {
          ...__EntityClassName__UpdateForm___entityName__
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
      if (response.composite___entityName__.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite___entityName__.created.errors;
      }
      const entityId = response.composite___entityName__.created.__entityName__.__id;
      if (__entityName__.comment) {
        CreateCommentMutation(entityId, __entityName__.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/__entityInternalRoutePath__s'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/__entityName__s/${entityId}`);
      } else {
        form.props.createdEntity('__EntityClassName__', entityId);
        form.props.hideModalForm();
      }
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
