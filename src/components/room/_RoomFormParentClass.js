import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { arrayPush, FieldArray, Field, change } from 'redux-form';
// components
import { Form } from 'react-bootstrap';
import FieldInput from '../FieldInput';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayRacks from '../common/FieldArrayRacks';
import FieldArraySites from '../common/FieldArraySites';
// const
import renderFormBlockSection from '../common/BlockSection';
import { renderEquipmentsToggleSection, handleSelectedPhysical } from '../common/formsSections/LocatedInToggleSection';

class _RoomFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'room';
  ROUTE_LIST_DIRECTION = '/network/location-rooms';

  handleSelectedSite = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getSiteById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'sites', newEntity));
      });
    }
  };

  handleSelectedRack = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getRackById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'racks', newEntity));
      });
    }
  };

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
      if (fieldModalOpened === 'located_in') {
        handleSelectedPhysical({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'site') {
        this.handleSelectedSite(selectionData);
      } else if (fieldModalOpened === 'rack') {
        this.handleSelectedRack(selectionData);
      }
      return false;
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderSitesToggleSection(editMode)}
        {this.renderRacksToggleSection(editMode)}
        {renderEquipmentsToggleSection(editMode, this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode) {
    const componentClassName = 'general-info-block';
    const { t, floor } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/floor'),
        presentContent: floor,
        editContent: (
          <Form.Group>
            <Field type="text" name="floor" component={FieldInput} placeholder={t('general-forms/write-number')} />
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

  renderRacksToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'racks-list-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/location-racks')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="racks"
              component={FieldArrayRacks}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'rack' });
                this.props.showModalCreateForm('Rack');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'racks' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'racks' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedRack(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'racks' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
  renderSitesToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'sites-list-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/location-sites')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="sites"
              component={FieldArraySites}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'site' });
                this.props.showModalCreateForm('Site');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'sites' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'sites' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedSite(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'sites' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _RoomFormParentClass;
