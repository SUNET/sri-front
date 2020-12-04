import _RoomFormParentClass from './_RoomFormParentClass';
// Common imports
import React from 'react';
import { withTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import CreateMutation from '../../mutations/room/CreateRoomMutation';
import ValidationsRoomForm from '../common/_BasicValidationForm';
// const
import { CREATE_ROOM_FORM } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

class CreateRoomForm extends _RoomFormParentClass {
  IS_UPDATED_FORM = false;
  FORM_ID = CREATE_ROOM_FORM;
  ROUTE_LIST_DIRECTION = '/network/location-rooms';
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

CreateRoomForm = reduxForm({
  validate: ValidationsRoomForm.validate,
  initialValues: {
    name: '',
  },
})(CreateRoomForm);

export default withTranslation()(CreateRoomForm);
