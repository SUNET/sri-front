const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SITE_HAS = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'has',
    subFields: [...COMMON_FIELDS.BASIC_INFO],
    onSentences: [
      {
        entity: 'Room',
        subFields: [
          { type: FIELD_TYPES.SINGLE, name: 'floor' },
          ...COMMON_FIELDS.LOCATED_IN_BLOCK,
          { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
        ],
      },
      {
        entity: 'Rack',
        subFields: [...COMMON_FIELDS.LOCATED_IN_BLOCK, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
      },
    ],
  },
];

const SITE_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'country' },
  { type: FIELD_TYPES.OBJECT, name: 'country_code' },
  { type: FIELD_TYPES.SINGLE, name: 'area' },
  { type: FIELD_TYPES.SINGLE, name: 'latitude' },
  { type: FIELD_TYPES.SINGLE, name: 'longitude' },
  { type: FIELD_TYPES.SINGLE, name: 'owner_id' },
  { type: FIELD_TYPES.SINGLE, name: 'owner_site_name' },
  { type: FIELD_TYPES.SINGLE, name: 'url' },
  { type: FIELD_TYPES.SINGLE, name: 'telenor_subscription_id' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'site_responsible' },
  ...COMMON_FIELDS.LOCATED_IN_BLOCK,
  ...SITE_HAS,
  ...COMMON_FIELDS.ADDRESSES_LIST,
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
