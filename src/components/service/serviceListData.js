import { kebabCase } from '../../utils';

const serviceListData = {
  data: {
    services_classes: {
      edges: [
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjE=',
            name: 'DWDM',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjI=',
            name: 'Ethernet',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjM=',
            name: 'External',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjQ=',
            name: 'Hosting',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjU=',
            name: 'Internal',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjY=',
            name: 'IAAS',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjc=',
            name: 'IP',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjg=',
            name: 'MPLS',
          },
        },
        {
          node: {
            id: 'U2VydmljZUNsYXNzOjk=',
            name: 'SAAS',
          },
        },
      ],
    },
  },
};

export default serviceListData.data.services_classes.edges.map(({ node }) => {
  return {
    id: node.id,
    path: `service-${kebabCase(node.name)}`,
    originalName: node.name,
    i18nText: node.name,
  };
});
