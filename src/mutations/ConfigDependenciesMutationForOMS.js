import { formatDependenciesToUpdate, formatDependenciesToRemove } from './MutationsUtils';
import { UNLINK, NEW, REMOVE } from '../utils/constants';

const MUTATION_FIELD_DEPENDENCIES_LOGICAL_AND_PHYSICAL = {
  ODF: {
    updateName: 'update_dependencies_odf',
    deleteName: 'deleted_dependencies_odf',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Unit: {
    updateName: 'update_dependencies_unit',
    deleteName: 'deleted_dependencies_unit',
    fields: [{ name: 'name', type: 'simple' }],
  },
  Port: {
    updateName: 'update_dependencies_port',
    deleteName: 'deleted_dependencies_port',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'port_type', type: 'object', alias: 'type' },
    ],
  },
  Host: {
    updateName: 'update_dependencies_host',
    deleteName: 'deleted_dependencies_host',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Cable: {
    updateName: 'update_dependencies_cable',
    deleteName: 'deleted_dependencies_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'cable_type', type: 'object', alias: 'type' },
    ],
  },
  Router: {
    updateName: 'update_dependencies_router',
    deleteName: 'deleted_dependencies_router',
    fields: [{ name: 'operational_state', type: 'object' }],
  },
  Switch: {
    updateName: 'update_dependencies_switch',
    deleteName: 'deleted_dependencies_switch',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Service: {
    updateName: 'update_dependencies_service',
    deleteName: 'deleted_dependencies_service',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'service_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Firewall: {
    updateName: 'update_dependencies_firewall',
    deleteName: 'deleted_dependencies_firewall',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalNode: {
    updateName: 'update_dependencies_opticalnode',
    deleteName: 'deleted_dependencies_opticalnode',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
      { name: 'type', type: 'type', mutationName: 'type' },
    ],
  },
  OpticalLink: {
    updateName: 'update_dependencies_opticallink',
    deleteName: 'deleted_dependencies_opticallink',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'name', type: 'simple' },
      { name: 'link_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
      { name: 'interface_type', type: 'object' },
    ],
  },
  OpticalPath: {
    updateName: 'update_dependencies_opticalpath',
    deleteName: 'deleted_dependencies_opticalpath',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'name', type: 'simple' },
      { name: 'wavelength', type: 'simple' },
      { name: 'framing', type: 'object' },
      { name: 'capacity', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  PeeringGroup: {
    updateName: 'update_dependencies_peeringgroup',
    deleteName: 'deleted_dependencies_peeringgroup',
    fields: [{ name: 'name', type: 'simple' }],
  },
  OpticalFilter: {
    updateName: 'update_dependencies_opticalfilter',
    deleteName: 'deleted_dependencies_opticalfilter',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  ExternalEquipment: {
    updateName: 'update_dependencies_externalequipment',
    deleteName: 'deleted_dependencies_externalequipment',
    fields: [{ name: 'name', type: 'simple' }],
  },
  OpticalMultiplexSection: {
    updateName: 'update_dependencies_opticalmultiplexsection',
    deleteName: 'deleted_dependencies_opticalmultiplexsection',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
};

export const getDependenciesToForOMSAdd = (dependencies) => {
  const dependentsToAdd = formatDependenciesToUpdate(
    MUTATION_FIELD_DEPENDENCIES_LOGICAL_AND_PHYSICAL,
    dependencies ? dependencies.filter((dep) => dep.origin === NEW) : [],
  );

  return dependentsToAdd;
};

export const getDependenciesToForOMSUnlink = (dependencies) => {
  const dependentsToUnlink = dependencies
    ? dependencies.filter((dep) => dep.status === UNLINK).map((dep) => ({ relation_id: dep.relation_id }))
    : [];
  return dependentsToUnlink;
};

export const getDependenciesToForOMSDelete = (dependencies) => {
  const dependentsToDelete = formatDependenciesToRemove(
    MUTATION_FIELD_DEPENDENCIES_LOGICAL_AND_PHYSICAL,
    dependencies ? dependencies.filter((dep) => dep.status === REMOVE) : [],
  );

  return dependentsToDelete;
};

export default {
  getDependenciesToForOMSAdd,
  getDependenciesToForOMSUnlink,
  getDependenciesToForOMSDelete,
};
