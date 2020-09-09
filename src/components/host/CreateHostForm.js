import _HostFormParentClass from './_HostFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateHostMutation from '../../mutations/host/CreateHostMutation';
import ValidationsHostForm from './ValidationsHostForm';
// const
import { CREATE_HOST_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateHostForm extends _HostFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_HOST_FORM;
  ROUTE_LIST_DIRECTION = '/network/hosts';
  state = {
    errors: [],
  };
  handleSubmit = (host) => {
    CreateHostMutation(host, this);
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

CreateHostForm = reduxForm({
  validate: ValidationsHostForm.validate,
  initialValues: {
    name: '',
  },
})(CreateHostForm);

export default withTranslation()(withRouter(CreateHostForm));
