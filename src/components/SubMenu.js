import React from "react";
import { withTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "../style/SubMenu.scss";

function SubMenu({ t, i18n }) {
    return (
        <Nav className="flex-column">
            <Nav.Link as={Link} to="/">
                {t("header.welcome")}
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

export default withTranslation()(SubMenu);
