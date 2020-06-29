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

    const generalInfo = [
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
      {
        title: t('network.switch.details.contract-number'),
        presentContent: contract_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="contract_number"
              component={FieldInput}
              placeholder={t('general-forms.write-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.managed-by'),
        presentContent: firewallManagedByObj ? firewallManagedByObj.name : undefined,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="host_management_sw"
            name="managed_by"
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
    const { t, firewallModel, vendor, backup, end_support } = this.props;
    const detailsInfo = [
      {
        title: t('network.firewall.details.model'),
        presentContent: firewallModel,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="firewallModel"
              component={FieldInput}
              placeholder={t('general-forms.write-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.firewall.details.vendor'),
        presentContent: vendor,
        editContent: (
          <Form.Group>
            <Field type="text" name="vendor" component={FieldInput} placeholder={t('general-forms.write-text')} />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.backup'),
        presentContent: backup,
        editContent: (
          <Form.Group>
            <Field type="text" name="backup" component={FieldInput} placeholder={t('general-forms.write-text')} />
          </Form.Group>
        ),
      },
      {
        title: t('network.firewall.details.end-support'),
        presentContent: end_support,
        editContent: (
          <Form.Group>
            <Field type="text" name="end_support" component={FieldInput} placeholder={t('general-forms.write-text')} />
          </Form.Group>
        ),
      },
    ];
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.details')}</h2>
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
    // console.log(
    //   'security_class,securityClassObj,security_comment,supportGroupObj,support_group_id,responsibleGroupObj,responsible_group_id: ',
    //   security_class,
    //   securityClassObj,
    //   security_comment,
    //   supportGroupObj,
    //   support_group_id,
    //   responsibleGroupObj,
    //   responsible_group_id,
    // );
    const securityInfo = [];
    const securitySecondRowInfo = [
      {
        title: t('network.switch.details.support-group'),
        presentContent: supportGroupObj ? supportGroupObj.name : '',
        editContent: (
          <div className="mr-3">
            <Dropdown
              className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
              type="combo_list"
              name="support_group_id"
              model="group"
              placeholder={t('network.switch.details.write-support-group')}
              currentValue={support_group_id}
              objectCurrentValue={supportGroupObj}
              nameDataInsideRequest="all_groups"
              valueField="id"
              labelElementsArray={['name']}
              onChange={(newSupportGroup) => {
                this.props.dispatch(
                  change(this.props.form, 'support_group_id', newSupportGroup ? newSupportGroup.id : null),
                );
                this.props.dispatch(
                  change(this.props.form, 'supportGroupObj', newSupportGroup ? newSupportGroup : null),
                );
              }}
            />
          </div>
        ),
      },
      {
        title: t('network.switch.details.responsible-group'),
        presentContent: responsibleGroupObj ? responsibleGroupObj.name : '',
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="responsible_group_id"
            model="group"
            placeholder={t('network.switch.details.write-responsible-group')}
            currentValue={responsible_group_id}
            objectCurrentValue={responsibleGroupObj}
            nameDataInsideRequest="all_groups"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newSupportGroup) => {
              this.props.dispatch(
                change(this.props.form, 'responsible_group_id', newSupportGroup ? newSupportGroup.id : null),
              );
              this.props.dispatch(
                change(this.props.form, 'responsibleGroupObj', newSupportGroup ? newSupportGroup : null),
              );
            }}
          />
        ),
      },
    ];
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.security')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {securityInfo.map((formData, index) => {
                return renderFormBlockSection(editMode, formData, index);
              })}
            </div>
            <div className="form-internal-block">
              {securitySecondRowInfo.map((formData, index) => {
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
    // console.log(
    //   'os: TEXT, os_version: TEXT, max_number_of_ports: INT, service_tag: TEXT: ',
    //   os,
    //   os_version,
    //   max_number_of_ports,
    //   service_tag,
    // );
    const osInfo = [
      {
        title: t('network.switch.details.os'),
        presentContent: os,
        editContent: (
          <Form.Group>
            <Field type="text" name="os" component={FieldInput} placeholder={t('network.switch.details.write-os')} />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.os-version'),
        presentContent: os_version,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="os_version"
              component={FieldInput}
              placeholder={t('network.switch.details.write-os-version')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.max-number-of-ports'),
        presentContent: max_number_of_ports,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="max_number_of_ports"
              component={FieldInput}
              placeholder={t('network.switch.details.write-max-number-of-ports')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.firewall.details.service-tag'),
        presentContent: service_tag,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="service_tag"
              component={FieldInput}
              placeholder={t('network.switch.details.write-os-version')}
            />
          </Form.Group>
        ),
      },
    ];
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.os')}</h2>
        </ToggleHeading>
        <TogglePanel>
          <div>
            <div className="form-internal-block">
              {osInfo.map((formData, index) => {
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
    // console.log('rack_units, rack_position, ownerObj: ', rack_units, rack_position, ownerObj);
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
