import _PortFormParentClass from './_PortFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreatePortMutation from '../../mutations/port/CreatePortMutation';
import ValidationsPortForm from './ValidationsPortForm';
// const
import { CREATE_PORT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreatePortForm extends _PortFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_PORT_FORM;
  state = {
    errors: [],
  };
  handleSubmit = (port) => {
    CreatePortMutation(port, this);
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
          {this.renderModelMainSection(editMode)}
          {!isFromModal && this.renderParentToggleSection(editMode)}
          {!isFromModal && this.renderConnectedToToggleSection(editMode)}
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreatePortForm = reduxForm({
  validate: ValidationsPortForm.validate,
  initialValues: {
    name: '',
  },
})(CreatePortForm);

export default withTranslation()(CreatePortForm);
