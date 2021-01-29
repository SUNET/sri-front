const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SERVICE_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.ID_OBJECT, name: 'service_type' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'service_class' },
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.SINGLE, name: 'decommissioned_date' },
  { type: FIELD_TYPES.SINGLE, name: 'project_end_date' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'provider' },

  { type: FIELD_TYPES.SINGLE, name: 'ncs_service_name' },
  { type: FIELD_TYPES.SINGLE, name: 'vpn_type' },
  { type: FIELD_TYPES.SINGLE, name: 'vlan' },
  { type: FIELD_TYPES.SINGLE, name: 'vrf_target' },

  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'customers',
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: '__typename' },
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
  },

  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'end_users',
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: '__typename' },
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
  },

  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'dependencies',
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: '__typename' },
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
  },
  { type: FIELD_TYPES.SINGLE, name: 'contract_number' },

  ...COMMON_FIELDS.RELATION_GROUP_INFO,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const SERVICE_SUNET = [];

const SERVICE_NORDUNI = [];

module.exports = {
  SERVICE_COMMON_FIELDS,
  SERVICE_SUNET,
  SERVICE_NORDUNI,
};
