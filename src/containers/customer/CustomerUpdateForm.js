import { connect } from "react-redux";
import CustomerUpdateForm from "../../components/customer/CustomerUpdateForm";
import { formValueSelector, getFormMeta, getFormSyncErrors } from "redux-form";
import uuidv4 from "uuid/v4";
import * as actions from "../../actions/Notify";
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
    const updateCustomerSelector = formValueSelector("updateCustomer");
    const customer = props.customer;
    const initialValues = {
        id: customer.id,
        name: customer.name,
        description: customer.description,
        url: customer.url
    };
    return {
        initialValues,
        name: updateCustomerSelector(state, "name"),
        description: updateCustomerSelector(state, "description"),
        url: updateCustomerSelector(state, "url"),
        formSyncErrors: getFormSyncErrors("updateCustomer")(state),
        fields: getFormMeta("updateCustomer")(state)
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

const CustomerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerUpdateForm);

export default CustomerUpdateFormContainer;
