import _PortFormParentClass from './_PortFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/port/CreatePortMutation';
import ValidationsPortForm from './ValidationsPortForm';
// const
import { CREATE_PORT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreatePortFormComponent extends _PortFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_PORT_FORM;
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

export const CreatePortForm = reduxForm({
  validate: ValidationsPortForm.validate,
  initialValues: {
    name: '',
  },
})(CreatePortFormComponent);

export default withTranslation()(CreatePortForm);
