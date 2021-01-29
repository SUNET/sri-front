export default {
  Service: {
    updateName: 'update_dependencies_service',
    deleteName: 'deleted_dependencies_service',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'service_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalPath: {
    updateName: 'update_dependencies_opticalpath',
    deleteName: 'deleted_dependencies_opticalpath',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'wavelength', type: 'simple' },
      { name: 'framing', type: 'object' },
      { name: 'capacity', type: 'object' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalMultiplexSection: {
    updateName: 'update_dependencies_opticalmultiplexsection',
    deleteName: 'deleted_dependencies_opticalmultiplexsection',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'operational_state', type: 'object' },
    ],
  },
  OpticalLink: {
    updateName: 'update_dependencies_opticallink',
    deleteName: 'deleted_dependencies_opticallink',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'link_type', type: 'object' },
      { name: 'operational_state', type: 'object' },
      { name: 'interface_type', type: 'object' },
    ],
  },
  Cable: {
    updateName: 'update_dependencies_cable',
    deleteName: 'deleted_dependencies_cable',
    fields: [
      { name: 'name', type: 'simple' },
      { name: 'cable_type', type: 'object' },
    ],
  },
};
