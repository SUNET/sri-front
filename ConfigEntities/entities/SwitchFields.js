const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const SWITCH_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.PHYSICAL_BASIC_DATA,
  ...COMMON_FIELDS.BASIC_OPERATIVE_SYSTEM,
  ...COMMON_FIELDS.LOCATION_INFO,
  ...COMMON_FIELDS.RELATION_GROUP_INFO,
  ...COMMON_FIELDS.PORT_LIST,
  { type: FIELD_TYPES.ID_OBJECT, name: 'provider' },
  { type: FIELD_TYPES.SINGLE, name: 'ip_addresses' },
  { type: FIELD_TYPES.SINGLE, name: 'max_number_of_ports' },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const SWITCH_SUNET = [];

const SWITCH_NORDUNI = [];

module.exports = {
  SWITCH_COMMON_FIELDS,
  SWITCH_SUNET,
  SWITCH_NORDUNI,
};
