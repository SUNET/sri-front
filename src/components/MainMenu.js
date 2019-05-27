import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "../style/MainMenu.scss";

function MainMenu({ t, i18n }) {
    return (
        <Nav className="flex-column" id="main-menu">
            <Nav.Link as={Link} to="/">
                <Image src={require("../img/profile.png")} roundedCircle img-fluid="true"/>
            </Nav.Link>
            <Nav className="flex-column mr-auto">
                <Nav.Link as={NavLink} activeClassName="active" to="/contacts">
                    {t("header.navbar.contacts")}
                </Nav.Link>
                <Nav.Link as={NavLink} activeClassName="active" to="/roles">
                    {t("header.navbar.roles")}
                </Nav.Link>
            </Nav>
        </Nav>
    );
}

export default withTranslation()(MainMenu);
