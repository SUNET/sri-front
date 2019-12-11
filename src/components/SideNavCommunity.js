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

import {
    COMMUNITY_ORGANIZATIONS,
    COMMUNITY_CONTACTS,
    COMMUNITY_GROUPS
} from '../utils/constants';

import "../style/SideNav.scss";

class SideNavCommunity extends React.Component {
    //Get the section by the url to expand the side menu
    matchUrl = () => {
        let tabUuid = COMMUNITY_ORGANIZATIONS;
        if (this.props.location.pathname.includes(COMMUNITY_CONTACTS)) {
            tabUuid = COMMUNITY_CONTACTS;
        } else if (this.props.location.pathname.includes(COMMUNITY_GROUPS)) {
            tabUuid = COMMUNITY_GROUPS;
        }
        return tabUuid;
    };

    render() {
        const { t } = this.props;
        return (
            <Col sm={2} className="pl-0">
                <Nav className="flex-column side-nav">
                    <Accordion preExpanded={[this.matchUrl()]}>
                        <AccordionItem uuid={COMMUNITY_ORGANIZATIONS}>
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/${COMMUNITY_ORGANIZATIONS}`}>
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
                        <AccordionItem uuid={COMMUNITY_CONTACTS}>
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/${COMMUNITY_CONTACTS}`}>
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
                        <AccordionItem uuid={COMMUNITY_GROUPS}>
                            <AccordionItemState>
                                {({ expanded }) => (
                                    <NavLink to={`${path(this.props.match.url)}/${COMMUNITY_GROUPS}`}>
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
