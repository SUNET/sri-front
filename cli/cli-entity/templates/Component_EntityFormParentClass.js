import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
import { SAVED } from '../../utils/constants';
import renderFormBlockSection from '../common/BlockSection';

class ___EntityClassName__FormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = '__entityName__';
  ROUTE_LIST_DIRECTION = '/__entityBlock__/__entityInternalRoutePath__s';

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
        {this.renderSections(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }
}

export default ___EntityClassName__FormParentClass;
