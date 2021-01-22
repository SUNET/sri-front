import _CableFormParentClass from './_CableFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/cable/CreateCableMutation';
import ValidationsCableForm from './ValidationsCableForm';
// const
import { CREATE_CABLE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateCableFormComponent extends _CableFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_CABLE_FORM;
  MUTATION_SUBMIT = CreateMutation;
  state = {
    errors: [],
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
          {this.renderSections(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

export const CreateCableForm = reduxForm({
  validate: ValidationsCableForm.validate,
  initialValues: {
    name: '',
  },
})(CreateCableFormComponent);

export default withTranslation()(CreateCableForm);
