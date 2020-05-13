import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import CreateCustomerMutation from "../../mutations/customer/CreateCustomerMutation";
import ValidationsCustomerForm from "../common/_BasicValidationForm";
// const
import { CREATE_CUSTOMER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateCustomerForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_CUSTOMER_FORM;
    ROUTE_LIST_DIRECTION = "/network/customers";
    state = {
        errors: []
    };
    handleSubmit = (customer) => {
        CreateCustomerMutation(customer, this);
    };
    render() {
        const { handleSubmit } = this.props;
        const editMode = true;
        const showBackButton = isBrowser;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                <div className="model-details create-contact-form">
                    {this.renderHeader(editMode, showBackButton)}
                    {this.renderModelMainSection(editMode)}
                    {this.renderWorkLog(editMode)}
                </div>
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreateCustomerForm = reduxForm({
    form: "createCustomer",
    validate: ValidationsCustomerForm.validate,
    initialValues: {
        name: ""
    }
})(CreateCustomerForm);

export default withTranslation()(withRouter(CreateCustomerForm));
