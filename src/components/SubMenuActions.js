import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isBrowser } from 'react-device-detect';

import formattedServicesData from './service/serviceListData';

class SubMenuActions extends React.Component {
  ROUTE_LIST = [
    {
      path: '/community/organizations/',
      pathTo: '/community/organizations/create',
      textButton: 'entity-add/organizations',
    },
    {
      path: '/community/contacts/',
      pathTo: '/community/contacts/create',
      textButton: 'entity-add/contacts',
    },
    {
      path: '/community/groups/',
      pathTo: '/community/groups/create',
      textButton: 'entity-add/groups',
    },
    {
      path: '/network/customers/',
      pathTo: '/network/customers/create',
      textButton: 'entity-add/customers',
    },
    {
      path: '/network/providers/',
      pathTo: '/network/providers/create',
      textButton: 'entity-add/providers',
    },
    {
      path: '/network/site-owners/',
      pathTo: '/network/site-owners/create',
      textButton: 'entity-add/site-owners',
    },
    {
      path: '/network/end-users/',
      pathTo: '/network/end-users/create',
      textButton: 'entity-add/end-users',
    },
    {
      path: '/network/cables/',
      pathTo: '/network/cables/create',
      textButton: 'entity-add/cables',
    },
    {
      path: '/network/ports/',
      pathTo: '/network/ports/create',
      textButton: 'entity-add/ports',
    },
    {
      path: '/network/switches/',
      pathTo: '/network/switches/create',
      textButton: 'entity-add/switches',
    },
    {
      path: '/network/external-equipments/',
      pathTo: '/network/external-equipments/create',
      textButton: 'entity-add/external-equipments',
    },
    {
      path: '/network/hosts/',
      pathTo: '/network/hosts/create',
      textButton: 'entity-add/hosts',
    },
    {
      path: '/network/optical-nodes/',
      pathTo: '/network/optical-nodes/create',
      textButton: 'entity-add/optical-nodes',
    },
    {
      path: '/network/odfs/',
      pathTo: '/network/odfs/create',
      textButton: 'entity-add/odfs',
    },
    {
      path: '/network/optical-links/',
      pathTo: '/network/optical-links/create',
      textButton: 'entity-add/optical-links',
    },
    {
      path: '/network/optical-multiplex-sections/',
      pathTo: '/network/optical-multiplex-sections/create',
      textButton: 'entity-add/optical-multiplex-sections',
    },
    {
      path: '/network/optical-paths/',
      pathTo: '/network/optical-paths/create',
      textButton: 'entity-add/optical-paths',
    },
    {
      path: '/network/optical-filters/',
      pathTo: '/network/optical-filters/create',
      textButton: 'entity-add/optical-filters',
    },
    {
      path: '/network/location-racks/',
      pathTo: '/network/location-racks/create',
      textButton: 'entity-add/location-racks',
    },
    {
      path: '/network/location-rooms/',
      pathTo: '/network/location-rooms/create',
      textButton: 'entity-add/location-rooms',
    },
    {
      path: '/network/location-sites/',
      pathTo: '/network/location-sites/create',
      textButton: 'entity-add/location-sites',
    },
    ...formattedServicesData.map((service) => ({
      path: `/network/${service.path}`,
      pathTo: `/network/${service.path}/create`,
      textButton: 'entity-add/services',
    })),
  ];
  render() {
    const { t } = this.props;
    return (
      <Switch>
        {this.ROUTE_LIST.map((routeData, index) => {
          return (
            <Route
              key={`sub-action${index}`}
              exact
              path={routeData.path}
              component={() => (
                <button
                  className="btn primary add-cta reduced-in-mobile"
                  onClick={() => this.props.history.push(routeData.pathTo)}
                >
                  {isBrowser ? t(routeData.textButton) : '+'}
                </button>
              )}
            />
          );
        })}
      </Switch>
    );
  }
}

export default withRouter(withTranslation()(SubMenuActions));
