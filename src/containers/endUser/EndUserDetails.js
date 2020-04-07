import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import EndUserDetails from "../../components/endUser/EndUserDetails";

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

const EndUserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserDetails);

export default EndUserDetailsContainer;
