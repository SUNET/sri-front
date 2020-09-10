import React from 'react';
import { FieldArray, arrayPush, change } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayPorts from '../common/FieldArrayPorts';
import BulPort from '../common/BulkPort';
// const
import { isBrowser } from 'react-device-detect';

import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import renderFormBlockSection from '../common/BlockSection';

class _OpticalLinkFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'opticalLink';
  ROUTE_LIST_DIRECTION = '/network/optical-links';

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
      if (fieldModalOpened === 'ports') {
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
    const { isFromModal } = this.props;
    return (
      <>
        {this.renderModelMainSection(editMode)}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && editMode && this.renderBulkPortToggleSection()}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, operational_state, type, interface_type, provider_id, provider_obj } = this.props;
    console.log('interface_type: ', interface_type);
    console.log('type: ', type);
    console.log('operational_state: ', operational_state);

    const generalInfo = [
      {
        title: t('general-forms/operational-state'),
        presentContent: operational_state,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="operational_states"
            name="operational_state"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/type'),
        presentContent: type,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_link_types"
            name="type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/interface-type'),
        presentContent: interface_type,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_link_interface_type"
            name="interface_type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('entity-name/provider'),
        presentContent: provider_obj ? provider_obj.name : '',
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="provider_id"
            model="provider"
            placeholder={t('search-filter.search-providers')}
            currentValue={provider_id}
            objectCurrentValue={provider_obj}
            nameDataInsideRequest="all_providers"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newProvider) => {
              this.props.dispatch(change(this.props.form, 'provider_id', newProvider ? newProvider.id : null));
              this.props.dispatch(change(this.props.form, 'provider_obj', newProvider ? newProvider : null));
            }}
          />
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/general-information')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {generalInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderBulkPortToggleSection() {
    const { t } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/bulk-port')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <BulPort
              handleBulkPortResponse={(dataForBulkPortCreate) => {
                dataForBulkPortCreate.forEach((portData) => {
                  this.props.dispatch(arrayPush(this.props.form, 'ports', portData));
                });
              }}
            ></BulPort>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _OpticalLinkFormParentClass;
