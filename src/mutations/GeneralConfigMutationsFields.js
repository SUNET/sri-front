import { formatDependenciesToUpdate, formatDependenciesToRemove } from './MutationsUtils';
import { UNLINK, NEW, REMOVE } from '../utils/constants';

const MUTATION_FIELD_DEPENDENCY_BY_TYPENAME = {
  Service: {
    updateName: 'update_dependents_service',
    deleteName: 'deleted_dependents_service',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'service_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalPath: {
    updateName: 'update_dependents_opticalpath',
    deleteName: 'deleted_dependents_opticalpath',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'wavelength', type: 'simple' },
      { name: 'framing', type: 'object' },
      { name: 'capacity', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalMultiplexSection: {
    updateName: 'update_dependents_opticalmultiplexsection',
    deleteName: 'deleted_dependents_opticalmultiplexsection',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalLink: {
    updateName: 'update_dependents_opticallink',
    deleteName: 'deleted_dependents_opticallink',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'link_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
      { name: 'interface_type', type: 'object' },
    ],
  },
};

export const getDependenciesToAdd = (dependencies, config = MUTATION_FIELD_DEPENDENCY_BY_TYPENAME) => {
  const dependentsToAdd = formatDependenciesToUpdate(
    config,
    dependencies ? dependencies.filter((dep) => dep.origin === NEW) : [],
  );

  return dependentsToAdd;
};

export const getDependenciesToUnlink = (dependencies) => {
  const dependentsToUnlink = dependencies
    ? dependencies.filter((dep) => dep.status === UNLINK).map((dep) => ({ relation_id: dep.relation_id }))
    : [];
  return dependentsToUnlink;
};

export const getDependenciesToDelete = (dependencies, config = MUTATION_FIELD_DEPENDENCY_BY_TYPENAME) => {
  const dependentsToDelete = formatDependenciesToRemove(
    config,
    dependencies ? dependencies.filter((dep) => dep.status === REMOVE) : [],
  );

  return dependentsToDelete;
};

export default {
  getDependenciesToAdd,
  getDependenciesToUnlink,
  getDependenciesToDelete,
};
