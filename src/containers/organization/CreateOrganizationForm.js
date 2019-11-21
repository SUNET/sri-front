import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector, registerField, isDirty } from "redux-form";
import { getContact } from "../../components/contact/Contact";
import CreateOrganizationForm from "../../components/organization/CreateOrganizationForm";
import * as actions from "../../actions/Notify";

const mapStateToProps = (state, props) => {
    const createOrganizationSelector = formValueSelector("createOrganization");
    const contactsValues = createOrganizationSelector(state, "contacts");
    return {
        fields: getFormMeta("createOrganization")(state),
        formSyncErrors: getFormSyncErrors("createOrganization")(state),
        addressesValues: createOrganizationSelector(state, "addresses"),
        contactsValues: contactsValues,
        name: createOrganizationSelector(state, "name"),
        isDirty_contacts_roles:
            contactsValues &&
            contactsValues.map((contact, index) => {
                return isDirty("createOrganization")(state, [`contacts[${index}].role`]);
            }),
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
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
    };
};

const CreateOrganizationFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateOrganizationForm);

export default CreateOrganizationFormContainer;
