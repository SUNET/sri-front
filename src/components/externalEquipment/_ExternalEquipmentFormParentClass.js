import React from 'react';
import { FieldArray, Field, arrayPush } from 'redux-form';
import { Form } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayPorts from './FieldArrayPorts';
import FieldArrayOwner from '../firewall/FieldArrayOwner';
// const
import { SAVED } from '../../utils/constants';

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

class _ExternalEquipmentFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'externalEquipment';
  ROUTE_LIST_DIRECTION = '/network/external-equipments';

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
      if (fieldModalOpened === 'owner') {
        this.handleSelectedNetworkOrganization(selectionData, methodName);
      } else if (fieldModalOpened === 'ports') {
        this.handleSelectedPort(selectionData);
      }
      return false;
    }
    return true;
  }

  handleSelectedNetworkOrganization = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        console.log('newEntity: ', newEntity);
        this.props.dispatch(arrayPush(this.props.form, 'owner', newEntity));
      });
    }
  };

  handleSelectedPort = (selection) => {
    if (selection !== null && selection.id) {
      this.props.getPortById(selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'ports', newEntity));
      });
    }
  };

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, rack_units, rack_position } = this.props;

    const locationInfoFirstRow = [
      {
        title: t('network.switch.details.equipment-height'),
        presentContent: rack_units,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="rack_units"
              component={FieldInput}
              placeholder={t('network.switch.details.write-equipment-height')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.rack-position'),
        presentContent: rack_position,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="rack_position"
              component={FieldInput}
              placeholder={t('network.switch.details.write-rack-position')}
            />
          </Form.Group>
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.firewall.details.location')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {locationInfoFirstRow.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderOwnerToggleSection(editMode = false) {
    const { t, owner, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('network.firewall.details.owner')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="owner"
              component={FieldArrayOwner}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'owner' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedNetworkOrganization}
              rerenderOnEveryChange={true}
              entityRemovedId={this.state.fieldModalOpened === 'owner' ? entityRemovedId : null}
              disabledFilters={owner && owner.filter((o) => o.status === SAVED).length > 0}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderPortsToggleSection(editMode = false) {
    const { t, entityRemovedId} = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('network.external-equipment.details.ports')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="ports"
              component={FieldArrayPorts}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'ports' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedPort}
              rerenderOnEveryChange={true}
              entityRemovedId={this.state.fieldModalOpened === 'ports' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _ExternalEquipmentFormParentClass;
