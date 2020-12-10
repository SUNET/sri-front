const CABLE_FIELDS = require('./entities/CableFields');
const SWITCH_FIELDS = require('./entities/SwitchFields');
const ROUTER_FIELDS = require('./entities/RouterFields');
const OPTICALPATH_FIELDS = require('./entities/OpticalPathFields');
const OPTICALFILTER_FIELDS = require('./entities/OpticalFilterFields');
const RACK_FIELDS = require('./entities/RackFields');
const ROOM_FIELDS = require('./entities/RoomFields');
const SITE_FIELDS = require('./entities/SiteFields');
const SERVICE_FIELDS = require('./entities/ServiceFields');
const UNIT_FIELDS = require('./entities/UnitFields');
const CUSTOMER_FIELDS = require('./entities/CustomerFields');

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
    entity: 'Rack',
    files: ['src/queries/rack/RackDetailsQuery', 'src/components/rack/RackUpdateForm'],
    reference: '___RACK_FIELDS___',
    queries: {
      common: {
        fields: [...RACK_FIELDS.RACK_COMMON_FIELDS],
      },
      sunet: {
        fields: [...RACK_FIELDS.RACK_COMMON_FIELDS, ...RACK_FIELDS.RACK_SUNET],
      },
      nordunet: {
        fields: [...RACK_FIELDS.RACK_COMMON_FIELDS, ...RACK_FIELDS.RACK_NORDUNI],
      },
    },
  },
  {
    entity: 'Room',
    files: ['src/queries/room/RoomDetailsQuery', 'src/components/room/RoomUpdateForm'],
    reference: '___ROOM_FIELDS___',
    queries: {
      common: {
        fields: [...ROOM_FIELDS.ROOM_COMMON_FIELDS],
      },
      sunet: {
        fields: [...ROOM_FIELDS.ROOM_COMMON_FIELDS, ...ROOM_FIELDS.ROOM_SUNET],
      },
      nordunet: {
        fields: [...ROOM_FIELDS.ROOM_COMMON_FIELDS, ...ROOM_FIELDS.ROOM_NORDUNI],
      },
    },
  },
  {
    entity: 'Site',
    files: ['src/queries/site/SiteDetailsQuery', 'src/components/site/SiteUpdateForm'],
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
  {
    entity: 'Service',
    files: ['src/queries/service/ServiceDetailsQuery', 'src/components/service/ServiceUpdateForm'],
    reference: '___SERVICE_FIELDS___',
    queries: {
      common: {
        fields: [...SERVICE_FIELDS.SERVICE_COMMON_FIELDS],
      },
      sunet: {
        fields: [...SERVICE_FIELDS.SERVICE_COMMON_FIELDS, ...SERVICE_FIELDS.SERVICE_SUNET],
      },
      nordunet: {
        fields: [...SERVICE_FIELDS.SERVICE_COMMON_FIELDS, ...SERVICE_FIELDS.SERVICE_NORDUNI],
      },
    },
  },
  {
    entity: 'Unit',
    files: ['src/queries/unit/UnitDetailsQuery', 'src/components/unit/UnitUpdateForm'],
    reference: '___UNIT_FIELDS___',
    queries: {
      common: {
        fields: [...UNIT_FIELDS.UNIT_COMMON_FIELDS],
      },
      sunet: {
        fields: [...UNIT_FIELDS.UNIT_COMMON_FIELDS, ...UNIT_FIELDS.UNIT_SUNET],
      },
      nordunet: {
        fields: [...UNIT_FIELDS.UNIT_COMMON_FIELDS, ...UNIT_FIELDS.UNIT_NORDUNI],
      },
    },
  },
  {
    entity: 'Customer',
    files: ['src/queries/customer/CustomerDetailsQuery', 'src/components/customer/CustomerUpdateForm'],
    reference: '___CUSTOMER_FIELDS___',
    queries: {
      common: {
        fields: [...CUSTOMER_FIELDS.CUSTOMER_COMMON_FIELDS],
      },
      sunet: {
        fields: [...CUSTOMER_FIELDS.CUSTOMER_COMMON_FIELDS, ...CUSTOMER_FIELDS.CUSTOMER_SUNET],
      },
      nordunet: {
        fields: [...CUSTOMER_FIELDS.CUSTOMER_COMMON_FIELDS, ...CUSTOMER_FIELDS.CUSTOMER_NORDUNI],
      },
    },
  },
];
