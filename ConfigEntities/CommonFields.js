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
  { type: FIELD_TYPES.SINGLE, name: '__typename' },
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
const RACK_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'rack_units' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_position' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_back' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'location' },
];

const PORT_LIST = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'ports',
    subFields: [
      ...BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'port_type', alias: 'type' },
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'part_of',
        onSentences: [
          {
            entity: 'Unit',
            subFields: [
              {
                type: FIELD_TYPES.ARRAY_LIST,
                name: 'dependents',
                subFields: [
                  { type: FIELD_TYPES.SINGLE, name: '__typename' },
                  { name: 'id', type: FIELD_TYPES.SINGLE },
                  { name: 'name', type: FIELD_TYPES.SINGLE },
                ],
              },
            ],
          },
        ],
      },
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'connected_to',
        onSentences: [
          {
            entity: 'Cable',
            subFields: [
              {
                type: FIELD_TYPES.ARRAY_LIST,
                name: 'ports',
                subFields: [
                  { name: '__typename', type: FIELD_TYPES.SINGLE },
                  { name: 'id', type: FIELD_TYPES.SINGLE },
                  { name: 'name', type: FIELD_TYPES.SINGLE },
                  { name: 'parent', type: FIELD_TYPES.ID_OBJECT },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const ADDRESSES_LIST = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'addresses',
    subFields: [
      ...BASIC_INFO,
      { name: 'phone', type: FIELD_TYPES.SINGLE },
      { name: 'street', type: FIELD_TYPES.SINGLE },
      { name: 'floor', type: FIELD_TYPES.SINGLE },
      { name: 'room', type: FIELD_TYPES.SINGLE },
      { name: 'postal_code', type: FIELD_TYPES.SINGLE },
      { name: 'postal_area', type: FIELD_TYPES.SINGLE },
      { type: FIELD_TYPES.SINGLE, name: 'id', alias: 'key' },
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
  RACK_INFO,
  ADDRESSES_LIST,
};
