import _SwitchFormParentClass from './_SwitchFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/switch/CreateSwitchMutation';
import ValidationsSwitchForm from './ValidationsSwitchForm';
// const
import { CREATE_SWITCH_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateSwitchForm extends _SwitchFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_SWITCH_FORM;
  ROUTE_LIST_DIRECTION = '/network/switches';
  MUTATION_SUBMIT = CreateMutation;
  state = {
    errors: [],
  };
  render() {
    const { handleSubmit } = this.props;
    const editMode = true;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        <div className="model-details create-contact-form">
          {this.renderHeader(editMode, showBackButton)}
          {this.renderSections(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateSwitchForm = reduxForm({
  validate: ValidationsSwitchForm.validateWithType,
  initialValues: {
    name: '',
  },
})(CreateSwitchForm);

export default withTranslation()(CreateSwitchForm);
