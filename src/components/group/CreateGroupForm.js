import _GroupFormParentClass from './_GroupFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/group/CreateGroupMutation';
import ValidationsGroupForm from './ValidationsGroupForm';
// const
import { CREATE_GROUP_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateGroupFormComponent extends _GroupFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_GROUP_FORM;
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

export const CreateGroupForm = reduxForm({
  form: 'createGroup',
  validate: ValidationsGroupForm.validate,
  initialValues: {
    name: '',
  },
})(CreateGroupFormComponent);

export default withTranslation()(withRouter(CreateGroupForm));
