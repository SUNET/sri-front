import { commitMutation } from 'react-relay';
// import { ConnectionHandler } from "relay-runtime";
import graphql from 'babel-plugin-relay/macro';

import i18n from '../../i18n';
import environment from '../../createRelayEnvironment';

import { generateSubInputs } from '../MutationsUtils';

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
      subupdated {
        errors {
          field
          messages
        }
        cable {
          id
          name
          description
          type: cable_type {
            value
            name
          }
        }
      }
      parent_port_updated {
        errors {
          field
          messages
        }
      }
    }
  }
`;

function formatterParentsByType(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    `${parentType.toLowerCase()}_type`,
  );
}

function formatterParentsByTypeWithOperationState(parents, parentType) {
  const subInpunts = generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    null,
    'operational_state',
  );
  return {
    toUpdate: subInpunts.toUpdate.map((entity) => ({ ...entity, operational_state: entity.operational_state.value })),
    toUnlink: subInpunts.toUnlink,
    toDelete: subInpunts.toDelete,
  };
}

function formatterParentsByTypeWithoutSpecificFields(parents, parentType) {
  return generateSubInputs(
    parents.filter((el) => el['__typename'] === parentType),
    null,
    null,
  );
}

function formatterRouterParents(parents) {
  const routerListWithName = formatterParentsByTypeWithOperationState(parents, 'Router');
  const routerListWithoutName = {
    ...routerListWithName,
    toUpdate: routerListWithName.toUpdate.map((router) => {
      const { name, ...routerWithoutName } = router;
      return routerWithoutName;
    }),
  };
  return routerListWithoutName;
}

function formatterOpticalNodeParents(parents) {
  console.log('parents: ', parents);
  const optNodesElements = generateSubInputs(
    parents.filter((el) => el['__typename'] === 'OpticalNode'),
    'type',
    'operational_state',
  );
  console.log('optNodesElements: ', optNodesElements);
  return {
    toUpdate: optNodesElements.toUpdate.map((entity) => ({
      ...entity,
      operational_state: entity.operational_state.value,
    })),
    toUnlink: optNodesElements.toUnlink,
    toDelete: optNodesElements.toDelete,
  };
}

function formatAndMergeAllPortsParentsEntities(parentsList) {
  const portParents = formatterParentsByType(parentsList, 'Port');
  const cableParents = formatterParentsByType(parentsList, 'Cable');
  const firewallParents = formatterParentsByTypeWithOperationState(parentsList, 'Firewall');
  const switchesParents = formatterParentsByTypeWithOperationState(parentsList, 'Switch');
  const externalEquipmentParents = formatterParentsByTypeWithoutSpecificFields(parentsList, 'ExternalEquipment');
  const opticalFilterParents = formatterParentsByTypeWithoutSpecificFields(parentsList, 'OpticalFilter');

  const routerParents = formatterRouterParents(parentsList);
  const opticalNodeParents = formatterOpticalNodeParents(parentsList);
  const odfParents = formatterParentsByTypeWithOperationState(parentsList, 'ODF');

  return {
    toUpdateObject: {
      update_parent_port: portParents.toUpdate,
      update_parent_cable: cableParents.toUpdate,
      update_parent_firewall: firewallParents.toUpdate,
      update_parent_externalequipment: externalEquipmentParents.toUpdate,
      update_parent_switch: switchesParents.toUpdate,
      update_parent_opticalfilter: opticalFilterParents.toUpdate,
      update_parent_opticalnode: opticalNodeParents.toUpdate,
      update_parent_router: routerParents.toUpdate,
      update_parent_odf: odfParents.toUpdate,
    },
    toDeleteObject: {
      deleted_parent_port: portParents.toDelete,
      deleted_parent_cable: cableParents.toDelete,
      deleted_parent_firewall: firewallParents.toDelete,
      deleted_parent_externalequipment: externalEquipmentParents.toDelete,
      deleted_parent_switch: switchesParents.toDelete,
      deleted_parent_opticalfilter: opticalFilterParents.toDelete,
      deleted_parent_opticalnode: opticalNodeParents.toDelete,
      deleted_parent_router: routerParents.toDelete,
      deleted_parent_odf: odfParents.toDelete,
    },
    toUnlinkList: [
      ...cableParents.toUnlink,
      ...portParents.toUnlink,
      ...cableParents.toUnlink,
      ...firewallParents.toUnlink,
      ...externalEquipmentParents.toUnlink,
      ...switchesParents.toUnlink,
      ...opticalFilterParents.toUnlink,
      ...opticalNodeParents.toUnlink,
      ...routerParents.toUnlink,
      ...odfParents.toUnlink,
    ],
  };
}

export default function UpdatePortMutation(port, form) {
  const connectedTo = generateSubInputs(port.connectedTo, 'cable_type');
  const parentsFormatted = formatAndMergeAllPortsParentsEntities(port.parents);
  const variables = {
    input: {
      update_input: {
        id: port.id,
        name: port.name,
        description: port.description,
        port_type: port.port_type,
      },
      ...parentsFormatted.toUpdateObject,
      ...parentsFormatted.toDeleteObject,
      update_subinputs: connectedTo.toUpdate,
      unlink_subinputs: [...connectedTo.toUnlink, ...parentsFormatted.toUnlinkList],
      delete_subinputs: [...connectedTo.toDelete],
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
