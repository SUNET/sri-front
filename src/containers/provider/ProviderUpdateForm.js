import { connect } from "react-redux";
import ProviderUpdateForm from "../../components/provider/ProviderUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import * as actions from "../../actions/Notify";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateProviderSelector = formValueSelector("updateProvider");
    const provider = props.provider;

    const initialValues = {
        id: provider.id,
        name: provider.name,
        description: provider.description,
        url: provider.url
    };
    return {
        initialValues,
        name: updateProviderSelector(state, "name"),
        description: updateProviderSelector(state, "description"),
        url: updateProviderSelector(state, "url"),
        formSyncErrors: getFormSyncErrors("updateProvider")(state),
        fields: getFormMeta("updateProvider")(state)
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

const ProviderUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderUpdateForm);

export default ProviderUpdateFormContainer;
