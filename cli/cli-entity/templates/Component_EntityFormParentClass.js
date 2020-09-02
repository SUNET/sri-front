import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
import { SAVED } from '../../utils/constants';

const renderFormBlockSection = (editable, data, uniqueKey) => {
  const isPresentState = !editable;
  const presentContent = data.presentContent || '';
  return (
    <div className="form-internal-block__section" key={uniqueKey}>
      <div className="form-internal-block__section__title">{data.title}</div>
      <div
        className={`form-internal-block__section__content ${
          editable ? 'form-internal-block__section__content--edition-mode' : ''
        }`}
      >
        {isPresentState ? presentContent : data.editContent}
      </div>
    </div>
  );
};

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
}

export default ___EntityClassName__FormParentClass;
