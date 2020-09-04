const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const OPTICALPATH_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.OBJECT, name: 'framing' },
  { type: FIELD_TYPES.OBJECT, name: 'capacity' },
  { type: FIELD_TYPES.SINGLE, name: 'wavelength' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'provider' },
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const OPTICALPATH_SUNET = [];

const OPTICALPATH_NORDUNI = [];

module.exports = {
  OPTICALPATH_COMMON_FIELDS,
  OPTICALPATH_SUNET,
  OPTICALPATH_NORDUNI,
};
