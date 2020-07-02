import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import CreateEndUserMutation from "../../mutations/endUser/CreateEndUserMutation";
import ValidationsEndUserForm from "../common/_BasicValidationForm";
// const
import { CREATE_ENDUSER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateEndUserForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_ENDUSER_FORM;
    ROUTE_LIST_DIRECTION = "/network/end-users";
    state = {
        errors: []
    };
    handleSubmit = (endUser) => {
        CreateEndUserMutation(endUser, this);
    };
    render() {
        const { handleSubmit, isFromModal } = this.props;
        const editMode = true;
        const showBackButton = isBrowser && !isFromModal;
        const showSaveCancelInHeader = showBackButton;
        const formId = `${this.FORM_ID}${isFromModal ? 'InModal' : ''}`;
        return (
            <form id={formId} onSubmit={handleSubmit(this.handleSubmit)}>
                {showSaveCancelInHeader && this.renderSaveCancelButtons()}
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

CreateEndUserForm = reduxForm({
    validate: ValidationsEndUserForm.validate,
    initialValues: {
        name: ""
    }
})(CreateEndUserForm);

export default withTranslation()(CreateEndUserForm);
