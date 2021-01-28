const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const ODF_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.RACK_INFO,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  ...COMMON_FIELDS.COMPLETE_LOCATION,
  { type: FIELD_TYPES.SINGLE, name: 'max_number_of_ports' },
  ...COMMON_FIELDS.PORT_LIST,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const ODF_SUNET = [];

const ODF_NORDUNI = [];

module.exports = {
  ODF_COMMON_FIELDS,
  ODF_SUNET,
  ODF_NORDUNI,
};
