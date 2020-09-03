const CABLE_FIELDS = require('./entities/CableFields');
const SWITCH_FIELDS = require('./entities/SwitchFields');

module.exports = [
  {
    entity: 'Cable',
    files: ['src/queries/cable/CableDetailsQuery.js', 'src/components/cable/CableUpdateForm.js'],
    reference: '___CABLE_FIELDS___',
    queries: {
      common: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS],
      },
      sunet: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS, ...CABLE_FIELDS.CABLE_SUNET],
      },
      nordunet: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS, ...CABLE_FIELDS.CABLE_NORDUNI],
      },
    },
  },
  {
    entity: 'Switch',
    files: ['src/queries/switch/SwitchDetailsQuery.js', 'src/components/switch/SwitchUpdateForm.js'],
    reference: '___SWITCH_FIELDS___',
    queries: {
      common: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS],
      },
      sunet: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS, ...SWITCH_FIELDS.SWITCH_SUNET],
      },
      nordunet: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS, ...SWITCH_FIELDS.SWITCH_NORDUNI],
      },
    },
  },
];
