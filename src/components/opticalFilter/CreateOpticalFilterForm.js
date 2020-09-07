import _OpticalFilterFormParentClass from './_OpticalFilterFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateOpticalFilterMutation from '../../mutations/opticalFilter/CreateOpticalFilterMutation';
import ValidationsOpticalFilterForm from './ValidationsOpticalFilterForm';
// const
import { CREATE_OPTICALFILTER_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalFilterForm extends _OpticalFilterFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALFILTER_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-filters';
  state = {
    errors: [],
  };
  handleSubmit = (opticalFilter) => {
    CreateOpticalFilterMutation(opticalFilter, this);
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

CreateOpticalFilterForm = reduxForm({
  validate: ValidationsOpticalFilterForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalFilterForm);

export default withTranslation()(withRouter(CreateOpticalFilterForm));
