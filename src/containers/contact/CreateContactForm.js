import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as notifyActions from "../../actions/Notify";
import * as createContactFormModalActions from "../../actions/ComponentFormRow";
import CreateContactForm from "../../components/contact/CreateContactForm";

const mapStateToProps = (state, props) => {
    const updateContactSelector = formValueSelector("createContact");
    return {
        fields: getFormMeta("createContact")(state),
        formSyncErrors: getFormSyncErrors("createContact")(state),
        name: updateContactSelector(state, "name"),
        first_name: updateContactSelector(state, "first_name"),
        last_name: updateContactSelector(state, "last_name"),
        organizationValues: updateContactSelector(state, "organizations"),
        shown_in_modal: state.componentFormRow.show_contact_form
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(notifyActions.notify(msg, level));
        },
        hideContactModal: () => dispatch(createContactFormModalActions.hideNewContactForm(props.index))
    };
};

const CreateContactFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContactForm);

export default CreateContactFormContainer;
