import React from 'react';
import { Field, FieldArray } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayRouterIsUsed from './FieldArrayRouterIsUsed';

// const
import { isBrowser } from 'react-device-detect';

import renderFormBlockSection from '../common/BlockSection';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';

class _RouterFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'router';
  ROUTE_LIST_DIRECTION = '/network/routers';

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
      if (fieldModalOpened === 'ports') {
        handleSelectedPort({
          selection: selectionData,
          getMethod: this.props.getPortById,
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      }
      return false;
    }
    return true;
  }

  handleSelectedIsUsed(selection) {
    console.log('selection: ', selection);
    // TODO: get details by id and __typename
    return {};
  }

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, location, dispatch, form } = this.props;
    return (
      <>
        {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && this.renderIsUsedToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, operational_state, model, version } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/operational-state'),
        presentContent: operational_state,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="operational_states"
            name="operational_state"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/model'),
        presentContent: model,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="model"
              component={FieldInput}
              disabled
              placeholder={t('general-forms/write-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/junos-version'),
        presentContent: version,
        editContent: (
          <Form.Group>
            <Field type="text" name="version" component={FieldInput} disabled />
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

  renderIsUsedToggleSection(editMode = true) {
    const componentClassName = 'is-used-block';
    const { t, dependents, entityRemovedId } = this.props;
    console.log('dependents: ', dependents);
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('++++used by')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <ToggleSection>
              <ToggleHeading>
                <h2>{t('general-forms/dependencies')}</h2>
              </ToggleHeading>

              <TogglePanel>
                <FieldArray
                  name="dependents"
                  component={FieldArrayRouterIsUsed}
                  editable={editMode}
                  dispatch={this.props.dispatch}
                  errors={this.props.formSyncErrors.parents}
                  metaFields={this.props.fields}
                  showRowEditModal={(typeEntityToShowForm, entityId) => {
                    this.setState({ fieldModalOpened: 'dependents' });
                    this.props.showModalEditForm(typeEntityToShowForm, entityId);
                  }}
                  showRowDetailModal={(typeEntityToShowForm, entityId) => {
                    this.setState({ fieldModalOpened: 'dependents' });
                    this.props.showModalDetailForm(typeEntityToShowForm, entityId);
                  }}
                  handleSearchResult={(selection) => {
                    this.handleSelectedIsUsed(selection);
                  }}
                  rerenderOnEveryChange
                  entityRemovedId={this.state.fieldModalOpened === 'dependents' ? entityRemovedId : null}
                />
              </TogglePanel>
            </ToggleSection>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _RouterFormParentClass;
