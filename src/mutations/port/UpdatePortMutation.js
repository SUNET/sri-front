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

const formatUpdateParentsWithoutArray = (parentsObjectMutation) => {
  return Object.entries(parentsObjectMutation).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: value.length > 0 ? value[0] : null,
    };
  }, {});
};

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
      ...formatUpdateParentsWithoutArray(parentsFormatted.toUpdateObject),
      ...formatUpdateParentsWithoutArray(parentsFormatted.toDeleteObject),
      update_subinputs: connectedTo.toUpdate.length > 0 ? connectedTo.toUpdate[0] : null,
      unlink_subinputs: [
        ...connectedTo.toUnlink,
        ...parentsFormatted.toUnlinkList,
        ...getDependenciesToUnlink(port.dependents),
      ],
      delete_subinputs: connectedTo.toDelete.length > 0 ? connectedTo.toDelete[0] : null,
      ...getDependenciesToAdd(port.dependents),
      ...getDependenciesToDelete(port.dependents),
    },
  };
  console.log(JSON.stringify(variables));
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
