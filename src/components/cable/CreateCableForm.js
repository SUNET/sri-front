import _CableFormParentClass from './_CableFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateCableMutation from '../../mutations/cable/CreateCableMutation';
import ValidationsCableForm from './ValidationsCableForm';
// const
import { CREATE_CABLE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateCableForm extends _CableFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_CABLE_FORM;
  state = {
    errors: [],
  };
  handleSubmit = (cable) => {
    CreateCableMutation(cable, this);
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
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateCableForm = reduxForm({
  form: 'createCable',
  validate: ValidationsCableForm.validate,
  initialValues: {
    name: '',
  },
})(CreateCableForm);

export default withTranslation()(CreateCableForm);
