const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const PORT_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
  { type: FIELD_TYPES.OBJECT, name: 'port_type', alias: 'type' },
  ...COMMON_FIELDS.COMPLETE_LOCATION,
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'connected_to',
    subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
    onSentences: [
      {
        entity: 'Cable',
        subFields: [{ type: FIELD_TYPES.OBJECT, name: 'cable_type', alias: 'type' }],
      },
    ],
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'parent',
    subFields: [
      ...COMMON_FIELDS.BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
    ],
    onSentences: [
      {
        entity: 'Port',
        subFields: [{ type: FIELD_TYPES.OBJECT, name: 'port_type', alias: 'type' }],
      },
      {
        entity: 'Cable',
        subFields: [{ type: FIELD_TYPES.OBJECT, name: 'cable_type', alias: 'type' }],
      },
      {
        entity: 'OpticalNode',
        subFields: [{ type: FIELD_TYPES.OBJECT, name: 'type' }],
      },
    ],
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'dependents',
    subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
  },
];

const PORT_SUNET = [];

const PORT_NORDUNI = [];

module.exports = {
  PORT_COMMON_FIELDS,
  PORT_SUNET,
  PORT_NORDUNI,
};
