import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import GroupDetails from "../../components/group/GroupDetails";

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

const GroupDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupDetails);

export default GroupDetailsContainer;
