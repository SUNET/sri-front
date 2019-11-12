import React from "react";
import { withTranslation } from "react-i18next";
import { Col, Nav } from "react-bootstrap";
import ReactSVG from "react-svg";
import {
    Accordion,
    AccordionItemState,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { path } from "../Routes";

import "../style/SideNav.scss";

class SideNavCommunity extends React.Component {
    //Get the section by the url to expand the side menu
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
            <Col sm={2} className="pl-0">
                <Nav className="flex-column side-nav">
                    <Accordion preExpanded={[this.matchUrl()]}>
                        <AccordionItem uuid="organizations">
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/organizations`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <ReactSVG
                                                    src={require("../static/img/organization-icon.svg")}
                                                    wrapper="span"
                                                />
                                                {t("community.sub-menu.organizations")}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </NavLink>
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                        <AccordionItem uuid="contacts">
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/contacts`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <ReactSVG
                                                    src={require("../static/img/contact-icon.svg")}
                                                    wrapper="span"
                                                />
                                                {t("community.sub-menu.contacts")}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </NavLink>
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                        <AccordionItem uuid="groups">
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/groups`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <ReactSVG
                                                    src={require("../static/img/groups-icon.svg")}
                                                    wrapper="span"
                                                />
                                                {t("community.sub-menu.groups")}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                    </NavLink>
                                )}
                            </AccordionItemState>
                        </AccordionItem>
                    </Accordion>
                </Nav>
            </Col>
        );
    }
}

export default withTranslation()(withRouter(SideNavCommunity));
