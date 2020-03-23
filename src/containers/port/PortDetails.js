import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import PortDetails from "../../components/port/PortDetails";

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

const PortDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PortDetails);

export default PortDetailsContainer;
