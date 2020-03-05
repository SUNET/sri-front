import React from "react";
import { withTranslation } from "react-i18next";
import { Col, Nav } from "react-bootstrap";
import ReactSVG from "react-svg";
import {
    Accordion,
    AccordionItem,
    AccordionItemState,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { path } from "../Routes";

import "../style/SideNav.scss";
import { NETWORK_ORGANIZATIONS, NETWORK_ORGANIZATIONS_CUSTOMERS } from "../utils/constants";

class SideNavNetwork extends React.Component {
    MENU_DATA = [
        {
            header: {
                name: NETWORK_ORGANIZATIONS,
                icon: "organization-icon.svg",
                i18nText: "community.sub-menu.organizations"
            },
            items: [{ path: "customers", i18nText: "network.sub-menu.customers" }]
        }
    ];
    matchUrl = () => {
        if (this.props.location.pathname.includes("physical")) {
            return "physical";
        } else if (this.props.location.pathname.includes("logical")) {
            return "logical";
        } else if (this.props.location.pathname.includes("locations")) {
            return "locations";
        }
    };

    renderAccordionItem(idPath, icon, i18nText, items) {
        const { t, match } = this.props;
        return (
            <AccordionItem uuid={idPath}>
                <AccordionItemState>
                    {({ expanded }) => (
                        <>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion__button with-arrow">
                                    <ReactSVG src={require(`../static/img/${icon}`)} wrapper="span" />
                                    {t(i18nText)}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <Nav className="flex-column">
                                    {items.map((item) => {
                                        console.log("item: ", item);

                                        return (
                                            <Nav.Link
                                                as={NavLink}
                                                activeClassName="active"
                                                to={`${path(this.props.match.url)}/${item.path}`}
                                            >
                                                {t(item.i18nText)}
                                            </Nav.Link>
                                        );
                                    })}
                                </Nav>
                            </AccordionItemPanel>
                        </>
                    )}
                </AccordionItemState>
            </AccordionItem>
        );
    }

    render() {
        return (
            <Col sm={2} className="pl-0">
                <Nav className="flex-column side-nav">
                    <Accordion preExpanded={[this.matchUrl()]} allowZeroExpanded className="accordion">
                        {this.MENU_DATA.map((data) => {
                            const { header, items } = data;
                            return this.renderAccordionItem(header.name, header.icon, header.i18nText, items);
                        })}
                    </Accordion>
                </Nav>
            </Col>
        );
    }
}

export default withTranslation()(withRouter(SideNavNetwork));
