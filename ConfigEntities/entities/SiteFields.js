const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SITE_COMMON_FIELDS = [
  { type: FIELD_TYPES.SINGLE, name: 'id' },
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: '__typename' },
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  { type: FIELD_TYPES.SINGLE, name: 'area' },
  { type: FIELD_TYPES.SINGLE, name: 'latitude' },
  { type: FIELD_TYPES.SINGLE, name: 'longitude' },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const SITE_SUNET = [];

const SITE_NORDUNI = [];

module.exports = {
  SITE_COMMON_FIELDS,
  SITE_SUNET,
  SITE_NORDUNI,
};
