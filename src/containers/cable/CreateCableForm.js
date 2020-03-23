import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as actions from "../../actions/Notify";
import CreateCableForm from "../../components/cable/CreateCableForm";
import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateCableSelector = formValueSelector("createCable");
    return {
        fields: getFormMeta("createCable")(state),
        formSyncErrors: getFormSyncErrors("createCable")(state),
        name: updateCableSelector(state, "name")
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        },
        showNewContactForm
    };
};

const CreateCableFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCableForm);

export default CreateCableFormContainer;
