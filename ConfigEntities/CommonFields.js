const FIELD_TYPES = require('./FieldsTypes');

const COMMENTS_FIELDS = [
  {
    name: 'comments',
    type: FIELD_TYPES.ARRAY_LIST,
    subFields: [
      { name: 'id', type: FIELD_TYPES.SINGLE },
      {
        name: 'user',
        type: FIELD_TYPES.ARRAY_LIST,
        subFields: [
          { name: 'first_name', type: FIELD_TYPES.SINGLE },
          { name: 'last_name', type: FIELD_TYPES.SINGLE },
        ],
      },
      { name: 'comment', type: FIELD_TYPES.SINGLE },
      { name: 'submit_date', type: FIELD_TYPES.SINGLE },
    ],
  },
];

const USER_CREATOR_MODIFIER_FIELDS = [
  {
    type: FIELD_TYPES.SINGLE,
    name: 'created',
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'creator',
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
  {
    type: FIELD_TYPES.SINGLE,
    name: 'modified',
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'modifier',
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
];

const BASIC_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'id' },
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: 'description' },
];

const PHYSICAL_BASIC_DATA = [
  { type: FIELD_TYPES.OBJECT, name: 'managed_by' },
  { type: FIELD_TYPES.SINGLE, name: 'backup' },
  { type: FIELD_TYPES.SINGLE, name: 'contract_number' },
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
];

const BASIC_OPERATIVE_SYSTEM = [
  { type: FIELD_TYPES.SINGLE, name: 'os' },
  { type: FIELD_TYPES.SINGLE, name: 'os_version' },
];

const RELATION_GROUP_INFO = [
  { type: FIELD_TYPES.ID_OBJECT, name: 'responsible_group' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'support_group' },
];
const LOCATION_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'rack_units' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_position' },
];

const PORT_LIST = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'ports',
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'port_type', alias: 'type' },
    ],
  },
];

module.exports = {
  COMMENTS_FIELDS,
  USER_CREATOR_MODIFIER_FIELDS,
  BASIC_INFO,
  PORT_LIST,
  PHYSICAL_BASIC_DATA,
  BASIC_OPERATIVE_SYSTEM,
  RELATION_GROUP_INFO,
  LOCATION_INFO,
};
