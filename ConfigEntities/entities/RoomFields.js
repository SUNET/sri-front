const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const ROOM_COMMON_FIELDS = [
  { type: FIELD_TYPES.SINGLE, name: 'id' },
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: '__typename' },
  ...COMMON_FIELDS.LOCATED_IN_BLOCK,
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
