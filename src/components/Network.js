import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import Locations from "./Locations";

class Network extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Switch>
                        <Route exact path={`${this.props.match.url}`} component={() => <p>Network</p>} />
                        <Route component={Locations} />
                    </Switch>
                </Col>
            </Row>
        );
    }
}

export default withTranslation()(Network);
