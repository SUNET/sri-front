const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const CUSTOMER_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'owns',
    subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
  },
  ...COMMON_FIELDS.USES_SERVICES,
  ...COMMON_FIELDS.WITH_SAME_NAME,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const CUSTOMER_SUNET = [];

const CUSTOMER_NORDUNI = [];

module.exports = {
  CUSTOMER_COMMON_FIELDS,
  CUSTOMER_SUNET,
  CUSTOMER_NORDUNI,
};
