import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import {
  renderServiceListToggleSection,
  handleSelectedService,
} from '../common/formsSections/ServiceListToggleSection.js';

// const

class _ProviderFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = '';
  ROUTE_LIST_DIRECTION = '';

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
      if (fieldModalOpened === 'uses') {
        handleSelectedService({
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
    const { with_same_name } = this.props;
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {renderServiceListToggleSection(editMode, this)}
        {with_same_name && this.renderRelatedEntities(with_same_name)}
        {this.renderWorkLog()}
      </>
    );
  }
}

export default _ProviderFormParentClass;
