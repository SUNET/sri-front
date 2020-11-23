import _OrganizationFormParentClass from './_OrganizationFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import CreateMutation from '../../mutations/organization/CreateOrganizationMutation';
import ValidationsOrganizationForm from './ValidationOrganizationForm';
// const
import { CREATE_ORGANIZATION_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOrganizationFormComponent extends _OrganizationFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_ORGANIZATION_FORM;
  MODEL_NAME = 'organization';
  ROUTE_LIST_DIRECTION = '/community/organizations';
  MUTATION_SUBMIT = CreateMutation;

  state = {
    errors: [],
  };
  handleSubmit = (dataToMutation) => {
    this.setState({ disabledSubmitButton: true });
    this.MUTATION_SUBMIT(dataToMutation, this);
  };
  render() {
    const { handleSubmit } = this.props;
    const editMode = true;
    const showBackButton = isBrowser;
    return (
      <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
        {isBrowser && this.renderSaveCancelButtons()}
        <div className={`model-details create-${this.MODEL_NAME}-form`}>
          {this.renderHeader(editMode, showBackButton)}
          {this.renderSections(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

const asyncValidate = ValidationsOrganizationForm.composeAsyncValidators([
  ValidationsOrganizationForm.asyncValidate_organization_id,
  ValidationsOrganizationForm.asyncValidate_relationship_parent_of,
]);

export const CreateOrganizationForm = reduxForm({
  form: 'createOrganization',
  validate: ValidationsOrganizationForm.organizationFormValidate,
  asyncValidate,
  initialValues: {
    affiliation: false,
  },
})(CreateOrganizationFormComponent);

export default withTranslation()(withRouter(CreateOrganizationForm));
