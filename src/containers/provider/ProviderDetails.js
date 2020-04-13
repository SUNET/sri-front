import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import ProviderDetails from "../../components/provider/ProviderDetails";

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

const ProviderDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderDetails);

export default ProviderDetailsContainer;
