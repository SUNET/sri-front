import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import ToggleSection, { ToggleHeading, TogglePanel } from "../components/ToggleSection";

import "../style/AccordionMenuOptions.scss";

class AccordionMenuOptions extends React.Component {
    renderHeader(option, index) {
        return (
            <ToggleHeading key={`${index}`}>
                <div className="accordion-menu-options__header">{option.header}</div>
            </ToggleHeading>
        );
    }
    renderCollapseList(subOptions, optionIndex) {
        return (
            <TogglePanel>
                {subOptions.map((subOption, subOpIndex) => {
                    return (
                        <div key={`option_menu-${optionIndex}-${subOpIndex}`} className="accordion-menu-options__link">
                            <Nav.Link as={NavLink} activeClassName="active" to={subOption.route}>
                                <i className={`accordion-menu-options__link__icon ${subOption.iconClass}`}></i>
                                <span className="accordion-menu-options__link__name">{subOption.name}</span>
                            </Nav.Link>
                        </div>
                    );
                })}
            </TogglePanel>
        );
    }
    render() {
        console.log(this.props.data);
        const { data } = this.props;

        return (
            <div className="accordion-menu-options">
                {data.map((option, optionIndex) => {
                    return (
                        <ToggleSection key={`option_menu-${optionIndex}`}>
                            {this.renderHeader(option, optionIndex)}
                            {this.renderCollapseList(option.subOptions, optionIndex)}
                        </ToggleSection>
                    );
                })}
            </div>
        );
    }
}

export default AccordionMenuOptions;
