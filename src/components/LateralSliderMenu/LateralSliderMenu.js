import React, { Component } from "react";
import "./LateralSliderMenu.scss";

class LateralSliderMenu extends Component {
    clickInOverLay() {
        console.log("click");
        this.props.clickInClose();
    }
    render() {
        return (
            <div className={`lateral-slider-menu ${this.props.open ? "expanded" : ""}`}>
                <div className="lateral-slider-menu__overlay" onClick={() => this.clickInOverLay()}></div>
                <div className="lateral-slider-menu__content">{this.props.children}</div>
            </div>
        );
    }
}

export default LateralSliderMenu;
