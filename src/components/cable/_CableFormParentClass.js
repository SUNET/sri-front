import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { Form } from 'react-bootstrap';
import { Field, FieldArray, arrayPush } from 'redux-form';
import { change } from 'redux-form';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayConnections from './FieldArrayConnections';
import FieldArrayDependenciesMultiFields from '../common/FieldArrayDependenciesMultiFields';
import ConnectionPath from '../common/ConnectionPath';
// const
import { isBrowser } from 'react-device-detect';
import { SAVED, NEW } from '../../utils/constants';
import FieldInput from '../FieldInput';
import CONFIG from '../../config';
// scss
import '../../style/ModelDetails.scss';

import renderFormBlockSection from '../common/BlockSection';

class _CableFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'cable';
  ROUTE_LIST_DIRECTION = '/network/cables';
  MAX_CONNECTIONS = 2;

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
      if (fieldModalOpened === 'ports') {
        this.getConnectionDetails(selectionData, methodName);
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

  getConnectionDetails(selectionData) {
    if (selectionData !== null) {
      this.props.getPortById(selectionData.id).then((port) => {
        this.handleConnectionSearch(port);
      });
    }
  }

  async handleSelectedIsUsed(selection, methodName) {
    const { dispatch, form } = this.props;
    if (selection) {
      const { id } = selection;
      const newEntity = await this.getSelectedLogical(id, this.props[methodName]);
      if (newEntity) dispatch(arrayPush(form, 'dependents', newEntity));
    }
    return null;
  }

  handleConnectionSearch(newConnection) {
    if (newConnection !== null) {
      this.props.dispatch(arrayPush(this.props.form, 'ports', { ...newConnection, ...{ status: 'saved' } }));
    }
  }
  // Specific toggle sections RENDERS
  renderSections(editMode) {
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderConnectionsSection(editMode)}
        {this.renderIsUsedToggleSection(editMode)}
        {this.renderConnectionPathToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    let generalInfoThirdRow = [];

    const {
      tele2_cable_contract,
      tele2_alternative_circuit_id,
      t,
      cable_type,
      provider_id,
      provider_obj,
      cable_length,
    } = this.props;

    const generalInfoFirstRow = [
      {
        title: t('general-forms/type'),
        presentContent: cable_type?.name,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="cable_types"
            model="name_value_structure"
            name="cable_type_value"
            onChange={(newValue) => {
              this.props.dispatch(change(this.props.form, 'cable_type', newValue ? newValue : null));
            }}
          />
        ),
      },
      {
        title: t('general-forms/cable-length'),
        presentContent: cable_length,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="cable_length"
              component={FieldInput}
              placeholder={t('general-forms/decimal-length-placeholder')}
            />
          </Form.Group>
        ),
      },
    ];

    const generalInfoSecondRow = [
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

    if (CONFIG.IS_SUNET_VERSION) {
      generalInfoThirdRow = [
        {
          title: t('general-forms/cable-tele2-circuitid'),
          presentContent: tele2_alternative_circuit_id,
          editContent: (
            <Form.Group>
              <Field type="text" name="tele2_alternative_circuit_id" component={FieldInput} />
            </Form.Group>
          ),
        },
        {
          title: t('general-forms/cable-tele2-contract'),
          presentContent: tele2_cable_contract?.name,
          editContent: (
            <Dropdown
              t={t}
              className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
              emptyLabel="Select type"
              type="tele2_cable_contracts"
              model="name_value_structure"
              name="tele2_cable_contract_value"
              onChange={(newValue) => {
                this.props.dispatch(change(this.props.form, 'tele2_cable_contract', newValue ? newValue : null));
              }}
            />
          ),
        },
      ];
    }

    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/general-information')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {generalInfoFirstRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="form-internal-block">
                {generalInfoSecondRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              {CONFIG.IS_SUNET_VERSION && (
                <div className="form-internal-block">
                  {generalInfoThirdRow.map((formData, index) => {
                    return renderFormBlockSection(editMode, formData, index);
                  })}
                </div>
              )}
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderConnectionsSection(editMode = false) {
    const componentClassName = 'connections-block';
    const { t, entityRemovedId } = this.props;
    const disabledFilters =
      !!this.props.ports &&
      (!this.props.ports || this.props.ports.filter((cn) => cn.status === SAVED).length >= this.MAX_CONNECTIONS);
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/connects')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="ports"
              component={FieldArrayConnections}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.connectedTo}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalCreateForm('Port');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalEditForm('Port', entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalDetailForm('Port', entityId);
              }}
              handleSearchResult={(newConnection) => {
                this.handleConnectionSearch(newConnection);
              }}
              rerenderOnEveryChange
              entityRemovedId={entityRemovedId}
              disabledFilters={disabledFilters}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderIsUsedToggleSection(editMode = true) {
    const componentClassName = 'is-used-block';
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/used-by')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="dependents"
              component={FieldArrayDependenciesMultiFields}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'dependents' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependents' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependents' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection, typeOfSelection) => {
                this.handleSelectedIsUsed(selection, `get${typeOfSelection}ById`);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'dependents' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderConnectionPathToggleSection(editMode = true) {
    const componentClassName = 'connection-path-block';
    const { t, connected_to } = this.props;
    let connectionPathElements = [];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/connection-path')}</h2>
          </ToggleHeading>
          <TogglePanel>
            {connected_to &&
              connected_to.length &&
              connected_to.map(({ connection_path }) => {
                if (connection_path) {
                  const { originEquipment, cable, destinationEquipment } = connection_path;
                  connectionPathElements = [originEquipment, cable, destinationEquipment];
                }
                return <ConnectionPath key={Math.random()} blocks={connectionPathElements} />;
              })}
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  // Main RENDER
  render() {
    console.error('This method should be overwritten in the child class');
    return <div>This method should be overwritten in the child class</div>;
  }
}
export default _CableFormParentClass;
