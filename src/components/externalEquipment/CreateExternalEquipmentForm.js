import _ExternalEquipmentFormParentClass from './_ExternalEquipmentFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/externalEquipment/CreateExternalEquipmentMutation';
import ValidationsExternalEquipmentForm from '../common/_BasicValidationForm';
// const
import { CREATE_EXTERNALEQUIPMENT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateExternalEquipmentForm extends _ExternalEquipmentFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_EXTERNALEQUIPMENT_FORM;
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

CreateExternalEquipmentForm = reduxForm({
  validate: ValidationsExternalEquipmentForm.validate,
  initialValues: {
    name: '',
  },
})(CreateExternalEquipmentForm);

export default withTranslation()(CreateExternalEquipmentForm);
