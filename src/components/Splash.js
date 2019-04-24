import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import '../style/Splash.scss';


class Splash extends Component {
    
    render() {
        const comp = this.props.is_app_loaded ? '' :
                    (<div className="splash-spinner">
                       <FontAwesomeIcon icon={faSpinner} />
                     </div>);
        return comp;
    }
}

Splash.propTypes = {
    is_app_loaded: PropTypes.bool
}

export default Splash;
