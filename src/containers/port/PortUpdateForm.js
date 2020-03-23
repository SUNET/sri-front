import { connect } from "react-redux";
import PortUpdateForm from "../../components/port/PortUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import * as actions from "../../actions/Notify";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updatePortSelector = formValueSelector("updatePort");
    const port = props.port;

    const initialValues = {
        id: port.id,
        name: port.name,
        description: port.description
    };
    return {
        initialValues,
        name: updatePortSelector(state, "name"),
        description: updatePortSelector(state, "description"),
        formSyncErrors: getFormSyncErrors("updatePort")(state),
        fields: getFormMeta("updatePort")(state)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
        // ,showNewContactForm
    };
};

const PortUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PortUpdateForm);

export default PortUpdateFormContainer;