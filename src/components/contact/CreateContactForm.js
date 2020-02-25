import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

import CreateContactMutation from "../../mutations/contact/CreateContactMutation";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ContactPhones from "./ContactPhones";
import ContactEmails from "./ContactEmails";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import ValidationsContactForm from "./ValidationContactForm";
import BackCTA from "../common/BackCTA";

import { isBrowser, isMobile, isTablet } from "react-device-detect";

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
