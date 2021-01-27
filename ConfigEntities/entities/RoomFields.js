const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const ROOM_HAS = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'has',
    subFields: [...COMMON_FIELDS.BASIC_INFO],
    onSentences: [
      {
        entity: 'Site',
        subFields: [...COMMON_FIELDS.LOCATED_IN_BLOCK, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
      },
      {
        entity: 'Rack',
        subFields: [...COMMON_FIELDS.LOCATED_IN_BLOCK, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
      },
    ],
  },
];

const ROOM_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'floor' },
  ...COMMON_FIELDS.LOCATED_IN_BLOCK,
  ...ROOM_HAS,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const ROOM_SUNET = [];

const ROOM_NORDUNI = [];

module.exports = {
  ROOM_COMMON_FIELDS,
  ROOM_SUNET,
  ROOM_NORDUNI,
};
