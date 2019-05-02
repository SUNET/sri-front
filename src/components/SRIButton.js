import React, { Component } from 'react';

import { Button } from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import FetchingContext from "../components/FetchingContext";

import '../style/SRIButton.scss';


class SRIButton extends Component {

  render () {
    return (
        <FetchingContext.Consumer>
            {({fetching, toggleFetching}) => {
                if (fetching) {
                    let classes = " sri-button has-spinner";
                    if (this.props.className !== undefined) {
                        classes = this.props.className + classes;
                    }
                    return (
                      <Button {...this.props}
                              disabled={true}
                              className={classes}>
                          {this.props.children}
                        <div className="spin-holder">
                          <FontAwesomeIcon icon={faSpinner} />
                        </div>
                      </Button>
                    );
                } else {
                    let classes = " sri-button";
                    if (this.props.className !== undefined) {
                        classes = this.props.className + classes;
                    }
                    return (
                      <Button {...this.props}
                              className={classes}>
                        {this.props.children}
                      </Button>
                    );
                }
            }}
        </FetchingContext.Consumer>
    );
  }
}

SRIButton.propTypes = {
}

export default SRIButton;
