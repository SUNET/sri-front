import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { arrayPush, FieldArray } from 'redux-form';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';

import FieldArraySites from '../common/FieldArraySites';

// const

class _SiteOwnerFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = '';
  ROUTE_LIST_DIRECTION = '';

  handleSelectedSite = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getSiteById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
          country: entity.country,
          owner_id: entity.owner_id,
        };
        this.props.dispatch(arrayPush(this.props.form, 'responsible_for', newEntity));
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
      if (fieldModalOpened === 'responsible_for') {
        this.handleSelectedSite(selectionData);
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
        {this.renderSitesToggleSection(editMode)}
        {with_same_name && this.renderRelatedEntities(with_same_name)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderSitesToggleSection(editMode) {
    const { t, entityRemovedId } = this.props;
    const componentClassName = 'sites-list-block';
    const headerConfig = {
      summary: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
      ],
      all: [
        {
          text: 'general-forms/name',
          fieldKey: 'name',
        },
        {
          text: 'general-forms/country',
          fieldKey: 'country.name',
        },
        {
          text: 'general-forms/owner-id',
          fieldKey: 'owner_id',
        },
      ],
      modal: ['general-forms/parent-element-detail'],
    };
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/location-sites')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="responsible_for"
              component={FieldArraySites}
              headerConfig={headerConfig}
              fieldNameInForm="responsible_for"
              internalFilter={{
                text: {
                  fieldsAffected: ['name'],
                },
              }}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.located_in}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'responsible_for' });
                this.props.showModalCreateForm('Site');
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'responsible_for' });
                this.props.showModalEditForm('Site', entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'responsible_for' });
                this.props.showModalDetailForm('Site', entityId);
              }}
              handleSearchResult={(selection) => {
                this.handleSelectedSite(selection);
              }}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'responsible_for' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _SiteOwnerFormParentClass;
