const FIELD_TYPES = {
  SINGLE: 'single_text',
  ARRAY_LIST: 'field_array_list',
  OBJ_TO_LIST: 'field_array_object_to_list',
  OBJECT: 'name_value_object',
  ID_OBJECT: 'id_name_object',
};

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
    name: 'created',
    type: FIELD_TYPES.SINGLE,
  },
  {
    name: 'creator',
    type: FIELD_TYPES.ARRAY_LIST,
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
  {
    name: 'modified',
    type: FIELD_TYPES.SINGLE,
  },
  {
    name: 'modifier',
    type: FIELD_TYPES.ARRAY_LIST,
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
];

const BASIC_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: 'description' },
];

const CABLE_COMMON_FIELDS = [
  {
    type: FIELD_TYPES.SINGLE,
    name: 'id',
  },
  ...BASIC_INFO,
  {
    name: 'cable_type',
    type: FIELD_TYPES.OBJECT,
  },
  {
    name: 'provider',
    type: FIELD_TYPES.ID_OBJECT,
  },
  {
    name: 'ports',
    type: FIELD_TYPES.ARRAY_LIST,
    subFields: [
      { name: 'id', type: FIELD_TYPES.SINGLE },
      { name: 'name', type: FIELD_TYPES.SINGLE },
      { name: 'description', type: FIELD_TYPES.SINGLE },
      { name: 'relation_id', type: FIELD_TYPES.SINGLE },
      { name: 'port_type', alias: 'type', type: FIELD_TYPES.OBJECT },
    ],
  },
  ...COMMENTS_FIELDS,
  ...USER_CREATOR_MODIFIER_FIELDS,
];

const CABLE_SUNET = [
  {
    name: 'tele2_alternative_circuit_id',
    type: FIELD_TYPES.SINGLE,
  },
];

const CABLE_NORDUNI = [];

module.exports = [
  {
    entity: 'Cable',
    files: ['src/queries/cable/CableDetailsQuery.js', 'src/components/cable/CableUpdateForm.js'],
    // files: ['src/queries/cable/CableDetailsQuery.js'],
    reference: '___CABLE_FIELDS___',
    queries: {
      common: {
        fields: [...CABLE_COMMON_FIELDS],
      },
      sunet: {
        fields: [...CABLE_COMMON_FIELDS, ...CABLE_SUNET],
      },
      nordunet: {
        fields: [...CABLE_COMMON_FIELDS, ...CABLE_NORDUNI],
      },
    },
  },
];
