import { generateSubInputs } from '../../mutations/MutationsUtils';
import { UNLINK, NEW, REMOVE } from '../../utils/constants';

const MUTATION_FIELD_DEPENDENCY_BY_TYPENAME = {
  Cable: {
    updateName: 'update_dependencies_cable',
    deleteName: 'deleted_dependencies_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'type', type: 'type', mutationName: 'cable_type' },
    ],
  },
  Port: {
    updateName: 'update_dependencies_port',
    deleteName: 'deleted_dependencies_port',
    fields: [{ name: 'name', type: 'simple' }],
  },

  Switch: {
    updateName: 'update_dependencies_switch',
    deleteName: 'deleted_dependencies_switch',
    fields: [
      { name: 'name', type: 'simple' },
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
  ExternalEquipment: {
    updateName: 'update_dependencies_externalequipment',
    deleteName: 'deleted_dependencies_externalequipment',
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
  Router: {
    updateName: 'update_dependencies_router',
    deleteName: 'deleted_dependencies_router',
    fields: [{ name: 'operational_state', type: 'object' }],
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
  ODF: {
    updateName: 'update_dependencies_odf',
    deleteName: 'deleted_dependencies_odf',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
};

const formatDependenciesToUpdate = (dependencies) => {
  return dependencies.reduce((acc, curr) => {
    const currDependencyField = MUTATION_FIELD_DEPENDENCY_BY_TYPENAME[curr['__typename']];

    const dataToMutation = {
      id: curr.id,
      skip_update: true,
      ...currDependencyField.fields.reduce((fieldsToMutation, field) => {
        if (field.type === 'simple') {
          fieldsToMutation[field.name] = curr[field.name];
        } else if (field.type === 'object') {
          fieldsToMutation[field.name] = curr[field.name].value;
        } else if (field.type === 'type') {
          fieldsToMutation[field.mutationName] = curr[field.name].value;
        }

        return fieldsToMutation;
      }, {}),
    };

    if (acc[currDependencyField.updateName]) {
      acc[currDependencyField.updateName].push(dataToMutation);
    } else {
      acc[currDependencyField.updateName] = [dataToMutation];
    }
    return acc;
  }, {});
};

const formatDependenciesToRemove = (dependencies) => {
  return dependencies.reduce((acc, curr) => {
    const currDependencyField = MUTATION_FIELD_DEPENDENCY_BY_TYPENAME[curr['__typename']];

    if (acc[currDependencyField.deleteName]) {
      acc[currDependencyField.deleteName].push({ id: curr.id });
    } else {
      acc[currDependencyField.deleteName] = [{ id: curr.id }];
    }
    return acc;
  }, {});
};

const getMutationData = (service) => {
  const customersSubInputs = generateSubInputs(
    service.users ? service.users.filter((us) => us.__typename === 'Customer') : [],
  );
  const endUsersSubInputs = generateSubInputs(
    service.users ? service.users.filter((us) => us.__typename === 'EndUser') : [],
  );
  const dependenciesToAdd = formatDependenciesToUpdate(
    service.dependencies ? service.dependencies.filter((dep) => dep.origin === NEW) : [],
  );
  const dependenciesToUnlink = service.dependencies
    ? service.dependencies.filter((dep) => dep.status === UNLINK).map((dep) => ({ relation_id: dep.relation_id }))
    : [];

  const dependenciesToRemove = service.dependencies
    ? formatDependenciesToRemove(service.dependencies.filter((dep) => dep.status === REMOVE))
    : {};
  return {
    createOrUpdateInput: {
      // name: service.name,
      description: service.description,
      operational_state: service.operational_state,
      service_type: service.service_type_obj.name,
      relationship_provider: service.provider_id,
      decommissioned_date: service.decommissioned_date,
      support_group: service.support_group_id,
      responsible_group: service.responsible_group_id,
      ncs_service_name: service.ncs_service_name,
      vpn_type: service.vpn_type,
      vlan: service.vlan,
      vrf_target: service.vrf_target,
    },
    subInputs: {
      ...dependenciesToAdd,
      ...dependenciesToRemove,
      unlink_subinputs: [...dependenciesToUnlink, ...customersSubInputs.toUnlink, ...endUsersSubInputs.toUnlink],
      update_used_by_customer: customersSubInputs.toUpdate.map((cus) => ({ ...cus, ...{ skip_update: true } })),
      update_used_by_enduser: endUsersSubInputs.toUpdate.map((endU) => ({ ...endU, ...{ skip_update: true } })),
      deleted_used_by_customer: customersSubInputs.toDelete,
      deleted_used_by_enduser: endUsersSubInputs.toDelete,
    },
  };
};

export default getMutationData;
