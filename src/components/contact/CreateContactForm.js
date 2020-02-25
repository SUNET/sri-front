import React from "react";
import { withTranslation } from "react-i18next";
import { reduxForm } from "redux-form";
import CreateContactMutation from "../../mutations/contact/CreateContactMutation";
import ValidationsContactForm from "./ValidationContactForm";
import { isBrowser } from "react-device-detect";
import { CREATE_CONTACT_FORM } from "../../utils/constants";
import _CreateAndUpdateFormParent from "../common/_FormParentClass";

class CreateContactForm extends _CreateAndUpdateFormParent {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_CONTACT_FORM;
    handleSubmit = (contact) => {
        CreateContactMutation(contact, this);
    };
    render() {
        const { handleSubmit } = this.props;
        const editMode = true;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                <div className="model-details create-contact-form">
                    {this.renderHeader(editMode)}
                    {this.renderModelMainSection(editMode)}
                    {this.renderWorkLog(editMode)}
                </div>
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreateContactForm = reduxForm({
    form: "createContact",
    validate: ValidationsContactForm.contactFormValidate,
    initialValues: {}
})(CreateContactForm);

export default withTranslation()(CreateContactForm);
