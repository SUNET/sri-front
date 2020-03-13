import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import CableDetails from "../../components/cable/CableDetails";

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

const CableDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(CableDetails);

export default CableDetailsContainer;
