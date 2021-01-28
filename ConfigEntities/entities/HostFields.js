const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const HOST_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.PHYSICAL_BASIC_DATA,
  { type: FIELD_TYPES.SINGLE, name: 'ip_addresses' },
  ...COMMON_FIELDS.COMPLETE_LOCATION,
  ...COMMON_FIELDS.RELATION_GROUP_INFO,
  ...COMMON_FIELDS.BASIC_OPERATIVE_SYSTEM,
  ...COMMON_FIELDS.RACK_INFO,
  ...COMMON_FIELDS.PORT_LIST,
  {
    type: FIELD_TYPES.ARRAY_LIST,
    alias: 'owner',
    name: 'host_owner',
    subFields: [...COMMON_FIELDS.BASIC_INFO],

    onSentences: [
      {
        entity: 'EndUser',
        subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'Customer',
        subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'HostUser',
        subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'Provider',
        subFields: [...COMMON_FIELDS.BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
    ],
  },
  { type: FIELD_TYPES.SINGLE, name: 'host_type' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'host_user' },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const HOST_SUNET = [];

const HOST_NORDUNI = [];

module.exports = {
  HOST_COMMON_FIELDS,
  HOST_SUNET,
  HOST_NORDUNI,
};
