const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const ROUTER_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  ...COMMON_FIELDS.RACK_INFO,
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
  { type: FIELD_TYPES.SINGLE, name: 'model' },
  { type: FIELD_TYPES.SINGLE, name: 'version' },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'dependents',
    subFields: [
      ...COMMON_FIELDS.BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
    ],
    onSentences: [
      {
        entity: 'Service',
        subFields: [
          { type: FIELD_TYPES.ID_OBJECT, name: 'service_type', alias: 'type' },
          { type: FIELD_TYPES.ID_OBJECT, name: 'service_type' },
        ],
      },
      {
        entity: 'OpticalPath',
        subFields: [
          { type: FIELD_TYPES.SINGLE, name: 'wavelength' },
          { type: FIELD_TYPES.OBJECT, name: 'framing' },
          { type: FIELD_TYPES.OBJECT, name: 'capacity' },
          { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
        ],
      },
      {
        entity: 'OpticalMultiplexSection',
        subFields: [{ type: FIELD_TYPES.OBJECT, name: 'operational_state' }],
      },
      {
        entity: 'OpticalLink',
        subFields: [
          { type: FIELD_TYPES.OBJECT, name: 'link_type', alias: 'type' },
          { type: FIELD_TYPES.OBJECT, name: 'interface_type' },
          { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
          {
            type: FIELD_TYPES.ARRAY_LIST,
            name: 'ports',
            subFields: [...COMMON_FIELDS.BASIC_INFO],
          },
        ],
      },
    ],
  },
  ...COMMON_FIELDS.PORT_LIST,
  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const ROUTER_SUNET = [];

const ROUTER_NORDUNI = [];

module.exports = {
  ROUTER_COMMON_FIELDS,
  ROUTER_SUNET,
  ROUTER_NORDUNI,
};
