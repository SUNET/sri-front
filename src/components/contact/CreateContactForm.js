import _ContactFormParentClass from './_ContactFormParentClass';
//Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateContactMutation from '../../mutations/contact/CreateContactMutation';
import ValidationsContactForm from './ValidationContactForm';
// const
import { CREATE_CONTACT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateContactForm extends _ContactFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_CONTACT_FORM;

  handleSubmit = (contact) => {
    this.props.hideContactModal();
    CreateContactMutation(contact, this);
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
          {this.renderHeader(editMode, showBackButton, isFromModal)}
          {this.renderModelMainSection(editMode)}
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateContactForm = reduxForm({
  validate: ValidationsContactForm.contactFormValidate,
  initialValues: {},
})(CreateContactForm);

export default withTranslation()(CreateContactForm);
