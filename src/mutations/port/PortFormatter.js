import { generateSubInputs } from '../MutationsUtils';

function formatterParentsByType(parents, parentType) {
  return generateSubInputs(
    parents && parents.length > 0 ? parents.filter((el) => el['__typename'] === parentType) : [],
    `${parentType.toLowerCase()}_type`,
  );
}

function formatterParentsByTypeWithOperationState(parents, parentType) {
  const subInpunts = generateSubInputs(
    parents && parents.length > 0 ? parents.filter((el) => el['__typename'] === parentType) : [],
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
    parents && parents.length > 0 ? parents.filter((el) => el['__typename'] === parentType) : [],
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
  const parentType = 'OpticalNode';
  const optNodesElements = generateSubInputs(
    parents && parents.length > 0 ? parents.filter((el) => el['__typename'] === parentType) : [],
    'type',
    'operational_state',
  );

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

export default formatAndMergeAllPortsParentsEntities;
