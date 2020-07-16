import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import CreateProviderMutation from "../../mutations/provider/CreateProviderMutation";
import ValidationsProviderForm from "../common/_BasicValidationForm";
// const
import { CREATE_PROVIDER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateProviderForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_PROVIDER_FORM;
    ROUTE_LIST_DIRECTION = "/network/providers";
    state = {
        errors: []
    };
    handleSubmit = (provider) => {
        CreateProviderMutation(provider, this);
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
                {!isFromModal && this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreateProviderForm = reduxForm({
    validate: ValidationsProviderForm.validate,
    initialValues: {
        name: ""
    }
})(CreateProviderForm);

export default withTranslation()(CreateProviderForm);
