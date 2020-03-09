import React from "react";
import { withTranslation } from "react-i18next";
import { Switch, Route, Redirect } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import SearchCustomerContainer from "../containers/customer/SearchCustomer";
import SearchEndUsersContainer from "../containers/endUser/SearchEndUser";

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
                    </Switch>
                </Col>
            </Row>
        );
    }
}

export default withTranslation()(Network);
