const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SERVICE_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.ID_OBJECT, name: 'service_type' },
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.SINGLE, name: 'decommissioned_date' },  
  { type: FIELD_TYPES.ID_OBJECT, name: 'provider' },
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
