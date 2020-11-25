import _OpticalNodeFormParentClass from './_OpticalNodeFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/opticalNode/CreateOpticalNodeMutation';
import ValidationsOpticalNodeForm from './ValidationsOpticalNodeForm';
// const
import { CREATE_OPTICALNODE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalNodeForm extends _OpticalNodeFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALNODE_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-nodes';
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

CreateOpticalNodeForm = reduxForm({
  validate: ValidationsOpticalNodeForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalNodeForm);

export default withTranslation()(CreateOpticalNodeForm);
