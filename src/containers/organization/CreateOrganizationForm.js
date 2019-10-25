import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector, registerField } from "redux-form";
import { getContact } from "../../components/contact/Contact";
import CreateOrganizationForm from "../../components/organization/CreateOrganizationForm";

const mapStateToProps = (state, props) => {
    const createOrganizationSelector = formValueSelector("createOrganization");
    return {
        fields: getFormMeta("createOrganization")(state),
        formSyncErrors: getFormSyncErrors("createOrganization")(state),
        addressesValues: createOrganizationSelector(state, "addresses"),
        contactsValues: createOrganizationSelector(state, "contacts"),
        name: createOrganizationSelector(state, "name"),
        refreshFields: state.refreshFields,
        affiliation: {
            customer: createOrganizationSelector(state, "affiliation_customer"),
            end_customer: createOrganizationSelector(state, "affiliation_end_customer"),
            host_user: createOrganizationSelector(state, "affiliation_host_user"),
            partner: createOrganizationSelector(state, "affiliation_partner"),
            provider: createOrganizationSelector(state, "affiliation_provider"),
            site_owner: createOrganizationSelector(state, "affiliation_site_owner")
        },
        getContact: (handle_id) => getContact(handle_id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    dispatch(registerField("createOrganization", "affiliation", "Field"));
    return {};
};

const CreateOrganizationFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrganizationForm);

export default CreateOrganizationFormContainer;
