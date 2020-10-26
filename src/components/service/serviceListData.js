import { kebabCase } from '../../utils';

const serviceListData = [
  {
    name: 'Alien wavelenght',
    __typename: 'ServiceType',
    service_class: {
      name: 'DWDM',
    },
  },
  {
    name: 'Ethernet',
    __typename: 'ServiceType',
    service_class: {
      name: 'DWDM',
    },
  },
  {
    name: 'SDH',
    __typename: 'ServiceType',
    service_class: {
      name: 'DWDM',
    },
  },
  {
    name: 'Interface Switch',
    __typename: 'ServiceType',
    service_class: {
      name: 'Ethernet',
    },
  },
  {
    name: 'External',
    __typename: 'ServiceType',
    service_class: {
      name: 'External',
    },
  },
  {
    name: 'Hosting',
    __typename: 'ServiceType',
    service_class: {
      name: 'Hosting',
    },
  },
  {
    name: 'CFG Management',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'Mail',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'NDN CoreInfra',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'NDN IDM',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'NDN Instrumentation',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'NDN Tools',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'NDN Tor',
    __typename: 'ServiceType',
    service_class: {
      name: 'Internal',
    },
  },
  {
    name: 'CMS',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'EDUID',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'HSM',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'Social2SAML',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'Storage',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'TCS',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'VConf',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'VMWare',
    __typename: 'ServiceType',
    service_class: {
      name: 'IAAS',
    },
  },
  {
    name: 'Backbone',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Customer Connection',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Internet Exchange',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Private Interconnect',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Private Interconnection',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Project',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'Transit',
    __typename: 'ServiceType',
    service_class: {
      name: 'IP',
    },
  },
  {
    name: 'L2VPN',
    __typename: 'ServiceType',
    service_class: {
      name: 'MPLS',
    },
  },
  {
    name: 'L3VPN',
    __typename: 'ServiceType',
    service_class: {
      name: 'MPLS',
    },
  },
  {
    name: 'VPLS',
    __typename: 'ServiceType',
    service_class: {
      name: 'MPLS',
    },
  },
  {
    name: 'CanIt',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'Connect',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'Confluence',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'JIRA',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'Kaltura',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'Survey',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
  {
    name: 'Box',
    __typename: 'ServiceType',
    service_class: {
      name: 'SAAS',
    },
  },
];

export default serviceListData.map((service) => ({
  path: `service-${kebabCase(service.name)}`,
  originalName: service.name,
  i18nText: service.name,
}));
