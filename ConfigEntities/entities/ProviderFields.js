const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const PROVIDER_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'provides',
    subFields: [
      ...COMMON_FIELDS.BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
    ],
  },
  ...COMMON_FIELDS.USES_SERVICES,
  ...COMMON_FIELDS.WITH_SAME_NAME,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const PROVIDER_SUNET = [];

const PROVIDER_NORDUNI = [];

module.exports = {
  PROVIDER_COMMON_FIELDS,
  PROVIDER_SUNET,
  PROVIDER_NORDUNI,
};
