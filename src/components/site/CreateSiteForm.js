import _SiteFormParentClass from './_SiteFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/site/CreateSiteMutation';
import ValidationsSiteForm from './ValidationsSiteForm';
// const
import { CREATE_SITE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateSiteForm extends _SiteFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_SITE_FORM;
  ROUTE_LIST_DIRECTION = '/network/location-sites';
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

CreateSiteForm = reduxForm({
  validate: ValidationsSiteForm.validate,
  initialValues: {
    name: '',
  },
})(CreateSiteForm);

export default withTranslation()(CreateSiteForm);
