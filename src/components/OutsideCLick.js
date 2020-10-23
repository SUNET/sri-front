import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
class OutsideClick extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    callback: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.callback();
    }
  };

  render() {
    return <span ref={this.setWrapperRef}>{this.props.children}</span>;
  }
}

export default OutsideClick;
