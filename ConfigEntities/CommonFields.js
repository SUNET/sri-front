const FIELD_TYPES = require('./FieldsTypes');

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
    type: FIELD_TYPES.SINGLE,
    name: 'created',
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'creator',
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
  {
    type: FIELD_TYPES.SINGLE,
    name: 'modified',
  },
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'modifier',
    subFields: [{ name: 'email', type: FIELD_TYPES.SINGLE }],
  },
];

const BASIC_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'id' },
  { type: FIELD_TYPES.SINGLE, name: 'name' },
  { type: FIELD_TYPES.SINGLE, name: 'description' },
  { type: FIELD_TYPES.SINGLE, name: '__typename' },
];

const COMPLETE_LOCATION = [
  {
    type: FIELD_TYPES.ID_OBJECT,
    name: 'location',
    subFields: [
      ...BASIC_INFO,
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'parent',
        subFields: [{ type: FIELD_TYPES.ID_OBJECT, name: 'parent', subFields: [...BASIC_INFO] }],
      },
    ],
  },
];

const PHYSICAL_BASIC_DATA = [
  { type: FIELD_TYPES.OBJECT, name: 'managed_by' },
  { type: FIELD_TYPES.SINGLE, name: 'backup' },
  { type: FIELD_TYPES.SINGLE, name: 'contract_number' },
  { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
];

const BASIC_OPERATIVE_SYSTEM = [
  { type: FIELD_TYPES.SINGLE, name: 'os' },
  { type: FIELD_TYPES.SINGLE, name: 'os_version' },
];

const RELATION_GROUP_INFO = [
  { type: FIELD_TYPES.ID_OBJECT, name: 'responsible_group' },
  { type: FIELD_TYPES.ID_OBJECT, name: 'support_group' },
];
const RACK_INFO = [
  { type: FIELD_TYPES.SINGLE, name: 'rack_units' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_position' },
  { type: FIELD_TYPES.SINGLE, name: 'rack_back' },
  ...COMPLETE_LOCATION,
];

const PORT_LIST = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'ports',
    subFields: [
      ...BASIC_INFO,
      { type: FIELD_TYPES.SINGLE, name: 'relation_id' },
      { type: FIELD_TYPES.OBJECT, name: 'port_type', alias: 'type' },
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'part_of',
        onSentences: [
          {
            entity: 'Unit',
            subFields: [
              {
                type: FIELD_TYPES.ARRAY_LIST,
                name: 'dependents',
                subFields: [
                  { type: FIELD_TYPES.SINGLE, name: '__typename' },
                  { name: 'id', type: FIELD_TYPES.SINGLE },
                  { name: 'name', type: FIELD_TYPES.SINGLE },
                ],
              },
            ],
          },
        ],
      },
      {
        type: FIELD_TYPES.ARRAY_LIST,
        name: 'parent',
        subFields: [...BASIC_INFO],
        onSentences: [
          {
            entity: 'Physical',
            subFields: [...COMPLETE_LOCATION],
          },
        ],
      },
      {
        type: FIELD_TYPES.ID_OBJECT,
        name: 'connected_to',
        onSentences: [
          {
            entity: 'Cable',
            subFields: [
              {
                type: FIELD_TYPES.ARRAY_LIST,
                name: 'ports',
                subFields: [
                  { name: '__typename', type: FIELD_TYPES.SINGLE },
                  { name: 'id', type: FIELD_TYPES.SINGLE },
                  { name: 'name', type: FIELD_TYPES.SINGLE },
                  { name: 'parent', type: FIELD_TYPES.ID_OBJECT },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const ADDRESSES_LIST = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'addresses',
    subFields: [
      ...BASIC_INFO,
      { name: 'phone', type: FIELD_TYPES.SINGLE },
      { name: 'street', type: FIELD_TYPES.SINGLE },
      { name: 'floor', type: FIELD_TYPES.SINGLE },
      { name: 'room', type: FIELD_TYPES.SINGLE },
      { name: 'postal_code', type: FIELD_TYPES.SINGLE },
      { name: 'postal_area', type: FIELD_TYPES.SINGLE },
      { type: FIELD_TYPES.SINGLE, name: 'id', alias: 'key' },
    ],
  },
];

const LOCATED_IN_BLOCK = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'located_in',
    subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
  },
];

const OWNER_ENTITY = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'owner',
    subFields: [...BASIC_INFO],
    onSentences: [
      {
        entity: 'EndUser',
        subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'Customer',
        subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'HostUser',
        subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
      {
        entity: 'Provider',
        subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: '__typename', alias: 'type' }],
      },
    ],
  },
];

const WITH_SAME_NAME = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'with_same_name',
    subFields: [...BASIC_INFO],
    onSentences: [
      {
        entity: 'EndUser',
        subFields: [
          {
            type: FIELD_TYPES.SINGLE,
            name: 'url',
          },
        ],
      },
      {
        entity: 'Customer',
        subFields: [
          {
            type: FIELD_TYPES.SINGLE,
            name: 'url',
          },
        ],
      },
      {
        entity: 'SiteOwner',
        subFields: [
          {
            type: FIELD_TYPES.SINGLE,
            name: 'url',
          },
        ],
      },
      {
        entity: 'Provider',
        subFields: [
          {
            type: FIELD_TYPES.SINGLE,
            name: 'url',
          },
        ],
      },
      {
        entity: 'Customer',
        subFields: [
          {
            type: FIELD_TYPES.SINGLE,
            name: 'url',
          },
        ],
      },
      {
        entity: 'Organization',
        subFields: [
          { name: 'website', type: FIELD_TYPES.SINGLE },
          { name: 'organization_id', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_partner', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_customer', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_provider', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_host_user', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_site_owner', type: FIELD_TYPES.SINGLE },
          { name: 'affiliation_end_customer', type: FIELD_TYPES.SINGLE },

          {
            name: 'parent_organization',
            type: FIELD_TYPES.ID_OBJECT,
            subFields: [{ name: 'organization_id', type: FIELD_TYPES.SINGLE }],
          },
          { type: FIELD_TYPES.OBJECT, name: 'type' },
        ],
      },
    ],
  },
];

const USES_SERVICES = [
  {
    type: FIELD_TYPES.ARRAY_LIST,
    name: 'uses',
    subFields: [...BASIC_INFO, { type: FIELD_TYPES.SINGLE, name: 'relation_id' }],
    onSentences: [
      {
        entity: 'Service',
        subFields: [
          { type: FIELD_TYPES.ID_OBJECT, name: 'service_type' },
          { type: FIELD_TYPES.OBJECT, name: 'operational_state' },
        ],
      },
    ],
  },
];

const ON_SENTENCES_DEPENDENTS_BLOCK = [
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
        subFields: [...BASIC_INFO],
      },
    ],
  },
];
module.exports = {
  COMMENTS_FIELDS,
  USER_CREATOR_MODIFIER_FIELDS,
  BASIC_INFO,
  PORT_LIST,
  PHYSICAL_BASIC_DATA,
  BASIC_OPERATIVE_SYSTEM,
  RELATION_GROUP_INFO,
  RACK_INFO,
  ADDRESSES_LIST,
  LOCATED_IN_BLOCK,
  OWNER_ENTITY,
  WITH_SAME_NAME,
  USES_SERVICES,
  COMPLETE_LOCATION,
  ON_SENTENCES_DEPENDENTS_BLOCK,
};
