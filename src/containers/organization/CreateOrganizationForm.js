import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import CreateOrganizationForm from "../../components/organization/CreateOrganizationForm";

const mapStateToProps = (state, props) => {
    const createOrganizationSelector = formValueSelector("createOrganization");
    return {
        fields: getFormMeta("createOrganization")(state),
        formSyncErrors: getFormSyncErrors("createOrganization")(state),
        addressesValues: createOrganizationSelector(state, "addresses"),
        contactsValues: createOrganizationSelector(state, "contacts"),
        name: createOrganizationSelector(state, "name"),
        refreshFields: state.refreshFields
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const CreateOrganizationFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrganizationForm);

export default CreateOrganizationFormContainer;
