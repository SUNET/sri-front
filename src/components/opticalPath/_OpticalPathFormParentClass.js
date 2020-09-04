import React from 'react';
import { Field, change } from 'redux-form';
import { Form, Col } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import FieldInput from '../FieldInput';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
// const
import renderFormBlockSection from '../common/BlockSection';
import { isBrowser } from 'react-device-detect';

class _OpticalPathFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'opticalPath';
  ROUTE_LIST_DIRECTION = '/network/optical-paths';

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
        {this.renderModelMainSection(editMode)}
        {this.renderWorkLog()}
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
            <hr />
            <Col>{this.renderDetailsToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, operational_state, framing, capacity, wavelength } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/framing'),
        presentContent: framing,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_path_framing"
            name="framing"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/capacity'),
        presentContent: capacity,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="optical_path_capacity"
            name="capacity"
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
      {
        title: t('general-forms/wavelength'),
        presentContent: wavelength,
        editContent: (
          <Form.Group>
            <Field type="text" name="wavelength" component={FieldInput} placeholder={t('general-forms/write-number')} />
          </Form.Group>
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
              {generalInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }
  renderDetailsToggleSection(editMode = true) {
    const { t, provider_obj, provider_id } = this.props;
    const detailsInfo = [
      {
        title: t('entity-name/provider'),
        presentContent: provider_obj ? provider_obj.name : '',
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="provider_id"
            model="provider"
            placeholder={t('search-filter.search-providers')}
            currentValue={provider_id}
            objectCurrentValue={provider_obj}
            nameDataInsideRequest="all_providers"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newProvider) => {
              this.props.dispatch(change(this.props.form, 'provider_id', newProvider ? newProvider.id : null));
              this.props.dispatch(change(this.props.form, 'provider_obj', newProvider ? newProvider : null));
            }}
          />
        ),
      },
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('general-forms/details')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {detailsInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }
}

export default _OpticalPathFormParentClass;
