import React from "react";
import { withTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import SearchCustomerContainer from "../containers/customer/SearchCustomer";
import SearchEndUsersContainer from "../containers/endUser/SearchEndUser";
import SearchProvidersContainer from "../containers/provider/SearchProvider";
import SearchSiteOwnersContainer from "../containers/siteOwner/SearchSiteOwner";
import SearchCablesContainer from "../containers/cable/SearchCable";
import SearchPortsContainer from "../containers/port/SearchPort";
import SearchSwitchesContainer from "../containers/switch/SearchSwitch";

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
                    </Switch>
                </Col>
            </Row>
        );
    }
}

export default withTranslation()(Network);

