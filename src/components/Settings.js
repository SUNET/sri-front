import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import Dropdown from "./Dropdown";
import FieldSwitch from "./FieldSwitch";

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            default_page: ""
        };
    }

    _handleChangePage = (event) => {
        this.setState({ default_page: event.target.value });
    };

    _handleSaveDefaultHomePage = (event) => {
        console.log(this.state.default_page);
    };

    render() {
        const t = this.props.t;
        return (
            <section className="mt-3">
                <Row>
                    <Col sm={4}>
                        <Row>
                            <Col sm={8}>
                                <Dropdown
                                    type="main_pages"
                                    onChange={(e) => this._handleChangePage(e)}
                                />
                            </Col>
                            <Col className="my-auto">
                                <button
                                    onClick={(e) =>
                                        this._handleSaveDefaultHomePage(e)
                                    }
                                >
                                    {t("Default home page")}
                                </button>
                            </Col>
                        </Row>
                        <hr />
                        <ListGroup className="borderless">
                            <ListGroup.Item>
                                <FieldSwitch
                                    type="toggle-icon"
                                    icon="eyes"
                                    label={t("settings.network")}
                                    handleChecked={(e) => {}}
                                    id="network"
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FieldSwitch
                                    type="toggle-icon"
                                    icon="eyes"
                                    label={t("settings.services")}
                                    handleChecked={(e) => {}}
                                    id="services"
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FieldSwitch
                                    type="toggle-icon"
                                    icon="eyes"
                                    label={t("settings.community")}
                                    handleChecked={(e) => {}}
                                    id="community"
                                />
                            </ListGroup.Item>
                        </ListGroup>
                        <hr />
                        <ListGroup className="borderless">
                            <ListGroup.Item>
                                <FieldSwitch
                                    label={t("settings.notifications")}
                                    handleChecked={(e) => {}}
                                    id="notifications"
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <FieldSwitch
                                    label={t("settings.emails")}
                                    handleChecked={(e) => {}}
                                    id="emails-notification"
                                />
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default withTranslation()(Settings);
