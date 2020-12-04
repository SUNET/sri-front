import { NEW, UNLINK, REMOVE } from '../../utils/constants';
import { formatDependenciesToUpdate, formatDependenciesToRemove } from '../../mutations/MutationsUtils';

const MUTATION_FIELD_DEPENDENCY_BY_TYPENAME = {
  Port: {
    updateName: 'update_located_in_port',
    deleteName: 'deleted_located_in_port',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'port_type', type: 'object', alias: 'type' },
    ],
  },
  Cable: {
    updateName: 'update_located_in_cable',
    deleteName: 'deleted_located_in_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'cable_type', type: 'object', alias: 'type' },
    ],
  },
  Router: {
    updateName: 'update_located_in_router',
    deleteName: 'deleted_located_in_router',
    fields: [{ name: 'operational_state', type: 'object' }],
  },
  Switch: {
    updateName: 'update_located_in_switch',
    deleteName: 'deleted_located_in_switch',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Firewall: {
    updateName: 'update_located_in_firewall',
    deleteName: 'deleted_located_in_firewall',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  ExternalEquipment: {
    updateName: 'update_located_in_externalequipment',
    deleteName: 'deleted_located_in_externalequipment',
    fields: [{ name: 'name', type: 'simple' }],
  },
  OpticalNode: {
    updateName: 'update_located_in_opticalnode',
    deleteName: 'deleted_located_in_opticalnode',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
      { name: 'type', type: 'object' },
    ],
  },
  ODF: {
    updateName: 'update_located_in_odf',
    deleteName: 'deleted_located_in_odf',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalFilter: {
    updateName: 'update_located_in_opticalfilter',
    deleteName: 'deleted_located_in_opticalfilter',
    fields: [{ name: 'name', type: 'simple' }],
  },
};

export const generateLocatedIn = (entity) => {
  const { located_in } = entity;
  const physicalsToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_DEPENDENCY_BY_TYPENAME,
    located_in ? located_in.filter((dep) => dep.origin === NEW) : [],
  );
  return physicalsToAdd;
};

export const generateLocatedInToRemove = (entity) => {
  const { located_in } = entity;
  const physicalsToRemove = formatDependenciesToRemove(
    MUTATION_FIELD_DEPENDENCY_BY_TYPENAME,
    located_in ? located_in.filter((dep) => dep.status === REMOVE) : [],
  );
  return physicalsToRemove;
};

export const generateLocatedInToUnlink = (entity) => {
  const locatedInToUnlink = entity.located_in
    ? entity.located_in.filter((loc) => loc.status === UNLINK).map((loc) => ({ relation_id: loc.relation_id }))
    : [];
  return locatedInToUnlink;
};

export default { generateLocatedIn, generateLocatedInToUnlink, generateLocatedInToRemove };
