const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const OPTICALPATH_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.OBJECT, name: 'framing' },
  { type: FIELD_TYPES.OBJECT, name: 'capacity' },
  { type: FIELD_TYPES.SINGLE, name: 'wavelength' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'provider' },
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
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
    onSentences: [
      ...COMMON_FIELDS.ON_SENTENCES_DEPENDENTS_BLOCK,
      {
        entity: 'Cable',
        subFields: [
          { name: 'cable_type', type: FIELD_TYPES.OBJECT, alias: 'type' },
          {
            type: FIELD_TYPES.ARRAY_LIST,
            name: 'ports',
            subFields: [...COMMON_FIELDS.BASIC_INFO],
          },
        ],
      },
    ],
  },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const OPTICALPATH_SUNET = [];

const OPTICALPATH_NORDUNI = [];

module.exports = {
  OPTICALPATH_COMMON_FIELDS,
  OPTICALPATH_SUNET,
  OPTICALPATH_NORDUNI,
};
