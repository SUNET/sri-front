import { commitMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../createRelayEnvironment';
import { ROOT_ID } from 'relay-runtime';
import i18n from '../../i18n';
import CreateCommentMutation from '../CreateCommentMutation';

import { generateSubInputs } from '../MutationsUtils';
import formatAndMergeAllPortsParentsEntities from './PortFormatter';

const mutation = graphql`
  mutation CreatePortMutation($input: CompositePortMutationInput!) {
    composite_port(input: $input) {
      created {
        errors {
          field
          messages
        }
        port {
          ...PortUpdateForm_port
        }
      }
    }
  }
`;

function CreatePortMutation(port, form) {
  const connectedTo = generateSubInputs(port.connected_to, 'cable_type');
  const parentsFormatted = formatAndMergeAllPortsParentsEntities(port.parent);

  const variables = {
    input: {
      create_input: {
        name: port.name,
        description: port.description,
        port_type: port.type,
      },
      ...parentsFormatted.toUpdateObject,
      ...parentsFormatted.toDeleteObject,
      update_subinputs: connectedTo.toUpdate,
      unlink_subinputs: [...connectedTo.toUnlink, ...parentsFormatted.toUnlinkList],
      delete_subinputs: [...connectedTo.toDelete],
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_port.created.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_port.created.errors;
      }
      const portId = response.composite_port.created.port.id || response.composite_port.created.port.__id;
      if (port.comment) {
        CreateCommentMutation(portId, port.comment);
      }
      form.props.notify(i18n.t('entity-notify-create/ports'), 'success');
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
