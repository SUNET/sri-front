const FIELD_TYPES = require('../FieldsTypes');
const COMMON_FIELDS = require('../CommonFields');

const generateDependEntities = (name) => {
  return {
    type: FIELD_TYPES.ARRAY_LIST,
    name: name,
    subFields: [
      { type: FIELD_TYPES.SINGLE, name: '__typename' },
      { type: FIELD_TYPES.SINGLE, name: 'id' },
      { type: FIELD_TYPES.SINGLE, name: 'name' },
      { type: FIELD_TYPES.SINGLE, name: 'description' },
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
    ],
    onSentences: [
      {
        entity: 'Service',
        subFields: [
          { type: FIELD_TYPES.ID_OBJECT, name: 'service_type', alias: 'type' },
          { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
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
        ],
      },
    ],
  };
};

const UNIT_COMMON_FIELDS = [
  ...COMMON_FIELDS.BASIC_INFO,
  { type: FIELD_TYPES.SINGLE, name: 'ip_addresses' },
  { type: FIELD_TYPES.SINGLE, name: 'vlan' },
  generateDependEntities('dependents'),
  generateDependEntities('dependencies'),
  {
    type: FIELD_TYPES.ID_OBJECT,
    name: 'part_of',
    subFields: [
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'parent',
        onSentences: [
          {
            entity: 'Router',
            subFields: [
              {
                type: FIELD_TYPES.ID_OBJECT,
                name: 'location',
                subFields: [
                  { type: FIELD_TYPES.SINGLE, name: '__typename' },
                  { type: FIELD_TYPES.SINGLE, name: 'id' },
                  { type: FIELD_TYPES.SINGLE, name: 'name' },
                  { type: FIELD_TYPES.ID_OBJECT, name: 'has' },
                  { type: FIELD_TYPES.ID_OBJECT, name: 'parent' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  ...COMMON_FIELDS.COMMENTS_FIELDS,
  ...COMMON_FIELDS.USER_CREATOR_MODIFIER_FIELDS,
];

const UNIT_SUNET = [];

const UNIT_NORDUNI = [];

module.exports = {
  UNIT_COMMON_FIELDS,
  UNIT_SUNET,
  UNIT_NORDUNI,
};
