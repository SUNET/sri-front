const MUTATION_FIELD_PROVIDE_BY_TYPENAME = {
  Port: {
    updateName: 'update_provides_port',
    deleteName: 'deleted_provides_port',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'port_type', type: 'object', alias: 'type' },
    ],
  },
  Cable: {
    updateName: 'update_provides_cable',
    deleteName: 'deleted_provides_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'cable_type', type: 'object', alias: 'type' },
    ],
  },
  Host: {
    updateName: 'update_provides_cable',
    deleteName: 'deleted_provides_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Router: {
    updateName: 'update_provides_router',
    deleteName: 'deleted_provides_router',
    fields: [{ name: 'operational_state', type: 'object' }],
  },
  Switch: {
    updateName: 'update_provides_switch',
    deleteName: 'deleted_provides_switch',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  Firewall: {
    updateName: 'update_provides_firewall',
    deleteName: 'deleted_provides_firewall',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  ExternalEquipment: {
    updateName: 'update_provides_externalequipment',
    deleteName: 'deleted_provides_externalequipment',
    fields: [{ name: 'name', type: 'simple' }],
  },
  OpticalNode: {
    updateName: 'update_provides_opticalnode',
    deleteName: 'deleted_provides_opticalnode',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
      { name: 'type', type: 'type', mutationName: 'type' },
    ],
  },
  ODF: {
    updateName: 'update_provides_odf',
    deleteName: 'deleted_provides_odf',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalFilter: {
    updateName: 'update_provides_opticalfilter',
    deleteName: 'deleted_provides_opticalfilter',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalLink: {
    updateName: 'update_provides_opticalfilter',
    deleteName: 'deleted_provides_opticalfilter',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalMultiplexSection: {
    updateName: 'update_provides_opticalmultiplexsection',
    deleteName: 'deleted_provides_opticalmultiplexsection',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalPath: {
    updateName: 'update_provides_opticalpath',
    deleteName: 'deleted_provides_opticalpath',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
      { name: 'framing', type: 'object' },
      { name: 'capacity', type: 'object' },
    ],
  },
  PeeringGroup: {
    updateName: 'update_provides_peeringgroup',
    deleteName: 'deleted_provides_peeringgroup',
    fields: [{ name: 'name', type: 'simple' }],
  },
  Unit: {
    updateName: 'update_provides_unit',
    deleteName: 'deleted_provides_unit',
    fields: [{ name: 'name', type: 'simple' }],
  },
  Service: {
    updateName: 'update_provides_service',
    deleteName: 'deleted_provides_service',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'service_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
};
export default MUTATION_FIELD_PROVIDE_BY_TYPENAME;
