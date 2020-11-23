import _HostFormParentClass from './_HostFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/host/CreateHostMutation';
import ValidationsHostForm from './ValidationsHostForm';
// const
import { CREATE_HOST_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateHostForm extends _HostFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_HOST_FORM;
  ROUTE_LIST_DIRECTION = '/network/hosts';
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

CreateHostForm = reduxForm({
  validate: ValidationsHostForm.validate,
  initialValues: {
    name: '',
  },
})(CreateHostForm);

export default withTranslation()(CreateHostForm);
