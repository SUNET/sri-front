import { connect } from "react-redux";
import * as actions from "../../actions/Notify";

import ContactDetails from "../../components/contact/ContactDetails";

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

const ContactDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactDetails);

export default ContactDetailsContainer;
