import _SiteFormParentClass from './_SiteFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateSiteMutation from '../../mutations/site/CreateSiteMutation';
import ValidationsSiteForm from '../common/_BasicValidationForm';
// const
import { CREATE_SITE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateSiteForm extends _SiteFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_SITE_FORM;
  ROUTE_LIST_DIRECTION = '/network/location-sites';
  state = {
    errors: [],
  };
  handleSubmit = (site) => {
    CreateSiteMutation(site, this);
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

CreateSiteForm = reduxForm({
  validate: ValidationsSiteForm.validate,
  initialValues: {
    name: '',
  },
})(CreateSiteForm);

export default withTranslation()(withRouter(CreateSiteForm));
