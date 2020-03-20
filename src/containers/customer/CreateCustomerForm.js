import { connect } from "react-redux";
import { getFormMeta, getFormSyncErrors, formValueSelector } from "redux-form";

import * as actions from "../../actions/Notify";
import CreateCustomerForm from "../../components/customer/CreateCustomerForm";
import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateCustomerSelector = formValueSelector("createCustomer");
    return {
        fields: getFormMeta("createCustomer")(state),
        formSyncErrors: getFormSyncErrors("createCustomer")(state),
        name: updateCustomerSelector(state, "name"),
        url: updateCustomerSelector(state, "url")
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

const CreateCustomerFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateCustomerForm);

export default CreateCustomerFormContainer;
