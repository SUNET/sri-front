import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs } from '../MutationsUtils';
import formatAndMergeAllPortsParentsEntities from './PortFormatter';
import {
  getDependenciesToAdd,
  getDependenciesToUnlink,
  getDependenciesToDelete,
} from '../GeneralConfigMutationsFields';

const mutation = graphql`
  mutation UpdatePortMutation($input: CompositePortMutationInput!) {
    composite_port(input: $input) {
      updated {
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

export default function UpdatePortMutation(port, form) {
  const connectedTo = generateSubInputs(port.connected_to, 'cable_type');
  const parentsFormatted = formatAndMergeAllPortsParentsEntities(port.parent);
  const variables = {
    input: {
      update_input: {
        id: port.id,
        name: port.name,
        description: port.description,
        port_type: port.type,
      },
      ...parentsFormatted.toUpdateObject,
      ...parentsFormatted.toDeleteObject,
      update_subinputs: connectedTo.toUpdate,
      unlink_subinputs: [
        ...connectedTo.toUnlink,
        ...parentsFormatted.toUnlinkList,
        ...getDependenciesToUnlink(port.dependents),
      ],
      delete_subinputs: [...connectedTo.toDelete],
      ...getDependenciesToAdd(port.dependents),
      ...getDependenciesToDelete(port.dependents),
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.composite_port.updated.errors) {
        form.props.notify(i18n.t('notify/generic-error'), 'error');
        return response.composite_port.updated.errors;
      }
      form.props.reset();
      if (form.props.isFromModal) {
        form.props.editedEntity('Port', response.composite_port.updated.port.id);
      } else {
        form.refetch();
        form.props.notify(i18n.t('notify/changes-saved'), 'success');
      }
    },
    updater: (store) => {},
    onError: (err) => console.error(err),
  });
}
