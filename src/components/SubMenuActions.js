import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { isBrowser } from 'react-device-detect';

class SubMenuActions extends React.Component {
  ROUTE_LIST = [
    {
      path: '/community/organizations/',
      pathTo: '/community/organizations/create',
      textButton: 'organization-details.add-organization',
    },
    {
      path: '/community/contacts/',
      pathTo: '/community/contacts/create',
      textButton: 'contact-details.add-contact',
    },
    {
      path: '/community/groups/',
      pathTo: '/community/groups/create',
      textButton: 'group-details.add-group',
    },
    {
      path: '/network/customers/',
      pathTo: '/network/customers/create',
      textButton: 'network.details.add/customers',
    },
    {
      path: '/network/providers/',
      pathTo: '/network/providers/create',
      textButton: 'network.details.add/providers',
    },
    {
      path: '/network/site-owners/',
      pathTo: '/network/site-owners/create',
      textButton: 'network.details.add/site-owners',
    },
    {
      path: '/network/end-users/',
      pathTo: '/network/end-users/create',
      textButton: 'network.details.add/end-users',
    },
    {
      path: '/network/cables/',
      pathTo: '/network/cables/create',
      textButton: 'network.details.add/cables',
    },
    {
      path: '/network/ports/',
      pathTo: '/network/ports/create',
      textButton: 'network.details.add/ports',
    },
    {
      path: '/network/switches/',
      pathTo: '/network/switches/create',
      textButton: 'network.details.add/switches',
    },
    {
      path: '/network/external-equipments/',
      pathTo: '/network/external-equipments/create',
      textButton: 'network.details.add/external-equipments',
    },
    {
      path: '/network/hosts/',
      pathTo: '/network/hosts/create',
      textButton: 'network.details.add/hosts',
    },
    {
      path: '/network/optical-nodes/',
      pathTo: '/network/optical-nodes/create',
      textButton: 'network.details.add/optical-nodes',
    },
    {
      path: '/network/odfs/',
      pathTo: '/network/odfs/create',
      textButton: 'network.details.add/odfs',
    },
    {
      path: '/network/optical-links/',
      pathTo: '/network/optical-links/create',
      textButton: 'network.details.add/optical-links',
    },
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
