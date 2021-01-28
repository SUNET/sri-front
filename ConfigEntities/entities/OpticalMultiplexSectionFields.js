const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const OPTICAL_MULTIPLEX_SECTION_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  {
    name: 'provider',
    type: FIELD_TYPES.ID_OBJECT,
  },
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
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'dependencies',
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: '__typename' },
      { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' },
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
  },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const OPTICAL_MULTIPLEX_SECTION_SUNET = [];

const OPTICAL_MULTIPLEX_SECTION_NORDUNI = [];

module.exports = {
  OPTICAL_MULTIPLEX_SECTION_COMMON_FIELDS,
  OPTICAL_MULTIPLEX_SECTION_SUNET,
  OPTICAL_MULTIPLEX_SECTION_NORDUNI,
};
