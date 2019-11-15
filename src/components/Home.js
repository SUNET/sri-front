import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import DashBoardContactBlock from "./contact/DashBoardContactBlock";

class Home extends React.Component {
    render() {
        return (
            <section>
                <Row>
                    <Col xl={3} lg={4} md={6} sm={12}>
                        <DashBoardContactBlock
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
