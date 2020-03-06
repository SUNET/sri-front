import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
    renderSubOptions(subOption) {
        return (
            <>
                <i className={`accordion-menu-options__link__icon ${subOption.iconClass}`}></i>
                <span className="accordion-menu-options__link__name">{subOption.name}</span>
            </>
        );
    }
    renderNavOption(optionIndex, subOption, subOpIndex) {
        return (
            <div key={`option_menu-${optionIndex}-${subOpIndex}`} className="accordion-menu-options__link">
                <Nav.Link
                    as={NavLink}
                    activeClassName="active"
                    to={subOption.route}
                    onClick={() => this.props.onSelectedOption()}
                >
                    {this.renderSubOptions(subOption)}
                </Nav.Link>
            </div>
        );
    }

    renderWithSubOptions(optionIndex, option, subOpIndex) {
        return (
            <ToggleSection
                extraClassNames="accordion-menu-options--multiple-subs"
                key={`option_menu-${optionIndex}-${subOpIndex}`}
            >
                <ToggleHeading isLikeOption extraClassNames="accordion-menu-options">
                    <div className="accordion-menu-options__link">
                        <div className="--fake-link">
                            <i className={`accordion-menu-options__link__icon ${option.iconClass}`}></i>
                            <span className="accordion-menu-options__link__name">{option.name}</span>
                        </div>
                    </div>
                </ToggleHeading>
                <TogglePanel>
                    {option.subSubOptions.map((subOption, subOpIndex) => {
                        return this.renderNavOption(optionIndex, subOption, subOpIndex);
                    })}
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderCollapseList(subOptions, optionIndex) {
        return (
            <TogglePanel>
                {subOptions.map((subOption, subOpIndex) => {
                    const hasMoreSubOptions = subOption.subSubOptions && subOption.subSubOptions.length > 0;
                    if (hasMoreSubOptions) {
                        return this.renderWithSubOptions(optionIndex, subOption, subOpIndex);
                    } else {
                        return this.renderNavOption(optionIndex, subOption, subOpIndex);
                    }
                })}
            </TogglePanel>
        );
    }
    render() {
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
