import React, { Component } from 'react';
import '../style/LateralSliderMenu.scss';

class LateralSliderMenu extends Component {
  clickInOverLay() {
    this.props.clickInClose();
  }

  renderContentHeader() {
    return (
      <div className="lateral-slider-menu__content__header">
        <div className="lateral-slider-menu__content__header__icon">
          <i className={this.props.header.iconClass}></i>
        </div>
        <div className="lateral-slider-menu__content__header__text">{this.props.header.text}</div>
        <div
          className="lateral-slider-menu__content__header__close row-cross-remove-cta"
          onClick={() => this.props.clickInClose()}
        ></div>
      </div>
    );
  }
  renderContentChild() {
    return <div className="lateral-slider-menu__content__child">{this.props.children}</div>;
  }

  renderContentFooter() {
    return (
      <div className="lateral-slider-menu__content__footer">
        {this.props.footer.cancel && (
          <div className="lateral-slider-menu__content__footer__cancel" onClick={this.props.footer.cancel.onClick}>
            <button type="button" className="btn link">
              {this.props.footer.cancel.text}
            </button>
          </div>
        )}
        {this.props.footer.accept && (
          <div
            className="lateral-slider-menu__content__footer__accept"
            onClick={() => this.props.footer.accept.onClick()}
          >
            <button type="button" className="btn outline outline--solid">
              {this.props.footer.accept.text}
            </button>
          </div>
        )}
      </div>
    );
  }
  renderOverlay() {
    return <div className="lateral-slider-menu__overlay" onClick={() => this.clickInOverLay()}></div>;
  }
  render() {
    return (
      <div className={`lateral-slider-menu ${this.props.open ? 'expanded' : ''}`}>
        {this.renderOverlay()}
        <div className="lateral-slider-menu__content">
          {this.renderContentHeader()}
          {this.renderContentChild()}
          {this.renderContentFooter()}
        </div>
      </div>
    );
  }
}

export default LateralSliderMenu;
