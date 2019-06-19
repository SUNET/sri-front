import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Navbar, Image } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import "../style/TopHeader.scss";

class TopHeader extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <header>
                <Navbar id="top-header">
                    <Navbar.Brand as={Link} to="/">
                        {t("header.welcome")}
                    </Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} activeClassName="active" to="/">
                            {t("header.main-menu.home")}
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/network"
                        >
                            {t("header.main-menu.network")}
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/services"
                        >
                            {t("header.main-menu.services")}
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            activeClassName="active"
                            to="/community"
                        >
                            {t("header.main-menu.community")}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <FontAwesomeIcon icon={faBell} />
                        </Nav.Item>
                        <Nav.Item>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/personal-area/profile">
                                <Image
                                    src={require("../img/profile.png")}
                                    roundedCircle
                                    img-fluid="true"
                                />
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default withTranslation()(TopHeader);
