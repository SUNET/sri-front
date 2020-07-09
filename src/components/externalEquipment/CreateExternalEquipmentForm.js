import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import CreateExternalEquipmentMutation from '../../mutations/externalEquipment/CreateExternalEquipmentMutation';
import ValidationsExternalEquipmentForm from '../common/_BasicValidationForm';
// const
import { CREATE_EXTERNALEQUIPMENT_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateExternalEquipmentForm extends _BasicFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_EXTERNALEQUIPMENT_FORM;
  ROUTE_LIST_DIRECTION = '/network/external-equipments';
  state = {
    errors: [],
  };
  handleSubmit = (externalEquipment) => {
    CreateExternalEquipmentMutation(externalEquipment, this);
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
          {this.renderWorkLog(editMode)}
        </div>
        {this.renderSaveCancelButtons()}
      </form>
    );
  }
}

CreateExternalEquipmentForm = reduxForm({
  validate: ValidationsExternalEquipmentForm.validate,
  initialValues: {
    name: '',
  },
})(CreateExternalEquipmentForm);

export default withTranslation()(withRouter(CreateExternalEquipmentForm));
