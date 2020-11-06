import _ServiceFormParentClass from './_ServiceFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateServiceMutation from '../../mutations/service/CreateServiceMutation';
import ValidationsServiceForm from '../common/_BasicValidationForm';
// const
import { CREATE_SERVICE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateServiceForm extends _ServiceFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_SERVICE_FORM;
  ROUTE_LIST_DIRECTION = '/network/services';
  state = {
    errors: [],
  };
  handleSubmit = (service) => {
    const { currentClass } = this.props;
    CreateServiceMutation({ ...service, currentClass }, this);
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

CreateServiceForm = reduxForm({
  validate: ValidationsServiceForm.validate,
  initialValues: {
    name: '',
  },
})(CreateServiceForm);

export default withTranslation()(withRouter(CreateServiceForm));
