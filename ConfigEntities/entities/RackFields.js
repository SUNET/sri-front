const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const RACK_PARENT = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'parent',
    subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
    onSentences: [
      {
        entity: 'Room',
        subFields: [{ type: FIELD_TYPES.SINGLE, name: 'floor' }, ...COMMON_FIELDS.LOCATED_IN_BLOCK],
      },
      {
        entity: 'Site',
        subFields: [...COMMON_FIELDS.LOCATED_IN_BLOCK],
      },
    ],
  },
];

const RACK_COMMON_FIELDS = [
  { type: FIELD_TYPES.SINGLE, name: 'id' },
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: '__typename' },
  { type: FIELD_TYPES.SINGLE, name: 'height' },
  { type: FIELD_TYPES.SINGLE, name: 'width' },
  { type: FIELD_TYPES.SINGLE, name: 'depth' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_units' },
  ...COMMON_FIELDS.LOCATED_IN_BLOCK,
  ...RACK_PARENT,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const RACK_SUNET = [];

const RACK_NORDUNI = [];

module.exports = {
  RACK_COMMON_FIELDS,
  RACK_SUNET,
  RACK_NORDUNI,
};
