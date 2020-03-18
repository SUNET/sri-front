import { connect } from "react-redux";
import CableUpdateForm from "../../components/cable/CableUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import * as actions from "../../actions/Notify";
import { getProvider } from "../../components/provider/Provider";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateCableSelector = formValueSelector("updateCable");
    const cable = props.cable;
    const initialValues = {
        id: cable.id,
        name: cable.name,
        description: cable.description,
        cable_type: cable.cable_type
    };
    return {
        initialValues,
        name: updateCableSelector(state, "name"),
        description: updateCableSelector(state, "description"),
        cable_type: updateCableSelector(state, "cable_type"),
        formSyncErrors: getFormSyncErrors("updateCable")(state),
        fields: getFormMeta("updateCable")(state),
        getProvider: (id) => getProvider(id)
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
