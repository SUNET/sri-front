import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
import { SAVED } from '../../utils/constants';
import renderFormBlockSection from '../common/BlockSection';

class _ServiceFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'service';
  ROUTE_LIST_DIRECTION = '/network/services';

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
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }
}

export default _ServiceFormParentClass;
