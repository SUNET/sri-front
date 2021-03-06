const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const ENDUSER_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  ...COMMON_FIELDS.USES_SERVICES,
  ...COMMON_FIELDS.WITH_SAME_NAME,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const ENDUSER_SUNET = [];

const ENDUSER_NORDUNI = [];

module.exports = {
  ENDUSER_COMMON_FIELDS,
  ENDUSER_SUNET,
  ENDUSER_NORDUNI,
};
