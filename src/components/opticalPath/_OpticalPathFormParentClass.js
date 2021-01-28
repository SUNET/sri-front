import React from 'react';
import { Field, FieldArray, change, arrayPush } from 'redux-form';
import { Form } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import FieldInput from '../FieldInput';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayDependenciesMultiFields from '../common/FieldArrayDependenciesMultiFields';
// const
import renderFormBlockSection from '../common/BlockSection';
import { isBrowser } from 'react-device-detect';
import { SAVED, NEW } from '../../utils/constants';

function getSelectedDependencies(selection, getMethod) {
  if (selection && selection.id) {
    return getMethod(selection.id).then((entity) => {
      const newEntity = {
        ...entity,
        origin: NEW,
        status: SAVED,
      };
      if (entity.operational_state) {
        newEntity.operational_state = entity.operational_state;
      }
      return newEntity;
    });
  }
  return null;
}

async function handleSelectedDependencies({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedDependencies(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'dependencies', newEntity));
}

class _OpticalPathFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'opticalPath';
  ROUTE_LIST_DIRECTION = '/network/optical-paths';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    const { isFromModal } = this.props;
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderDetailsToggleSection(editMode)}
        {!isFromModal && this.renderDependenciesToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, operational_state, framing, capacity, wavelength } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/framing'),
        presentContent: framing,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_path_framing"
            name="framing"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/capacity'),
        presentContent: capacity,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_path_capacity"
            name="capacity"
            onChange={(e) => {}}
          />
        ),
      },
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
        title: t('general-forms/wavelength'),
        presentContent: wavelength,
        editContent: (
          <Form.Group>
            <Field type="text" name="wavelength" component={FieldInput} placeholder={t('general-forms/write-number')} />
          </Form.Group>
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
  renderDetailsToggleSection(editMode = true) {
    const componentClassName = 'details-block';
    const { t, provider_obj, provider_id } = this.props;
    const detailsInfo = [
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
            <h2>{t('general-forms/details')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {detailsInfo.map((formData, index) => {
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
    const { t, entityRemovedId, form, dispatch } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/depends-on')}</h2>
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
                handleSelectedDependencies({
                  selection,
                  getMethod: this.props[`get${typeOfSelection}ById`],
                  form,
                  dispatch,
                });
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

export default _OpticalPathFormParentClass;
