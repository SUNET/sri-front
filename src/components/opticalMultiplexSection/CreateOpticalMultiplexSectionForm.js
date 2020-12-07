import _OpticalMultiplexSectionFormParentClass from './_OpticalMultiplexSectionFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/opticalMultiplexSection/CreateOpticalMultiplexSectionMutation';
import ValidationsOpticalMultiplexSectionForm from './ValidationsOpticalMultiplexSectionForm';
// const
import { CREATE_OPTICALMULTIPLEXSECTION_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalMultiplexSectionForm extends _OpticalMultiplexSectionFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALMULTIPLEXSECTION_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-multiplex-sections';
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

CreateOpticalMultiplexSectionForm = reduxForm({
  validate: ValidationsOpticalMultiplexSectionForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalMultiplexSectionForm);

export default withTranslation()(CreateOpticalMultiplexSectionForm);
