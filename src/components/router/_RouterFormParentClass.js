import React from 'react';
import { Field, FieldArray, arrayPush } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayDependenciesMultiFields from '../common/FieldArrayDependenciesMultiFields';

// const
import { isBrowser } from 'react-device-detect';
import { SAVED, NEW } from '../../utils/constants';

import renderFormBlockSection from '../common/BlockSection';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';
import renderLocatedInSubTitleHeader from '../common/formsSections/LocatedInSubTitleHeader';

const PORT_TABLE_HEADER_TEXTS = {
  summary: [
    {
      text: 'general-forms/port-title',
      fieldKey: 'name',
    },
  ],
  all: [
    {
      text: 'general-forms/port-title',
      fieldKey: 'name',
    },
    {
      text: 'general-forms/description',
      fieldKey: 'description',
      showAllText: true,
    },
    {
      text: 'general-forms/type',
      fieldKey: 'type.name',
    },
    {
      text: 'general-forms/cable-title',
      fieldKey: 'cable.name',
      withLink: true,
      listElements: true,
    },
    {
      text: 'general-forms/end-equipment',
      fieldKey: 'endEquipment.name',
      withLink: true,
      listElements: true,
    },
    {
      text: 'general-forms/end-port',
      fieldKey: 'endPorts.name',
      withLink: true,
      listElements: true,
    },
    {
      text: 'general-forms/units-title',
      fieldKey: 'unit.name',
      withLink: true,
      listElements: true,
    },
    {
      text: 'general-forms/depends-on-port',
      fieldKey: 'dependsOnPort.name',
      withLink: true,
      listElements: true,
    },
  ],
  modal: ['general-forms/parent-element-detail'],
};

class _RouterFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'router';
  ROUTE_LIST_DIRECTION = '/network/routers';

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
      if (fieldModalOpened === 'ports') {
        handleSelectedPort({
          selection: selectionData,
          getMethod: this.props.getPortById,
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'dependents') {
        this.handleSelectedIsUsed(selectionData, methodName);
      }
      return false;
    }
    return true;
  }

  async handleSelectedIsUsed(selection, methodName) {
    const { dispatch, form } = this.props;
    if (selection) {
      const { id } = selection;
      const newEntity = await this.getSelectedLogical(id, this.props[methodName]);
      if (newEntity) dispatch(arrayPush(form, 'dependents', newEntity));
    }
    return null;
  }

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, location, dispatch, form } = this.props;
    return (
      <>
        {location && renderLocatedInSubTitleHeader(t('general-forms/located-in'), location)}
        {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {!isFromModal && renderPortsToggleSection(editMode, this, PORT_TABLE_HEADER_TEXTS)}
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
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/routers-used-by')}</h2>
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
}

export default _RouterFormParentClass;
