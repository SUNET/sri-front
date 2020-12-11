import _OpticalPathFormParentClass from './_OpticalPathFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/opticalPath/CreateOpticalPathMutation';
import ValidationsOpticalPathForm from './ValidationsOpticalPathForm';
// const
import { CREATE_OPTICALPATH_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalPathForm extends _OpticalPathFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALPATH_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-paths';
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

CreateOpticalPathForm = reduxForm({
  validate: ValidationsOpticalPathForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalPathForm);

export default withTranslation()(CreateOpticalPathForm);
