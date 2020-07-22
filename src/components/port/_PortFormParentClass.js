import _BasicFormParentClass from '../common/_BasicFormParentClass';
// Common imports
import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
// components
import Dropdown from '../Dropdown';
// import DropdownSearch from "../DropdownSearch";
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayParentPort from './FieldArrayParentPort';
import FieldArrayConnectedToPort from './FieldArrayConnectedToPort';

// const
import { isBrowser } from 'react-device-detect';
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

class _PortFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'port';
  ROUTE_LIST_DIRECTION = '/network/ports';

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
      if (fieldModalOpened === 'parents') {
        this.handleSelectedParent(selectionData, methodName);
      } else if (fieldModalOpened === 'connectedTo') {
        this.handleSelectedConnectedTo(selectionData);
      }
      return false;
    }
    return true;
  }

  handleSelectedParent = (selection, typeOfSelection) => {
    if (selection !== null) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          __typename: entity.__typename,
          name: entity.name,
          description: entity.description,
          type: entity.type,
          entityType: {
            name: entity.__typename,
          },
          id: entity.id,
          status: 'saved',
        };
        if (entity.operational_state) {
          newEntity.operational_state = entity.operational_state;
        }
        this.props.dispatch(arrayPush(this.props.form, 'parents', newEntity));
      });
    }
  };

  handleSelectedConnectedTo = (selection) => {
    if (selection !== null) {
      this.props.getCableById(selection.id).then((cable) => {
        const newCable = {
          __typename: cable.__typename,
          name: cable.name,
          description: cable.description,
          type: cable.type,
          id: cable.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'connectedTo', newCable));
      });
    }
  };

  // Specific toggle sections RENDERS
  renderGeneralInfoToggleSection(editMode = true) {
    const { t, portTypeObj } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('organization-details.type'),
        presentContent: portTypeObj ? portTypeObj.name : undefined,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="port_types"
            name="port_type"
            onChange={(e) => {}}
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

  renderParentToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('network.details.parent')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="parents"
              component={FieldArrayParentPort}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'parents' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'parents' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'parents' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedParent}
              rerenderOnEveryChange={true}
              entityRemovedId={this.state.fieldModalOpened === 'parents' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderConnectedToToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('network.details.connectedTo')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="connectedTo"
              component={FieldArrayConnectedToPort}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.connectedTo}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'connectedTo' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'connectedTo' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'connectedTo' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedConnectedTo}
              rerenderOnEveryChange={true}
              entityRemovedId={this.state.fieldModalOpened === 'connectedTo' ? entityRemovedId : null}
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
export default _PortFormParentClass;
