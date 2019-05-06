import React from "react";
import { withTranslation } from "react-i18next";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "../style/Header.scss";

function Header({ t, i18n }) {
    return (
        <header>
            <Container>
                <Navbar collapseOnSelect expand="lg" className="pt-2 py-0 px-0">
                    <Navbar.Brand as={Link} to="/">
                        {t("header.welcome")}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link
                                as={NavLink}
                                activeClassName="active"
                                to="/contacts"
                            >
                                {t("header.navbar.contacts")}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                activeClassName="active"
                                to="/roles"
                            >
                                {t("header.navbar.roles")}
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default withTranslation()(Header);
