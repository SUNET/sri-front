const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const CABLE_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  {
    name: 'cable_type',
    type: FIELD_TYPES.OBJECT,
  },
  {
    name: 'provider',
    type: FIELD_TYPES.ID_OBJECT,
  },
  { type: FIELD_TYPES.SINGLE, name: 'cable_length' },
  ...COMMON_FIELDS.PORT_LIST,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'dependents',
    subFields: [
      ...COMMON_FIELDS.BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
    ],
    onSentences: COMMON_FIELDS.ON_SENTENCES_DEPENDENTS_BLOCK,
  },
];

const CABLE_SUNET = [
  {
    name: 'tele2_alternative_circuit_id',
    type: FIELD_TYPES.SINGLE,
  },
];

const CABLE_NORDUNI = [];

module.exports = {
  CABLE_COMMON_FIELDS,
  CABLE_SUNET,
  CABLE_NORDUNI,
};
