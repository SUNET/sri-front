const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const FIREWALL_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.PHYSICAL_BASIC_DATA,
  ...COMMON_FIELDS.RELATION_GROUP_INFO,
  ...COMMON_FIELDS.BASIC_OPERATIVE_SYSTEM,
  ...COMMON_FIELDS.RACK_INFO,
  ...COMMON_FIELDS.COMPLETE_LOCATION,
  ...COMMON_FIELDS.OWNER_ENTITY,
  { type: FIELD_TYPES.SINGLE, name: 'security_comment' },
  { type: FIELD_TYPES.SINGLE, name: 'model' },
  { type: FIELD_TYPES.SINGLE, name: 'vendor' },
  { type: FIELD_TYPES.SINGLE, name: 'service_tag' },
  { type: FIELD_TYPES.SINGLE, name: 'end_support' },
  { type: FIELD_TYPES.SINGLE, name: 'max_number_of_ports' },
  { type: FIELD_TYPES.OBJECT, name: 'security_class' },
  ...COMMON_FIELDS.PORT_LIST,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const FIREWALL_SUNET = [];

const FIREWALL_NORDUNI = [];

module.exports = {
  FIREWALL_COMMON_FIELDS,
  FIREWALL_SUNET,
  FIREWALL_NORDUNI,
};
