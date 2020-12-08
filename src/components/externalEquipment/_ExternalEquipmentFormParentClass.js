import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
// const
import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderOwnerToggleSection, handleSelectedOwner } from '../common/formsSections/OwnerToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';
import renderLocatedInSubTitleHeader from '../common/formsSections/LocatedInSubTitleHeader';

class _ExternalEquipmentFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'externalEquipment';
  ROUTE_LIST_DIRECTION = '/network/external-equipments';

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
      if (fieldModalOpened === 'owner') {
        handleSelectedOwner({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'ports') {
        handleSelectedPort({
          selection: selectionData,
          getMethod: this.props.getPortById,
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      }
      return false;
    }
    return true;
  }

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, location, dispatch, form } = this.props;
    return (
      <>
        {location && renderLocatedInSubTitleHeader(t('general-forms/located-in'), location)}
        {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })}
        {this.renderDescriptionToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {renderOwnerToggleSection(editMode, this)}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }
}

export default _ExternalEquipmentFormParentClass;
