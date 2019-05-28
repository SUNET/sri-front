import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import SubMenuActions from "./SubMenuActions";

import "../style/SubMenu.scss";

class SubMenu extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <Navbar bg="light" className="sub-menu">
                <Nav className="mr-auto">
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        to={`/community/contacts`}
                    >
                        {t("header.navbar.contacts")}
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        activeClassName="active"
                        to={`/community/roles`}
                    >
                        {t("header.navbar.roles")}
                    </Nav.Link>
                </Nav>

                <Nav>
                    <SubMenuActions />
                </Nav>
            </Navbar>
        );
    }
}

export default withTranslation()(SubMenu);
