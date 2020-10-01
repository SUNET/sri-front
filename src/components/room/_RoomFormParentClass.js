import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
// import renderFormBlockSection from '../common/BlockSection';

class _RoomFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'room';
  ROUTE_LIST_DIRECTION = '/network/location-rooms';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderWorkLog()}
      </>
    );
  }
}

export default _RoomFormParentClass;
