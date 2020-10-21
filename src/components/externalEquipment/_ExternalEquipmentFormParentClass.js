import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayOwner from '../firewall/FieldArrayOwner';
// const
import { SAVED } from '../../utils/constants';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
// import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';


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
        this.handleSelectedNetworkOrganization(selectionData, methodName);
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

  handleSelectedNetworkOrganization = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'owner', newEntity));
      });
    }
  };

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, /* location, dispatch, form*/ } = this.props;
    return (
      <>
        {/* {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })} */}
        {this.renderDescriptionToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {!isFromModal && this.renderOwnerToggleSection(editMode)}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderOwnerToggleSection(editMode = false) {
    const { t, owner, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/owner')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="owner"
              component={FieldArrayOwner}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedNetworkOrganization}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'owner' ? entityRemovedId : null}
              disabledFilters={owner && owner.filter((o) => o.status === SAVED).length > 0}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _ExternalEquipmentFormParentClass;
