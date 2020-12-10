const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SITEOWNER_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'responsible_for',
    subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
    onSentences: [
      {
        entity: 'Site',
        subFields: [
          { type: FIELD_TYPES.SINGLE, name: 'country' },
          { type: FIELD_TYPES.SINGLE, name: 'owner_id' },
        ],
      },
    ],
  },
  ...COMMON_FIELDS.WITH_SAME_NAME,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const SITEOWNER_SUNET = [];

const SITEOWNER_NORDUNI = [];

module.exports = {
  SITEOWNER_COMMON_FIELDS,
  SITEOWNER_SUNET,
  SITEOWNER_NORDUNI,
};
