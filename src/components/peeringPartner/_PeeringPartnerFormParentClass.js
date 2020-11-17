import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { Field, FieldArray } from 'redux-form';
import { Form } from 'react-bootstrap';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import { generateURL } from '../../utils';
import { isBrowser } from 'react-device-detect';
import FieldInput from '../FieldInput';
// components
import FieldArrayPPartnersUsed from './FieldArrayPPartnersUsed';
// const

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

class _PeeringPartnerFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'peeringPartner';
  ROUTE_LIST_DIRECTION = '/network/peering-partners';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

  renderSections(editMode) {
    let { with_same_name } = this.props;
    return (
      <>
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderDependenciesToggleSection(editMode)}
        {with_same_name && this.renderRelatedEntities(with_same_name)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, peering_link, as_number } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('general-forms/as-number'),
        presentContent: as_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="as_number"
              component={FieldInput}
              disabled
              placeholder={t('general-forms/write-number')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/peering-db-link'),
        presentContent: (
          <a href={generateURL(peering_link)} target="_blank" rel="noopener noreferrer">
            {peering_link}
          </a>
        ),
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="peering_link"
              component={FieldInput}
              disabled
              placeholder={t('general-forms/write-website')}
            />
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

  renderDependenciesToggleSection(editMode = false) {
    const componentClassName = 'dependencies-block';
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/dependencies')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="resourcedUsed"
              component={FieldArrayPPartnersUsed}
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

export default _PeeringPartnerFormParentClass;
