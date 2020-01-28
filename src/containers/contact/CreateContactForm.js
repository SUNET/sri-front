import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as actions from "../../actions/Notify";
import CreateContactForm from "../../components/contact/CreateContactForm";

const mapStateToProps = (state, props) => {
    const updateContactSelector = formValueSelector("createContact");
    return {
        fields: getFormMeta("createContact")(state),
        formSyncErrors: getFormSyncErrors("createContact")(state),
        name: updateContactSelector(state, "name"),
        first_name: updateContactSelector(state, "first_name"),
        last_name: updateContactSelector(state, "last_name"),
        organizationValues: updateContactSelector(state, "organizations")
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        notify: (msg, level) => {
            dispatch(actions.notify(msg, level));
        }
    };
};

const CreateContactFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContactForm);

export default CreateContactFormContainer;
