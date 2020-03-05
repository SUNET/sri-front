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

import { COMMUNITY_ORGANIZATIONS, COMMUNITY_CONTACTS, COMMUNITY_GROUPS } from "../utils/constants";

import "../style/SideNav.scss";

class SideNavCommunity extends React.Component {
    //Get the section by the url to expand the side menu

    // TODO: change Accordion for a specific navbar handler
    matchUrl = () => {
        let tabUuid = COMMUNITY_ORGANIZATIONS;
        if (this.props.location.pathname.includes(COMMUNITY_CONTACTS)) {
            tabUuid = COMMUNITY_CONTACTS;
        } else if (this.props.location.pathname.includes(COMMUNITY_GROUPS)) {
            tabUuid = COMMUNITY_GROUPS;
        }
        return tabUuid;
    };

    renderAccordionItem(idPath, icon, text) {
        const { t, match } = this.props;
        return (
            <AccordionItem uuid={idPath}>
                <AccordionItemState>
                    {({ expanded }) => (
                        <NavLink to={`${path(match.url)}/${idPath}`}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <ReactSVG src={require(`../static/img/${icon}`)} wrapper="span" />
                                    {text}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                        </NavLink>
                    )}
                </AccordionItemState>
            </AccordionItem>
        );
    }

    render() {
        const { t } = this.props;
        return (
            <Col sm={2} className="pl-0">
                <Nav className="flex-column side-nav">
                    <Accordion preExpanded={[this.matchUrl()]}>
                        {this.renderAccordionItem(
                            COMMUNITY_ORGANIZATIONS,
                            "organization-icon.svg",
                            t(`community.sub-menu.organizations`)
                        )}
                        {this.renderAccordionItem(
                            COMMUNITY_CONTACTS,
                            "contact-icon.svg",
                            t(`community.sub-menu.contacts`)
                        )}
                        {this.renderAccordionItem(COMMUNITY_GROUPS, "groups-icon.svg", t(`community.sub-menu.groups`))}
                    </Accordion>
                </Nav>
            </Col>
        );
    }
}

export default withTranslation()(withRouter(SideNavCommunity));
