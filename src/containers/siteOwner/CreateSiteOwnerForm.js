import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as actions from "../../actions/Notify";
import CreateSiteOwnerForm from "../../components/siteOwner/CreateSiteOwnerForm";
import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateSiteOwnerSelector = formValueSelector("createSiteOwner");
    return {
        fields: getFormMeta("createSiteOwner")(state),
        formSyncErrors: getFormSyncErrors("createSiteOwner")(state),
        name: updateSiteOwnerSelector(state, "name"),
        url: updateSiteOwnerSelector(state, "url")
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

const CreateSiteOwnerFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateSiteOwnerForm);

export default CreateSiteOwnerFormContainer;
