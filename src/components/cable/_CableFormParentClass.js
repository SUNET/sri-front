import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import { change } from 'redux-form';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayConnections from './FieldArrayConnections';
// const
import { isBrowser } from 'react-device-detect';
import { SAVED } from '../../utils/constants';
// scss
import '../../style/ModelDetails.scss';

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

class _CableFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'cable';
  ROUTE_LIST_DIRECTION = '/network/cables';
  MAX_CONNECTIONS = 2;

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.entitySavedId) {
      const { fieldModalOpened } = nextState;
      const selectionData = {
        id: nextProps.entitySavedId,
      };
      const methodName = `get${nextProps.entityInModalName}ById`;
      if (fieldModalOpened === 'connections') {
        this.getConnectionDetails(selectionData, methodName);
      }
      return false;
    }
    return true;
  }

  // handleProviderSearch = (selection) => {
  //   if (selection !== null) {
  //     this.props.getProvider(selection.id).then((provider) => {
  //       console.log('provider: ', provider);
  //       // this.props.dispatch(this.props.form, "provider", provider);
  //     });
  //   }
  // };

  getConnectionDetails(selectionData) {
    if (selectionData !== null) {
      this.props.getPortById(selectionData.id).then((port) => {
        this.handleConnectionSearch(port);
      });
    }
  }

  handleConnectionSearch(newConnection) {
    if (newConnection !== null) {
      this.props.dispatch(arrayPush(this.props.form, 'connections', { ...newConnection, ...{ status: 'saved' } }));
    }
  }
  // Specific toggle sections RENDERS
  renderGeneralInfoToggleSection(editMode = true) {
    const { t, cableTypeObj, provider_id, providerObj } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('organization-details.type'),
        presentContent: cableTypeObj ? cableTypeObj.name : undefined,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="cable_types"
            name="cable_type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('network.cable.details.provider'),
        presentContent: providerObj ? providerObj.name : '',
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="provider_id"
            model="provider"
            placeholder={t('search-filter.search-providers')}
            currentValue={provider_id}
            objectCurrentValue={providerObj}
            nameDataInsideRequest="all_providers"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newProvider) => {
              this.props.dispatch(change(this.props.form, 'provider_id', newProvider ? newProvider.id : null));
              this.props.dispatch(change(this.props.form, 'providerObj', newProvider ? newProvider : null));
            }}
          />
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.general-information')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {generalInfoFirstRow.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderConnectionsSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    const disabledFilters =
      !!this.props.connections && (!this.props.connections || this.props.connections.filter(cn => cn.status === SAVED).length >= this.MAX_CONNECTIONS);
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('network.details.connections')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="connections"
              component={FieldArrayConnections}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.connectedTo}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'connections' });
                this.props.showModalCreateForm('Port');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'connections' });
                this.props.showModalUpdateForm('Port', entityId);
              }}
              handleSearchResult={(newConnection) => {
                this.handleConnectionSearch(newConnection);
              }}
              rerenderOnEveryChange={true}
              entityRemovedId={entityRemovedId}
              disabledFilters={disabledFilters}
            />
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
