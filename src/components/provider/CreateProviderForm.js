import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
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

CreateProviderForm = reduxForm({
    form: "createProvider",
    validate: ValidationsProviderForm.validate,
    initialValues: {
        name: ""
    }
})(CreateProviderForm);

export default withTranslation()(withRouter(CreateProviderForm));
