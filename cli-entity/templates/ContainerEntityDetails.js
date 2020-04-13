import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import __EntityClassName__Details from "../../components/__entityName__/__EntityClassName__Details";

const mapStateToProps = (state, props) => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
    };
};

const __EntityClassName__DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(__EntityClassName__Details);

export default __EntityClassName__DetailsContainer;
