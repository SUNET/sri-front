import React from 'react';
import { FieldArray, arrayPush } from 'redux-form';
import { Form, Col } from 'react-bootstrap';

// components
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldArrayPorts from '../common/FieldArrayPorts';
import BulPort from '../common/BulkPort';
// const
import { isBrowser } from 'react-device-detect';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import renderFormBlockSection from '../common/BlockSection';

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

  renderSections(editMode) {
    const { t, rack_position, rack_units } = this.props;
    return (
      <>
        {this.renderModelMainSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {this.renderPortsToggleSection(editMode)}
        {editMode && this.renderBulkPortToggleSection()}
        {this.renderWorkLog(editMode)}
      </>
    );
  }

  renderModelMainSection(editMode = true) {
    return (
      <section className="model-section">
        <Form.Row>
          <Col>
            <Col>{this.renderDescriptionToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderGeneralInfoToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, type, operational_state } = this.props;
    const generalInfoFirstRow = [
      {
        title: t('general-forms/type'),
        presentContent: type,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_node_types"
            name="type"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/operational-state'),
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
    );
  }

  renderPortsToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('main-entity-name/ports')}</h2>
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
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'ports' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderBulkPortToggleSection() {
    const { t } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/bulk-port')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <BulPort
              handleBulkPortResponse={(dataForBulkPortCreate) => {
                dataForBulkPortCreate.forEach((portData) => {
                  this.props.dispatch(arrayPush(this.props.form, 'ports', portData));
                });
              }}
            ></BulPort>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _OpticalNodeFormParentClass;
