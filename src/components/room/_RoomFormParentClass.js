import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
import { renderEquipmentsToggleSection, handleSelectedPhysical } from '../common/formsSections/LocatedInToggleSection';

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
    if (nextProps.entitySavedId) {
      const { fieldModalOpened } = nextState;
      const selectionData = {
        id: nextProps.entitySavedId,
      };
      const methodName = `get${nextProps.entityInModalName}ById`;
      if (fieldModalOpened === 'located_in') {
        handleSelectedPhysical({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      }
      return false;
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {renderEquipmentsToggleSection(editMode, this)}
        {this.renderWorkLog()}
      </>
    );
  }
}

export default _RoomFormParentClass;
