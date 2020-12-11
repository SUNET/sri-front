import _ServiceFormParentClass from './_ServiceFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/service/CreateServiceMutation';
import ValidationsServiceForm from './ValidationsServiceForm';
// const
import { CREATE_SERVICE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateServiceForm extends _ServiceFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_SERVICE_FORM;
  MUTATION_SUBMIT = CreateMutation;
  state = {
    errors: [],
  };
  preProcessSubmitData = (service) => {
    const { currentClass } = this.props;
    return { ...service, currentClass };
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

CreateServiceForm = reduxForm({
  validate: ValidationsServiceForm.validate,
  initialValues: {},
})(CreateServiceForm);

export default withTranslation()(CreateServiceForm);
