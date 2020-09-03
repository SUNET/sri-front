import React from 'react';
import { FieldArray } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayDependencies from '../common/FieldArrayDependencies';
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

  renderDependenciesToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/dependencies')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="dependencies"
              component={FieldArrayDependencies}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedPort}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'dependencies' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _PeeringGroupFormParentClass;
