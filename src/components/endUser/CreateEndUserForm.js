import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import CreateEndUserMutation from "../../mutations/endUser/CreateEndUserMutation";
import ValidationsEndUserForm from "../common/_BasicValidationForm";
// const
import { CREATE_ENDUSER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateEndUserForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_ENDUSER_FORM;
    state = {
        errors: []
    };
    handleSubmit = (endUser) => {
        CreateEndUserMutation(endUser, this);
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

CreateEndUserForm = reduxForm({
    form: "createEndUser",
    validate: ValidationsEndUserForm.validate,
    initialValues: {
        name: ""
    }
})(CreateEndUserForm);

export default withTranslation()(withRouter(CreateEndUserForm));
