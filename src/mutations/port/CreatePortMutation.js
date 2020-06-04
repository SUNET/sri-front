import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

const mutation = graphql`
  mutation CreatePortMutation($input: CreatePortInput!) {
    create_port(input: $input) {
      errors {
        field
        messages
      }
      port {
        id
        name
        description
        port_type {
          name
          value
        }
      }
    }
  }
`;

function CreatePortMutation(port, form) {
  const variables = {
    input: {
      name: port.name,
      description: port.description,
      port_type: port.port_type,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.create_port.errors) {
        form.props.notify(i18n.t('notify.error'), 'error');
        return response.create_port.updated.errors;
      }
      const portId = response.create_port.port.id;
      if (port.comment) {
        CreateCommentMutation(portId, port.comment);
      }
      form.props.notify(i18n.t('notify.network/ports-created-success'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/ports/${portId}`);
      } else {
        form.props.createdEntity('Port', portId);
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

export default CreatePortMutation;
