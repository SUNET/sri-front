import _RackFormParentClass from './_RackFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/rack/CreateRackMutation';
import ValidationsRackForm from '../common/_BasicValidationForm';
// const
import { CREATE_RACK_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateRackForm extends _RackFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_RACK_FORM;
  ROUTE_LIST_DIRECTION = '/network/location-racks';
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

CreateRackForm = reduxForm({
  validate: ValidationsRackForm.validate,
  initialValues: {
    name: '',
  },
})(CreateRackForm);

export default withTranslation()(CreateRackForm);
