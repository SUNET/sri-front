import React from 'react';
import { change, Field } from 'redux-form';
import { Form, Col } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';

// const
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

class _FirewallFormParentClass extends _BasicFormParentClass {
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
            <hr />
            <Col>{this.renderSecurityToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderOSToggleSection(editMode)}</Col>
            <hr />
            <Col>{this.renderLocationToggleSection(editMode)}</Col>
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, operational_state, contract_number, managed_by, firewallManagedByObj } = this.props;
    console.log(
      'operational_state, contract_number, managed_by, firewallManagedByObj: ',
      operational_state,
      contract_number,
      managed_by,
      firewallManagedByObj,
    );

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('organization-details.general-information')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {[[]].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {[].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderDetailsToggleSection(editMode = true) {
    const { t, firewallModel, vendor, backup, end_support } = this.props;
    console.log('firewallModel, vendor, backup, end_support: ', firewallModel, vendor, backup, end_support);
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.details')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {[[]].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {[].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderSecurityToggleSection(editMode = true) {
    const {
      t,
      security_class,
      securityClassObj,
      security_comment,
      supportGroupObj,
      support_group_id,
      responsibleGroupObj,
      responsible_group_id,
    } = this.props;
    console.log(
      'security_class,securityClassObj,security_comment,supportGroupObj,support_group_id,responsibleGroupObj,responsible_group_id: ',
      security_class,
      securityClassObj,
      security_comment,
      supportGroupObj,
      support_group_id,
      responsibleGroupObj,
      responsible_group_id,
    );
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.security')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {[[]].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {[].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderOSToggleSection(editMode = true) {
    const { t, os, os_version, max_number_of_ports, service_tag } = this.props;
    console.log('os, os_version, max_number_of_ports, service_tag: ', os, os_version, max_number_of_ports, service_tag);
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.os')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {[[]].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {[].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }

  renderLocationToggleSection(editMode = true) {
    const { t, rack_units, rack_position, ownerObj } = this.props;
    console.log('rack_units, rack_position, ownerObj: ', rack_units, rack_position, ownerObj);
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.firewall.details.location')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {[[]].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {[].map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
          </div>
        </TogglePanel>
      </ToggleSection>
    );
  }
}

export default _FirewallFormParentClass;
