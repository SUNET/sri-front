import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreateCableMutation($input: CreateCableInput!) {
    create_cable(input: $input) {
      errors {
        field
        messages
      }
      cable {
        id
        name
        description
        cable_type {
          name
          value
        }
      }
    }
  }
`;

function CreateCableMutation(cable, form) {
  const variables = {
    input: {
      name: cable.name,
      description: cable.description,
      cable_type: cable.cable_type,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('response: ', response);
      if (response.create_cable.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.create_cable.updated.errors;
      }
      const cableId = response.create_cable.cable.id;
      if (cable.comment) {
        CreateCommentMutation(cableId, cable.comment);
      }
      form.props.history.push(`/network/cables/${cableId}`);
      form.props.notify(i18n.t('notify.network/cables-created-success'), 'success');
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

export default CreateCableMutation;
