import React from "react";
import { withTranslation } from "react-i18next";
import { Nav } from "react-bootstrap";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "../style/SideNav.scss";

class SideNavNetwork extends React.Component {
    matchUrl = () => {
        if (this.props.location.pathname.includes("physical")) {
            return "physical";
        } else if (this.props.location.pathname.includes("logical")) {
            return "logical";
        } else if (this.props.location.pathname.includes("locations")) {
            return "locations";
        }
    };

    render() {
        const { t } = this.props;
        return (
            <Nav className="flex-column side-nav">
                <Accordion preExpanded={[this.matchUrl()]}>
                    <AccordionItem uuid="physical">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <NavLink to={`${this.props.match.url}/physical`}>
                                    {t("network.sub-menu.physical")}
                                </NavLink>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Nav className="flex-column">
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/cables`}
                                >
                                    {t("network.sub-menu.physical.cables")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/external-equipment`}
                                >
                                    {t("network.sub-menu.physical.external-equipment")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/firewalls`}
                                >
                                    {t("network.sub-menu.physical.firewalls")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/hosts`}
                                >
                                    {t("network.sub-menu.physical.hosts")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/odfs`}
                                >
                                    {t("network.sub-menu.physical.odfs")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/optical-nodes`}
                                >
                                    {t("network.sub-menu.physical.optical-nodes")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/physical/routers`}
                                >
                                    {t("network.sub-menu.physical.routers")}
                                </Nav.Link>
                            </Nav>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="logical">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <NavLink to={`${this.props.match.url}/logical`}>
                                    {t("network.sub-menu.logical")}
                                </NavLink>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Nav className="flex-column">
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/logical/hosts`}
                                >
                                    {t("network.sub-menu.logical.hosts")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/logical/optical-links`}
                                >
                                    {t("network.sub-menu.logical.optical-links")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/logical/optical-multiplex`}
                                >
                                    {t("network.sub-menu.logical.optical-multiplex")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/logical/optical-paths`}
                                >
                                    {t("network.sub-menu.logical.optical-paths")}
                                </Nav.Link>
                            </Nav>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem uuid="locations">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <NavLink to={`${this.props.match.url}/locations`}>
                                    {t("network.sub-menu.locations")}
                                </NavLink>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <Nav className="flex-column">
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/locations/racks`}
                                >
                                    {t("network.sub-menu.locations.racks")}
                                </Nav.Link>
                                <Nav.Link
                                    as={NavLink}
                                    activeClassName="active"
                                    to={`${this.props.match.url}/locations/sites`}
                                >
                                    {t("network.sub-menu.locations.sites")}
                                </Nav.Link>
                            </Nav>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </Nav>
        );
    }
}

export default withTranslation()(withRouter(SideNavNetwork));
