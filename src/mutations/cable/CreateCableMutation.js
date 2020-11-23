import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import CreateCommentMutation from '../CreateCommentMutation';
import { generateSubInputs } from '../MutationsUtils';
import i18n from '../../i18n';

const mutation = graphql`
  mutation CreateCableMutation($input: CompositeCableMutationInput!) {
    composite_cable(input: $input) {
      created {
        errors {
          field
          messages
        }
        cable {
          ...CableUpdateForm_cable
        }
      }
    }
  }
`;

function CreateCableMutation(cable, form) {
  const connections = generateSubInputs(cable.connections, 'port_type');
  const variables = {
    input: {
      create_input: {
        name: cable.name,
        description: cable.description,
        cable_length: cable.cable_length,
        cable_type: cable.cable_type,
        relationship_provider: cable.provider_id,
      },
      update_subinputs: connections.toUpdate,
      unlink_subinputs: connections.toUnlink,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_cable.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_cable.created.errors;
      }
      const entityId = response.composite_cable.created.cable.__id;
      if (cable.comment) {
        CreateCommentMutation(entityId, cable.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/cables'), 'success');
      if (form.props.history) {
        form.props.history.push(`/network/cables/${entityId}`);
      } else {
        form.props.createdEntity('Cable', entityId);
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

export default CreateCableMutation;
