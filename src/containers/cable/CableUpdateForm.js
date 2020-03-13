import { connect } from "react-redux";
import CableUpdateForm from "../../components/cable/CableUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import * as actions from "../../actions/Notify";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateCableSelector = formValueSelector("updateCable");
    const cable = props.cable;

    const initialValues = {
        id: cable.id,
        name: cable.name,
        description: cable.description,
        url: cable.url
    };
    return {
        initialValues,
        name: updateCableSelector(state, "name"),
        description: updateCableSelector(state, "description"),
        url: updateCableSelector(state, "url"),
        formSyncErrors: getFormSyncErrors("updateCable")(state),
        fields: getFormMeta("updateCable")(state)
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

const CableUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CableUpdateForm);

export default CableUpdateFormContainer;
