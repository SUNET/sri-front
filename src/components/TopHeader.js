import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Navbar, Image, Form, Dropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { slide as BurgerMenu } from "react-burger-menu";
import Logout from "./Logout";
import AccordionMenuOptions from "./AccordionMenuOptions";
import { BrowserView, MobileView } from "react-device-detect";

import "../style/TopHeader.scss";

class TopHeader extends React.Component {
    state = {
        isMenuOpen: true
    };
    closeMenu() {
        this.setState({ isMenuOpen: false });
    }
    renderBrand() {
        return (
            <Navbar.Brand as={Link} to="/">
                <Image src={require("../static/img/logo.svg")} img-fluid="true" />
            </Navbar.Brand>
        );
    }
    renderHeaderTopMenu() {
        const { t } = this.props;
        return (
            <Nav className="mx-auto">
                <Nav.Link as={NavLink} activeClassName="active" to="/dashboard">
                    {t("header.main-menu.home")}
                </Nav.Link>
                {this.props.view_community && (
                    <Nav.Link as={NavLink} activeClassName="active" to="/community">
                        {t("header.main-menu.community")}
                    </Nav.Link>
                )}
                {this.props.view_network && (
                    <Nav.Link as={NavLink} activeClassName="active" to="/network">
                        {t("header.main-menu.network")}
                    </Nav.Link>
                )}
                {/* <Nav.Link as={NavLink} activeClassName="active" to="/contracts">
                    {t("header.main-menu.contracts")}
                </Nav.Link> */}
            </Nav>
        );
    }

    renderSearchItem() {
        return (
            <Nav.Item>
                <Form inline>
                    <Form.Group className="search-global">
                        <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                </Form>
            </Nav.Item>
        );
    }
    renderNotificationsItem() {
        return (
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
        );
    }

    renderMoreItem() {
        return (
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
        );
    }

    renderLogoutItem() {
        return (
            <Nav.Item>
                <Logout />
            </Nav.Item>
        );
    }

    renderProfileSettingsItem() {
        return (
            <Nav.Item className="px-0">
                <Link to="/personal-area/profile-settings">
                    <Image
                        src={require("../static/img/profile.png")}
                        roundedCircle
                        img-fluid="true"
                        onClick={() => this.closeMenu()}
                    />
                </Link>
            </Nav.Item>
        );
    }

    renderMobileMenu() {
        return (
            <Navbar className="top-header">
                {this.renderBrand()}
                {/* {this.renderSearchItem()} */}
            </Navbar>
        );
    }

    renderMobileNavigator() {
        const { t } = this.props;

        const toggleMenuData = [
            {
                header: t("header.main-menu.community"),
                subOptions: [
                    {
                        name: t(`community.sub-menu.organizations`),
                        route: "/community/organizations",
                        iconClass: "icon-organization"
                    },
                    { name: t(`community.sub-menu.contacts`), route: "/community/contacts", iconClass: "icon-contact" },
                    { name: t(`community.sub-menu.groups`), route: "/community/groups", iconClass: "icon-groups" }
                ]
            },
            {
                header: t("header.main-menu.network"),
                subOptions: [
                    {
                        name: "Organizations",
                        route: "/network/customers",
                        iconClass: "icon-organization",
                        subSubOptions: [
                            { name: t("network.sub-menu.organizations/customers"), route: "/network/customers" },
                            { name: t("network.sub-menu.organizations/end-users"), route: "/network/end-users" },
                            { name: t("network.sub-menu.organizations/providers"), route: "/network/providers" },
                            { name: t("network.sub-menu.organizations/site-owners"), route: "/network/site-owners" }
                        ]
                    },
                    {
                        name: "Equipment & Cables",
                        route: "/network/cables",
                        iconClass: "icon-organization",
                        subSubOptions: [
                            { name: "Cables", route: "/network/cables" }
                            // { name: "Hosts", route: "/network/customers" },
                            // { name: "Firewalls", route: "/network/customers" },
                            // { name: "Routers", route: "/network/customers" },
                            // { name: "Switches", route: "/network/customers" },
                            // { name: "External equipment", route: "/network/customers" },
                            // { name: "Optical nodes", route: "/network/customers" },
                            // { name: "ODFs", route: "/network/customers" }
                        ]
                    }
                ]
            }
        ];

        return (
            <AccordionMenuOptions
                data={toggleMenuData}
                onSelectedOption={() => this.closeMenu()}
            ></AccordionMenuOptions>
        );
    }

    renderPanelInside() {
        return (
            <main id="page-wrap">
                <Navbar className="top-header">
                    <Nav>
                        {this.renderProfileSettingsItem()}
                        {/* {this.renderNotificationsItem()} */}
                        {/* {this.renderMoreItem()} */}
                        {this.renderLogoutItem()}
                    </Nav>
                </Navbar>
                {this.renderMobileNavigator()}
            </main>
        );
    }

    renderMobileLateralPanelMenu() {
        return (
            <BurgerMenu
                right
                disableAutoFocus
                disableOverlayClick={() => this.closeMenu()}
                customCrossIcon={<div className="row-remove-cta"></div>}
                isOpen={this.state.isMenuOpen}
                onStateChange={(newState) => {
                    this.setState({ isMenuOpen: newState.isOpen });
                }}
                outerContainerId={"outer-container"}
                pageWrapId={"page-wrap"}
            >
                {this.renderPanelInside()}
            </BurgerMenu>
        );
    }

    renderMobileHeader() {
        return (
            <header id="outer-container">
                <Navbar>
                    {this.renderMobileMenu()}
                    {/* {this.renderDesktopHeader()} */}
                    {/* <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__brand">{this.renderBrand()}</Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__menu desktop-only">{this.renderHeaderTopMenu()}</Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__right-block desktop-only">
                          {this.renderSearch()}
                          {this.renderNotifications()}
                          {this.renderMore()}
                          {this.renderProfileSettings()}
                          {this.renderLogout()}
                      </Nav>
                  </Navbar>
                  <Navbar className="top-header__nav">
                      <Nav className="top-header__nav__burger-button mobile-tablet-only">
                          <BurgerButton></BurgerButton>
                      </Nav>
                  </Navbar> */}
                </Navbar>
                {this.renderMobileLateralPanelMenu()}
            </header>
        );
    }

    renderDesktopHeader() {
        return (
            <Navbar className="top-header">
                {this.renderBrand()}
                {this.renderHeaderTopMenu()}
                <Nav>
                    {/* {this.renderSearchItem()} */}
                    {/* {this.renderNotificationsItem()} */}
                    {/* {this.renderMoreItem()} */}
                    {this.renderProfileSettingsItem()}
                    {this.renderLogoutItem()}
                </Nav>
            </Navbar>
        );
    }

    render() {
        return (
            <div>
                <MobileView>{this.renderMobileHeader()}</MobileView>
                <BrowserView>{this.renderDesktopHeader()}</BrowserView>
            </div>
        );
    }
}

export default withTranslation()(TopHeader);
