import { connect } from 'react-redux';
import Splash from '../components/Splash';


const mapStateToProps = (state, props) => {
    return {
        is_app_loaded: state.app.is_app_loaded
    }
};

const SplashContainer = connect(
    mapStateToProps
)(Splash);

export default SplashContainer;
