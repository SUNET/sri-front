const MUTATION_FIELD_OWNS_BY_TYPENAME = {
  Port: {
    updateName: 'update_owns_port',
    deleteName: 'deleted_owns_port',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'port_type', type: 'object', alias: 'type' },
    ],
  },
  Cable: {
    updateName: 'update_owns_cable',
    deleteName: 'deleted_owns_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'cable_type', type: 'object', alias: 'type' },
    ],
  },
  Host: {
    updateName: 'update_owns_cable',
    deleteName: 'deleted_owns_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Router: {
    updateName: 'update_owns_router',
    deleteName: 'deleted_owns_router',
    fields: [{ name: 'operational_state', type: 'object' }],
  },
  Switch: {
    updateName: 'update_owns_switch',
    deleteName: 'deleted_owns_switch',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Firewall: {
    updateName: 'update_owns_firewall',
    deleteName: 'deleted_owns_firewall',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  ExternalEquipment: {
    updateName: 'update_owns_externalequipment',
    deleteName: 'deleted_owns_externalequipment',
    fields: [{ name: 'name', type: 'simple' }],
  },
  OpticalNode: {
    updateName: 'update_owns_opticalnode',
    deleteName: 'deleted_owns_opticalnode',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
      { name: 'type', type: 'type', mutationName: 'type' },
    ],
  },
  ODF: {
    updateName: 'update_owns_odf',
    deleteName: 'deleted_owns_odf',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalFilter: {
    updateName: 'update_owns_opticalfilter',
    deleteName: 'deleted_owns_opticalfilter',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
};
export default MUTATION_FIELD_OWNS_BY_TYPENAME;
