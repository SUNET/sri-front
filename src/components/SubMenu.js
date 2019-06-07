import React from "react";
import { withTranslation } from "react-i18next";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../style/SubMenu.scss";

class SubMenu extends React.Component {
    renderLinks = () => {
        return this.props.links.map((item, index) => {
            return (
                <Nav.Link
                    key={index}
                    as={NavLink}
                    activeClassName="active"
                    to={item.link}
                >
                    {item.label}
                </Nav.Link>
            );
        });
    };

    render() {
        return (
            <Navbar bg="light" className="sub-menu">
                <Nav className="mr-auto">{this.renderLinks()}</Nav>
                <Nav>{this.props.actions_component}</Nav>
            </Navbar>
        );
    }
}

export default withTranslation()(SubMenu);
