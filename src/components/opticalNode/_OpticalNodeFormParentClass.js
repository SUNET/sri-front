import React from 'react';
import { FieldArray, change, Field, arrayPush } from 'redux-form';
import { Form, Col } from 'react-bootstrap';

// components
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import Dropdown from '../Dropdown';
import FieldInput from '../FieldInput';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayPorts from '../externalEquipment/FieldArrayPorts';
// const
import { SAVED } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

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

class _OpticalNodeFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'opticalNode';
  ROUTE_LIST_DIRECTION = '/network/optical-nodes';

  shouldComponentUpdate(nextProps, nextState) {
    const confirmedDelete = !this.props.isDeleteConfirmed && nextProps.isDeleteConfirmed;
    if (confirmedDelete && nextProps.confirmModalType === 'partialDelete') {
      this.props.hideModalConfirm();
      this.updateMutation(this.entityDataToUpdate, this);
    }
    return true;
  }

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

  renderModelMainSection(editMode = true) {
    return (
      <section className="model-section">
        <Form.Row>
          <Col>
            <Col>{this.renderDescriptionToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderGeneralInfoToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderLocationToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, type, operational_state } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('organization-details.type'),
        presentContent: type,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_link_types"
            name="type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('network.firewall.details.operational-state'),
        presentContent: operational_state,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="operational_states"
            name="operational_state"
            onChange={(e) => {}}
          />
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.general-information')}</h2>
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
    );
  }

  renderLocationToggleSection(editMode = true) {
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
      {
        title: t('network.optical-layers.details.rack-back'),
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

  renderPortsToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
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

export default _OpticalNodeFormParentClass;
