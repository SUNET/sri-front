import React from 'react';
import { arrayPush, change, FieldArray } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayDependenciesMultiFields from '../common/FieldArrayDependenciesMultiFields';
// const
import { isBrowser } from 'react-device-detect';
import { SAVED, NEW } from '../../utils/constants';

import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
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
      if (fieldModalOpened === 'dependencies') {
        const methodName = `get${nextProps.entityInModalName}ById`;
        this.handleSelectedDependency(selectionData, methodName);
      }
      return false;
    }
    return true;
  }

  getSelectedLogical(id, getMethod) {
    return getMethod(id).then((entity) => ({
      ...entity,
      status: SAVED,
      origin: NEW,
    }));
  }

  async handleSelectedDependency(selection, methodName) {
    const { dispatch, form } = this.props;
    if (selection) {
      const { id } = selection;
      const newEntity = await this.getSelectedLogical(id, this.props[methodName]);
      if (newEntity) dispatch(arrayPush(form, 'dependencies', newEntity));
    }
    return null;
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
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {!isFromModal && this.renderDependenciesToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, operational_state, type, interface_type, provider_id, provider_obj } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/operational-state'),
        presentContent: operational_state,
        editContent: (
          <Dropdown
            t={t}
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
            t={t}
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
            t={t}
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
            t={t}
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
      <section className={`model-section ${componentClassName}`}>
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
      </section>
    );
  }

  renderDependenciesToggleSection(editMode = true) {
    const componentClassName = 'dependencies-block';
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/dependencies')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              fieldsByPreFilter={{
                OpticalLink: [
                  {
                    text: 'general-forms/name',
                    fieldKey: 'name',
                  },
                  {
                    text: 'main-entity-name/ports',
                    fieldKey: 'ports.name',
                    withLink: true,
                    listElements: true,
                  },
                  {
                    text: 'general-forms/description',
                    fieldKey: 'description',
                    showAllText: true,
                  },
                ],
                OpticalMultiplexSection: [
                  {
                    text: 'general-forms/name',
                    fieldKey: 'name',
                  },
                  {
                    text: 'general-forms/description',
                    fieldKey: 'description',
                    showAllText: true,
                  },
                ],
                OpticalPath: [
                  {
                    text: 'general-forms/name',
                    fieldKey: 'name',
                  },
                  {
                    text: 'general-forms/description',
                    fieldKey: 'description',
                    showAllText: true,
                  },
                ],
                Service: [
                  {
                    text: 'general-forms/name',
                    fieldKey: 'name',
                  },
                  {
                    text: 'general-forms/service-type',
                    fieldKey: 'service_type.name',
                  },
                  {
                    text: 'general-forms/description',
                    fieldKey: 'description',
                    showAllText: true,
                  },
                ],
                Cable: [
                  {
                    text: 'general-forms/name',
                    fieldKey: 'name',
                  },
                  {
                    text: 'general-forms/type',
                    fieldKey: 'type.name',
                  },
                  {
                    text: 'general-forms/description',
                    fieldKey: 'description',
                    showAllText: true,
                  },
                ],
              }}
              preFilterSelect={{
                pills: true,
                type: 'opticalLinkDependenciesTypes',
                label: 'general-forms/select-physical-type',
                model: 'opticalLinkDependenciesTypes',
                name: 'physical_types_preFilter',
              }}
              name="dependencies"
              fieldNameInForm="dependencies"
              component={FieldArrayDependenciesMultiFields}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection, typeOfSelection) => {
                this.handleSelectedDependency(selection, `get${typeOfSelection}ById`);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'dependencies' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _OpticalLinkFormParentClass;
