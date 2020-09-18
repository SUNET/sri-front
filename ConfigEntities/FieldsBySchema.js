const CABLE_FIELDS = require('./entities/CableFields');
const SWITCH_FIELDS = require('./entities/SwitchFields');
const ROUTER_FIELDS = require('./entities/RouterFields');
const OPTICALPATH_FIELDS = require('./entities/OpticalPathFields');
const OPTICALFILTER_FIELDS = require('./entities/OpticalFilterFields');
const SITE_FIELDS = require('./entities/SiteFields');

module.exports = [
  {
    entity: 'Cable',
    files: ['src/queries/cable/CableDetailsQuery', 'src/components/cable/CableUpdateForm'],
    reference: '___CABLE_FIELDS___',
    queries: {
      common: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS],
      },
      sunet: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS, ...CABLE_FIELDS.CABLE_SUNET],
      },
      nordunet: {
        fields: [...CABLE_FIELDS.CABLE_COMMON_FIELDS, ...CABLE_FIELDS.CABLE_NORDUNI],
      },
    },
  },
  {
    entity: 'Switch',
    files: ['src/queries/switch/SwitchDetailsQuery', 'src/components/switch/SwitchUpdateForm'],
    reference: '___SWITCH_FIELDS___',
    queries: {
      common: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS],
      },
      sunet: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS, ...SWITCH_FIELDS.SWITCH_SUNET],
      },
      nordunet: {
        fields: [...SWITCH_FIELDS.SWITCH_COMMON_FIELDS, ...SWITCH_FIELDS.SWITCH_NORDUNI],
      },
    },
  },
  {
    entity: 'Router',
    files: ['src/queries/router/RouterDetailsQuery', 'src/components/router/RouterUpdateForm'],
    reference: '___ROUTER_FIELDS___',
    queries: {
      common: {
        fields: [...ROUTER_FIELDS.ROUTER_COMMON_FIELDS],
      },
      sunet: {
        fields: [...ROUTER_FIELDS.ROUTER_COMMON_FIELDS, ...ROUTER_FIELDS.ROUTER_SUNET],
      },
      nordunet: {
        fields: [...ROUTER_FIELDS.ROUTER_COMMON_FIELDS, ...ROUTER_FIELDS.ROUTER_NORDUNI],
      },
    },
  },
  {
    entity: 'OpticalPath',
    files: ['src/queries/opticalPath/OpticalPathDetailsQuery', 'src/components/opticalPath/OpticalPathUpdateForm'],
    reference: '___OPTICALPATH_FIELDS___',
    queries: {
      common: {
        fields: [...OPTICALPATH_FIELDS.OPTICALPATH_COMMON_FIELDS],
      },
      sunet: {
        fields: [...OPTICALPATH_FIELDS.OPTICALPATH_COMMON_FIELDS, ...OPTICALPATH_FIELDS.OPTICALPATH_SUNET],
      },
      nordunet: {
        fields: [...OPTICALPATH_FIELDS.OPTICALPATH_COMMON_FIELDS, ...OPTICALPATH_FIELDS.OPTICALPATH_NORDUNI],
      },
    },
  },
  {
    entity: 'OpticalFilter',
    files: [
      'src/queries/opticalFilter/OpticalFilterDetailsQuery',
      'src/components/opticalFilter/OpticalFilterUpdateForm',
    ],
    reference: '___OPTICALFILTER_FIELDS___',
    queries: {
      common: {
        fields: [...OPTICALFILTER_FIELDS.OPTICALFILTER_COMMON_FIELDS],
      },
      sunet: {
        fields: [...OPTICALFILTER_FIELDS.OPTICALFILTER_COMMON_FIELDS, ...OPTICALFILTER_FIELDS.OPTICALFILTER_SUNET],
      },
      nordunet: {
        fields: [...OPTICALFILTER_FIELDS.OPTICALFILTER_COMMON_FIELDS, ...OPTICALFILTER_FIELDS.OPTICALFILTER_NORDUNI],
      },
    },
  },
  {
    entity: 'Site',
    files: [
      'src/queries/site/SiteDetailsQuery',
      'src/components/site/SiteUpdateForm',
    ],
    reference: '___SITE_FIELDS___',
    queries: {
      common: {
        fields: [...SITE_FIELDS.SITE_COMMON_FIELDS],
      },
      sunet: {
        fields: [...SITE_FIELDS.SITE_COMMON_FIELDS, ...SITE_FIELDS.SITE_SUNET],
      },
      nordunet: {
        fields: [...SITE_FIELDS.SITE_COMMON_FIELDS, ...SITE_FIELDS.SITE_NORDUNI],
      },
    },
  },
];
