import _OpticalFilterFormParentClass from './_OpticalFilterFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/opticalFilter/CreateOpticalFilterMutation';
import ValidationsOpticalFilterForm from './ValidationsOpticalFilterForm';
// const
import { CREATE_OPTICALFILTER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalFilterForm extends _OpticalFilterFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALFILTER_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-filters';
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

CreateOpticalFilterForm = reduxForm({
  validate: ValidationsOpticalFilterForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalFilterForm);

export default withTranslation()(CreateOpticalFilterForm);
