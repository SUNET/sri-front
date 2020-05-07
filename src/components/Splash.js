import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import '../style/Splash.scss';

const Splash = ({ is_app_loaded }) => (
  <>
    {!is_app_loaded && (
      <div id="splash-spinner">
        <FontAwesomeIcon icon={faSpinner} className="fa-pulse fa-6x fa-fw" />
      </div>
    )}
  </>
);

Splash.defaultProps = {
  is_app_loaded: false,
};

Splash.propTypes = {
  is_app_loaded: PropTypes.bool,
};

export default Splash;
