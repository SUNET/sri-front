import _OrganizationFormParentClass from "./_OrganizationFormParentClass";
// Common imports
import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import CreateOrganizationMutation from "../../mutations/organization/CreateOrganizationMutation";
import ValidationsOrganizationForm from "./ValidationOrganizationForm";
// const
import { CREATE_ORGANIZATION_FORM } from "../../utils/constants";
import { isBrowser } from "react-device-detect";

class CreateOrganizationForm extends _OrganizationFormParentClass {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_ORGANIZATION_FORM;
    MODEL_NAME = "organization";
    ROUTE_LIST_DIRECTION = "/community/organizations";

    state = {
        errors: []
    };
    handleSubmit = (organization) => {
        CreateOrganizationMutation(organization, this);
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

const asyncValidate = ValidationsOrganizationForm.composeAsyncValidators([
    ValidationsOrganizationForm.asyncValidate_organization_id,
    ValidationsOrganizationForm.asyncValidate_relationship_parent_of
]);

CreateOrganizationForm = reduxForm({
    form: "createOrganization",
    validate: ValidationsOrganizationForm.organizationFormValidate,
    asyncValidate,
    initialValues: {
        affiliation: false
    }
})(CreateOrganizationForm);

export default withTranslation()(withRouter(CreateOrganizationForm));
