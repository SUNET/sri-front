import _OpticalMultiplexSectionFormParentClass from './_OpticalMultiplexSectionFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateOpticalMultiplexSectionMutation from '../../mutations/opticalMultiplexSection/CreateOpticalMultiplexSectionMutation';
import ValidationsOpticalMultiplexSectionForm from './ValidationsOpticalMultiplexSectionForm';
// const
import { CREATE_OPTICALMULTIPLEXSECTION_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalMultiplexSectionForm extends _OpticalMultiplexSectionFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALMULTIPLEXSECTION_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-multiplex-sections';
  state = {
    errors: [],
  };
  handleSubmit = (opticalMultiplexSection) => {
    CreateOpticalMultiplexSectionMutation(opticalMultiplexSection, this);
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
          {this.renderDependenciesToggleSection(editMode)}
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateOpticalMultiplexSectionForm = reduxForm({
  validate: ValidationsOpticalMultiplexSectionForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalMultiplexSectionForm);

export default withTranslation()(withRouter(CreateOpticalMultiplexSectionForm));
