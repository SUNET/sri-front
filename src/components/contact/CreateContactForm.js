import _ContactFormParentClass from './_ContactFormParentClass';
//Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/contact/CreateContactMutation';
import ValidationsContactForm from './ValidationContactForm';
// const
import { CREATE_CONTACT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateContactFormComponent extends _ContactFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_CONTACT_FORM;
  MUTATION_SUBMIT = CreateMutation;

  handleSubmit = (dataToMutation) => {
    this.props.hideContactModal();
    this.setState({ disabledSubmitButton: true });
    this.MUTATION_SUBMIT(dataToMutation, this);
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
        <div className={`model-details create-${this.MODEL_NAME}-form`}>
          {this.renderHeader(editMode, showBackButton, isFromModal)}
          {this.renderSections(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

export const CreateContactForm = reduxForm({
  validate: ValidationsContactForm.contactFormValidate,
  initialValues: {},
})(CreateContactFormComponent);

export default withTranslation()(CreateContactForm);
