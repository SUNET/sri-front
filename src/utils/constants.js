// Forms IDs
export const CREATE_CONTACT_FORM = 'create-contact-form';
export const UPDATE_CONTACT_FORM = 'update-contact-form';
export const CREATE_ORGANIZATION_FORM = 'create-organization-form';
export const UPDATE_ORGANIZATION_FORM = 'update-organization-form';
export const CREATE_GROUP_FORM = 'create-group-form';
export const UPDATE_GROUP_FORM = 'update-group-form';
export const CREATE_CUSTOMER_FORM = 'create-customer-form';
export const UPDATE_CUSTOMER_FORM = 'update-customer-form';
export const CREATE_PROVIDER_FORM = 'create-provider-form';
export const UPDATE_PROVIDER_FORM = 'update-provider-form';
export const CREATE_ENDUSER_FORM = 'create-end-user-form';
export const UPDATE_ENDUSER_FORM = 'update-end-user-form';
export const CREATE_SITEOWNER_FORM = 'create-site-owner-form';
export const UPDATE_SITEOWNER_FORM = 'update-site-owner-form';
export const CREATE_CABLE_FORM = 'create-cable-form';
export const UPDATE_CABLE_FORM = 'update-cable-form';
export const CREATE_PORT_FORM = 'create-port-form';
export const UPDATE_PORT_FORM = 'update-port-form';
export const CREATE_SWITCH_FORM = 'create-switch-form';
export const UPDATE_SWITCH_FORM = 'update-switch-form';
export const CREATE_FIREWALL_FORM = 'create-firewall-form';
export const UPDATE_FIREWALL_FORM = 'update-firewall-form';
export const CREATE_ROUTER_FORM = 'create-router-form';
export const UPDATE_ROUTER_FORM = 'update-router-form';
export const CREATE_EXTERNALEQUIPMENT_FORM = 'create-external-equipment-form';
export const UPDATE_EXTERNALEQUIPMENT_FORM = 'update-external-equipment-form';
export const CREATE_HOST_FORM = 'create-host-form';
export const UPDATE_HOST_FORM = 'update-host-form';
export const UPDATE_PEERINGPARTNER_FORM = 'update-peering-partner-form';
export const UPDATE_PEERINGGROUP_FORM = 'update-peering-group-form';
export const CREATE_OPTICALNODE_FORM = 'create-optical-node-form';
export const UPDATE_OPTICALNODE_FORM = 'update-optical-node-form';
export const CREATE_ODF_FORM = 'create-odf-form';
export const UPDATE_ODF_FORM = 'update-odf-form';
export const CREATE_OPTICALLINK_FORM = 'create-optical-link-form';
export const UPDATE_OPTICALLINK_FORM = 'update-optical-link-form';
export const CREATE_OPTICALMULTIPLEXSECTION_FORM = 'create-optical-multiple-section-form';
export const UPDATE_OPTICALMULTIPLEXSECTION_FORM = 'update-optical-multiple-section-form';
export const CREATE_OPTICALPATH_FORM = 'create-optical-path-form';
export const UPDATE_OPTICALPATH_FORM = 'update-optical-path-form';
export const CREATE_OPTICALFILTER_FORM = 'create-optical-filter-form';
export const UPDATE_OPTICALFILTER_FORM = 'update-optical-filter-form';
export const CREATE_RACK_FORM = 'create-location-racks-form';
export const UPDATE_RACK_FORM = 'update-location-racks-form';
export const CREATE_ROOM_FORM = 'create-location-rooms-form';
export const UPDATE_ROOM_FORM = 'update-location-rooms-form';
export const CREATE_SITE_FORM = 'create-location-sites-form';
export const UPDATE_SITE_FORM = 'update-location-sites-form';

export const CREATE_SERVICE_FORM = 'create-location-services-form';
export const UPDATE_SERVICE_FORM = 'update-location-services-form';

// Community Tabs
export const COMMUNITY_ORGANIZATIONS = 'organizations';
export const COMMUNITY_GROUPS = 'groups';
export const COMMUNITY_CONTACTS = 'contacts';
// Network Tabs
export const NETWORK_ORGANIZATIONS = 'network-organizations';
export const NETWORK_EQUIPMENT = 'network-equipment';
export const NETWORK_PEERING = 'network-peering';
export const NETWORK_OPTICAL = 'network-optical';
export const NETWORK_LOCATION = 'network-location';
export const NETWORK_SERVICE = 'network-service';
// Contact data TYPE
export const CONTACT_PERSONAL = 'personal';
export const CONTACT_WORK = 'work';

// FieldsArray Status Elements
export const UNLINK = 'unlink';
export const REMOVE = 'remove';
export const SAVED = 'saved';
export const CREATE = 'created';
export const CHANGED = 'changed';

// TIMES WAIT
export const MILLISECONDS_TO_WAIT_REQUEST_AUTOCOMPLETE = 250;

export const AFFILIATION_ORGANIZATION_NAMES = {
  affiliation_customer: 'Customer',
  affiliation_end_customer: 'End user',
  affiliation_host_user: 'Host user',
  affiliation_partner: 'Partner',
  affiliation_provider: 'Provider',
  affiliation_site_owner: 'Site owner',
};

// Activity Log Params
export const MAX_ROWS_CONTACT_DASHBOARD = 8;
export const ACTIVITY_LOG_NETWORK = 'network';
export const ACTIVITY_LOG_COMMUNITY = 'community';

export const ACTIVITY_LOGS_PARAMS = {
  [ACTIVITY_LOG_NETWORK]: {
    filterContext: 'Network',
    maxNumberRows: 4,
    header: {
      title: 'dashboard.network_activity',
    },
    footer: {
      label: 'dashboard.network',
      link: '/network',
    },
  },
  [ACTIVITY_LOG_COMMUNITY]: {
    filterContext: 'Community',
    maxNumberRows: 4,
    header: {
      title: 'dashboard.community_news',
    },
    footer: {
      label: 'dashboard.community',
      link: '/community',
    },
  },
};
