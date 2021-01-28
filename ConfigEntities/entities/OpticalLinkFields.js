const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const OPTICAL_LINK_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  {
    name: 'provider',
    type: FIELD_TYPES.ID_OBJECT,
  },
  ...COMMON_FIELDS.PORT_LIST,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.OBJECT, name: 'link_type', alias: 'type' },
  { type: FIELD_TYPES.OBJECT, name: 'interface_type' },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const OPTICAL_LINK_SUNET = [];

const OPTICAL_LINK_NORDUNI = [];

module.exports = {
  OPTICAL_LINK_COMMON_FIELDS,
  OPTICAL_LINK_SUNET,
  OPTICAL_LINK_NORDUNI,
};
