import React from "react";
import { withTranslation } from "react-i18next";
import { Col, Nav } from "react-bootstrap";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../style/SideNav.scss";

class SideNavCommunity extends React.Component {
    matchUrl = () => {
        if (this.props.location.pathname.includes("organizations")) {
            return "organizations";
        } else if (this.props.location.pathname.includes("contacts")) {
            return "contacts";
        } else if (this.props.location.pathname.includes("groups")) {
            return "groups";
        }
    };

    render() {
        const { t } = this.props;
        return (
            <Col sm={2}>
                <Nav className="flex-column side-nav">
                    <Accordion preExpanded={[this.matchUrl()]}>
                        <AccordionItem uuid="organizations">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <NavLink to={`${this.props.match.url}/organizations`}>
                                        {t("community.sub-menu.organizations")}
                                    </NavLink>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem uuid="contacts">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <NavLink to={`${this.props.match.url}/contacts`}>
                                        {t("community.sub-menu.contacts")}
                                    </NavLink>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                        <AccordionItem uuid="groups">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <NavLink to={`${this.props.match.url}/groups`}>
                                        {t("community.sub-menu.groups")}
                                    </NavLink>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </AccordionItem>
                    </Accordion>
                </Nav>
            </Col>
        );
    }
}

export default withTranslation()(withRouter(SideNavCommunity));
