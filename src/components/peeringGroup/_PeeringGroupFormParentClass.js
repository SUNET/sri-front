import React from 'react';
import { FieldArray } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayResourcesUsed from './FieldArrayResourcesUsed';
// const

class _PeeringGroupFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'peeringGroup';
  ROUTE_LIST_DIRECTION = '/network/peering-groups';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderDependenciesToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderDependenciesToggleSection(editMode = false) {
    const componentClassName = 'dependencies-block';
    const { t, entityRemovedId, resourcedUsed } = this.props;
    console.log('resourcedUsed: ', resourcedUsed);
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/dependencies')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="resourcedUsed"
              component={FieldArrayResourcesUsed}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'resourcedUsed' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'resourcedUsed' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedPort}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'resourcedUsed' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _PeeringGroupFormParentClass;
