import _ODFFormParentClass from './_ODFFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateODFMutation from '../../mutations/ODF/CreateODFMutation';
import ValidationsODFForm from '../common/_BasicValidationForm';
// const
import { CREATE_ODF_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateODFForm extends _ODFFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_ODF_FORM;
  ROUTE_LIST_DIRECTION = '/network/odf';
  state = {
    errors: [],
  };
  handleSubmit = (ODF) => {
    CreateODFMutation(ODF, this);
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
          {this.renderModelMainSection(editMode)}
          {this.renderPortsToggleSection(editMode)}
          {editMode && this.renderBulkPortToggleSection()}
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateODFForm = reduxForm({
  validate: ValidationsODFForm.validate,
  initialValues: {
    name: '',
  },
})(CreateODFForm);

export default withTranslation()(withRouter(CreateODFForm));
