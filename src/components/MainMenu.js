import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "../style/MainMenu.scss";

function MainMenu({ t, i18n }) {
    return (
        <Nav className="flex-column" id="main-menu">
            <Nav.Link as={Link} to="/personal-area/profile">
                <Image src={require("../img/profile.png")} roundedCircle img-fluid="true"/>
            </Nav.Link>
            <Nav className="flex-column">
                <Nav.Link as={NavLink} activeClassName="active" to="/">
                    {t("header.main-menu.home")}
                </Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/network">
                    {t("header.main-menu.network")}
                </Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/services">
                    {t("header.main-menu.services")}
                </Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/community">
                    {t("header.main-menu.community")}
                </Nav.Link>
            </Nav>
        </Nav>
    );
}

export default withTranslation()(MainMenu);
