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
import renderFormBlockSection from '../common/BlockSection';
import renderLocatedInSubTitleHeader from '../common/formsSections/LocatedInSubTitleHeader';
import FieldArrayDependenciesMultiFields from '../common/FieldArrayDependenciesMultiFields';

// const
import { SAVED, NEW } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';
// scss
import '../../style/ModelDetails.scss';
import ConnectionPath from '../common/ConnectionPath';

class _PortFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'port';
  ROUTE_LIST_DIRECTION = '/network/ports';

  getSelectedLogical(id, getMethod) {
    return getMethod(id).then((entity) => ({
      ...entity,
      status: SAVED,
      origin: NEW,
    }));
  }

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
      if (fieldModalOpened === 'parent') {
        this.handleSelectedParent(selectionData, methodName);
      } else if (fieldModalOpened === 'connected_to') {
        this.handleSelectedConnectedTo(selectionData);
      }
      return false;
    }
    return true;
  }

  handleSelectedParent = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
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
        this.props.dispatch(arrayPush(this.props.form, 'parent', newEntity));
      });
    }
  };

  handleSelectedConnectedTo = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getCableById(selection.id).then((cable) => {
        const newCable = {
          __typename: cable.__typename,
          name: cable.name,
          description: cable.description,
          type: cable.type,
          id: cable.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'connected_to', newCable));
      });
    }
  };

  async handleSelectedIsUsed(selection, methodName) {
    const { dispatch, form } = this.props;
    if (selection) {
      const { id } = selection;
      const newEntity = await this.getSelectedLogical(id, this.props[methodName]);
      if (newEntity) dispatch(arrayPush(form, 'dependents', newEntity));
    }
    return null;
  }

  // Specific toggle sections RENDERS
  renderSections(editMode) {
    const { t, isFromModal, location } = this.props;
    return (
      <>
        {location && renderLocatedInSubTitleHeader(t('general-forms/located-in'), location)}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderIsUsedToggleSection(editMode)}
        {!isFromModal && this.renderParentToggleSection(editMode)}
        {!isFromModal && this.renderConnectedToToggleSection(editMode)}
        {this.renderConnectionPathToggleSection(editMode)}
        {this.renderWorkLog(editMode)}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, type } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('general-forms/type'),
        presentContent: type,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="port_types"
            name="type"
            onChange={(e) => {}}
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
                {generalInfoFirstRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderParentToggleSection(editMode = false) {
    const componentClassName = 'parent-block';
    const { t, entityRemovedId } = this.props;
    const disabledFilters =
      !!this.props.parent && (!this.props.parent || this.props.parent.filter((cn) => cn.status === SAVED).length >= 1);
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/parent')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="parent"
              component={FieldArrayParentPort}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parent}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'parent' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'parent' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'parent' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedParent}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'parent' ? entityRemovedId : null}
              disabledFilters={disabledFilters}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderConnectedToToggleSection(editMode = false) {
    const componentClassName = 'connected-to-block';
    const { t, entityRemovedId } = this.props;
    const disabledFilters =
      !!this.props.connected_to &&
      (!this.props.connected_to || this.props.connected_to.filter((cn) => cn.status === SAVED).length >= 1);
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/connected-to')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="connected_to"
              component={FieldArrayConnectedToPort}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.connected_to}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'connected_to' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'connected_to' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'connected_to' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedConnectedTo}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'connected_to' ? entityRemovedId : null}
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
            <h2>{t('general-forms/ports-used-by')}</h2>
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
export default _PortFormParentClass;
