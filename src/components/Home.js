import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import graphql from "babel-plugin-relay/macro";

import DashBoardBlock from "./DashBoardBlock";

const SearchAllContactsQuery = graphql`
    query HomeContactsQuery($count: Int!, $orderBy: ContactOrderBy) {
        ...DashBoardBlockList_models @arguments(count: $count, orderBy: $orderBy)
    }
`;

class Home extends React.Component {
    render() {
        return (
            <section>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Col>
                                <DashBoardBlock
                                    title="Reports"
                                    query={SearchAllContactsQuery}
                                    length={3}
                                    footer={{ label: "See all report", link: "#" }}
                                />
                            </Col>
                            <Col>
                                <DashBoardBlock
                                    title="Community news"
                                    query={SearchAllContactsQuery}
                                    length={3}
                                    footer={{ label: "See community", link: "/community" }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DashBoardBlock title="Contacts" query={SearchAllContactsQuery} length={4} />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <DashBoardBlock
                            title="Contacts"
                            query={SearchAllContactsQuery}
                            length={6}
                            footer={{ label: "See contacts", link: "#" }}
                        />
                    </Col>
                </Row>
            </section>
        );
    }
}

export default withTranslation()(Home);
