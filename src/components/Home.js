import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import environment from "../createRelayEnvironment";

import DashBoardContactBlock from "./contact/DashBoardContactBlock";

import "../style/query-renderer-spinner.scss"

class Home extends React.Component {
    render() {
        return (
            <section>
                <Row>
                    <Col xl={4} lg={4} md={6} sm={12}>
                        <DashBoardContactBlock
                            environment={environment}
                            title="Contacts"
                            footer={{ label: "See contacts", link: "/community/contacts" }}
                        />
                    </Col>
                </Row>
            </section>
        );
    }
}

export default withTranslation()(Home);
