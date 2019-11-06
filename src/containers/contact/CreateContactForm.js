import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import CreateContactForm from "../../components/contact/CreateContactForm";

const mapStateToProps = (state, props) => {
    const updateContactSelector = formValueSelector("createContact");
    return {
        fields: getFormMeta("createContact")(state),
        formSyncErrors: getFormSyncErrors("createContact")(state),
        name: updateContactSelector(state, "name"),
        organizationValues: updateContactSelector(state, "organizations")
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {};
};

const CreateContactFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContactForm);

export default CreateContactFormContainer;
