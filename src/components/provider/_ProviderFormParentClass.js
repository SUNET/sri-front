import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { arrayPush, FieldArray } from 'redux-form';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayProvides from '../common/FieldArrayProvides';
import { SAVED, NEW } from '../../utils/constants';
import {
  renderServiceListToggleSection,
  handleSelectedService,
} from '../common/formsSections/ServiceListToggleSection.js';
// const

function getSelectedProvide(selection, getMethod) {
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

async function handleSelectedProvide({ selection, getMethod, form, dispatch }) {
  const newEntity = await getSelectedProvide(selection, getMethod);
  if (newEntity) dispatch(arrayPush(form, 'provides', newEntity));
}

class _ProviderFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = '';
  ROUTE_LIST_DIRECTION = '';

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
      if (fieldModalOpened === 'provides') {
        handleSelectedProvide({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'uses') {
        handleSelectedService({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      }
      return false;
    }
    return true;
  }

  renderSections(editMode) {
    const { with_same_name } = this.props;
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {with_same_name && this.renderRelatedEntities(with_same_name)}
        {renderServiceListToggleSection(editMode, this)}
        {this.renderProvidesToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }
  renderProvidesToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'provide-list-block';
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/provides')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="provides"
              component={FieldArrayProvides}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'provides' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'provides' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'provides' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={async (selection, typeOfSelection) => {
                handleSelectedProvide({
                  selection,
                  getMethod: this.props[typeOfSelection],
                  form: this.props.form,
                  dispatch: this.props.dispatch,
                });
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'provides' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _ProviderFormParentClass;
