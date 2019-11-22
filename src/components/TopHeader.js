import React from "react";
import { withTranslation } from "react-i18next";
import { Dropdown, Nav, Navbar, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import Logout from "./Logout";

import "../style/TopHeader.scss";

class TopHeader extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <header>
                <Navbar id="top-header">
                    <Navbar.Brand as={Link} to="/">
                        <Image src={require("../static/img/logo.svg")} img-fluid="true" />
                    </Navbar.Brand>
                    {/* Hidden because it need to implement the logic  */}
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} activeClassName="active" to="/dashboard">
                            {t("header.main-menu.home")}
                        </Nav.Link>
                        {/*<Nav.Link as={NavLink} activeClassName="active" to="/network">
                            {t("header.main-menu.network")}
                        </Nav.Link>*/}
                        {this.props.view_community && (
                            <Nav.Link as={NavLink} activeClassName="active" to="/community">
                                {t("header.main-menu.community")}
                            </Nav.Link>
                        )}
                        {/*<Nav.Link as={NavLink} activeClassName="active" to="/contracts">
                            {t("header.main-menu.contracts")}
                        </Nav.Link>*/}
                    </Nav>
                    <Nav>
                        {/* Hidden because it need to implement the logic  */}
                        {/*<Nav.Item>
                            <Form inline>
                                <Form.Group className="search-global">
                                    <Form.Control type="text" placeholder="Search" />
                                </Form.Group>
                            </Form>
                        </Nav.Item>*/}
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle as="span">
                                    <i className="icon-notification"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#/notification-1">Notification 1</Dropdown.Item>
                                    <Dropdown.Item href="#/notification-2">Notification 2</Dropdown.Item>
                                    <Dropdown.Item href="#/notification-3">Notification 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle as="span">
                                    <i className="icon-more"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item href="#/notification-1">Notification 1</Dropdown.Item>
                                    <Dropdown.Item href="#/notification-2">Notification 2</Dropdown.Item>
                                    <Dropdown.Item href="#/notification-3">Notification 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item className="px-0">
                            <Link to="/personal-area/profile-settings">
                                <Image src={require("../static/img/profile.png")} roundedCircle img-fluid="true" />
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Logout />
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default withTranslation()(TopHeader);
