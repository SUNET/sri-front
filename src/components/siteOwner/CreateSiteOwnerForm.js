import _BasicFormParentClass from "../common/_BasicFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { reduxForm } from "redux-form";
import CreateSiteOwnerMutation from "../../mutations/siteOwner/CreateSiteOwnerMutation";
import ValidationsSiteOwnerForm from "../common/_BasicValidationForm";
// const
import { CREATE_SITEOWNER_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateSiteOwnerForm extends _BasicFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_SITEOWNER_FORM;
    ROUTE_LIST_DIRECTION = "/network/site-owners";
    state = {
        errors: []
    };
    handleSubmit = (siteOwner) => {
        CreateSiteOwnerMutation(siteOwner, this);
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

CreateSiteOwnerForm = reduxForm({
    form: "createSiteOwner",
    validate: ValidationsSiteOwnerForm.validate,
    initialValues: {
        name: ""
    }
})(CreateSiteOwnerForm);

export default withTranslation()(withRouter(CreateSiteOwnerForm));
