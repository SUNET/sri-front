import _OpticalNodeFormParentClass from './_OpticalNodeFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateOpticalNodeMutation from '../../mutations/opticalNode/CreateOpticalNodeMutation';
import ValidationsOpticalNodeForm from './ValidationsOpticalNodeForm';
// const
import { CREATE_OPTICALNODE_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateOpticalNodeForm extends _OpticalNodeFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_OPTICALNODE_FORM;
  ROUTE_LIST_DIRECTION = '/network/optical-nodes';
  state = {
    errors: [],
  };
  handleSubmit = (opticalNode) => {
    CreateOpticalNodeMutation(opticalNode, this);
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

CreateOpticalNodeForm = reduxForm({
  validate: ValidationsOpticalNodeForm.validate,
  initialValues: {
    name: '',
  },
})(CreateOpticalNodeForm);

export default withTranslation()(withRouter(CreateOpticalNodeForm));
