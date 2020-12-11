import _CustomerFormParentClass from './_CustomerFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/customer/CreateCustomerMutation';
import ValidationsCustomerForm from '../common/_BasicValidationForm';
// const
import { CREATE_CUSTOMER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateCustomerForm extends _CustomerFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_CUSTOMER_FORM;
  ROUTE_LIST_DIRECTION = '/network/customers';
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
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateCustomerForm = reduxForm({
  validate: ValidationsCustomerForm.validate,
  initialValues: {
    name: '',
  },
})(CreateCustomerForm);

export default withTranslation()(CreateCustomerForm);
