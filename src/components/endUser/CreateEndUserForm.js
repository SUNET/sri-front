import _EndUserFormParentClass from './_EndUserFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/endUser/CreateEndUserMutation';
import ValidationsEndUserForm from '../common/_BasicValidationForm';
// const
import { CREATE_ENDUSER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateEndUserForm extends _EndUserFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_ENDUSER_FORM;
  ROUTE_LIST_DIRECTION = '/network/end-users';
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

CreateEndUserForm = reduxForm({
  validate: ValidationsEndUserForm.validate,
  initialValues: {
    name: '',
  },
})(CreateEndUserForm);

export default withTranslation()(CreateEndUserForm);
