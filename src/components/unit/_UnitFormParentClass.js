import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { Field, FieldArray, arrayPush } from 'redux-form';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayUsedBy from '../common/FieldArrayUsedBy';
// const
import { SAVED } from '../../utils/constants';
import renderFormBlockSection from '../common/BlockSection';

class _UnitFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'unit';
  ROUTE_LIST_DIRECTION = '/network/units';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    console.log(this.props);
    const { t } = this.props;
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderIsUsedToggleSection(editMode, 'dependents', 'is-used-block-dependents', t('--->dependents'))}
        {this.renderIsUsedToggleSection(editMode, 'dependencies', 'is-used-block-dependencies', t('--->dependencies'))}
        {this.renderWorkLog()}
      </>
    );
  }

  renderIsUsedToggleSection(editMode = true, fieldName, componentClassName, headerText) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{headerText}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              preFilter={false}
              name={fieldName}
              component={FieldArrayUsedBy}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: fieldName });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: fieldName });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedIsUsed(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === fieldName ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _UnitFormParentClass;
