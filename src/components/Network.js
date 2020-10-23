import React from 'react';
import { withTranslation } from 'react-i18next';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import formattedServicesData from './services/serviceListData';

import SearchCustomerContainer from '../containers/customer/SearchCustomer';
import SearchEndUsersContainer from '../containers/endUser/SearchEndUser';
import SearchProvidersContainer from '../containers/provider/SearchProvider';
import SearchSiteOwnersContainer from '../containers/siteOwner/SearchSiteOwner';
import SearchCablesContainer from '../containers/cable/SearchCable';
import SearchPortsContainer from '../containers/port/SearchPort';
import SearchSwitchesContainer from '../containers/switch/SearchSwitch';
import SearchFirewallsContainer from '../containers/firewall/SearchFirewall';
import SearchRoutersContainer from '../containers/router/SearchRouter';
import SearchExternalEquipmentContainer from '../containers/externalEquipment/SearchExternalEquipment';
import SearchHostsContainer from '../containers/host/SearchHost';
import SearchPeeringPartnerContainer from '../containers/peeringPartner/SearchPeeringPartner';
import SearchPeeringGroupContainer from '../containers/peeringGroup/SearchPeeringGroup';
import SearchOpticalNodeContainer from '../containers/opticalNode/SearchOpticalNode';
import SearchOdfContainer from '../containers/ODF/SearchODF';
import SearchOpticalLinkContainer from '../containers/opticalLink/SearchOpticalLink';
import SearchOpticalMultiplexSectionContainer from '../containers/opticalMultiplexSection/SearchOpticalMultiplexSection';
import SearchOpticalPathContainer from '../containers/opticalPath/SearchOpticalPath';
import SearchOpticalFilterContainer from '../containers/opticalFilter/SearchOpticalFilter';
import SearchRackContainer from '../containers/rack/SearchRack';
import SearchRoomContainer from '../containers/room/SearchRoom';
import SearchSiteContainer from '../containers/site/SearchSite';

import GenericServiceList from '../components/services/ServiceList';

class Network extends React.Component {
  render() {
    return (
      <Row>
        <Col>
          <Switch>
            {/* <Route exact path={`${this.props.match.url}`} component={() => <p>Network</p>} /> */}
            {/* <Route component={Locations} /> */}
            <Redirect exact from="/network" to="/network/customers" />
            <Route path="/network/customers" component={SearchCustomerContainer} />
            <Route path="/network/end-users" component={SearchEndUsersContainer} />
            <Route path="/network/providers" component={SearchProvidersContainer} />
            <Route path="/network/site-owners" component={SearchSiteOwnersContainer} />
            <Route path="/network/cables" component={SearchCablesContainer} />
            <Route path="/network/ports" component={SearchPortsContainer} />
            <Route path="/network/switches" component={SearchSwitchesContainer} />
            <Route path="/network/firewalls" component={SearchFirewallsContainer} />
            <Route path="/network/routers" component={SearchRoutersContainer} />
            <Route path="/network/external-equipments" component={SearchExternalEquipmentContainer} />
            <Route path="/network/hosts" component={SearchHostsContainer} />
            <Route path="/network/peering-partners" component={SearchPeeringPartnerContainer} />
            <Route path="/network/peering-groups" component={SearchPeeringGroupContainer} />
            <Route path="/network/optical-nodes" component={SearchOpticalNodeContainer} />
            <Route path="/network/odfs" component={SearchOdfContainer} />{' '}
            <Route path="/network/optical-links" component={SearchOpticalLinkContainer} />
            <Route path="/network/optical-multiplex-sections" component={SearchOpticalMultiplexSectionContainer} />
            <Route path="/network/optical-paths" component={SearchOpticalPathContainer} />
            <Route path="/network/optical-filters" component={SearchOpticalFilterContainer} />
            <Route path="/network/location-racks" component={SearchRackContainer} />
            <Route path="/network/location-rooms" component={SearchRoomContainer} />
            <Route path="/network/location-sites" component={SearchSiteContainer} />
            {formattedServicesData.map((service) => (
              <Route path={`/network/${service.path}`} component={GenericServiceList} />
            ))}
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default withTranslation()(Network);
