import React from 'react';
import { change, Field } from 'redux-form';
import { Form, Col } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import IpAddressesList from './IpAddressesList';
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

class _SwitchFormParentClass extends _BasicFormParentClass {
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
          </Col>
        </Form.Row>
      </section>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const { t, switchManagedByObj, operational_state, ip_addresses } = this.props;
    let generalInfoFirstRow = [];

    if (!this.IS_UPDATED_FORM) {
      // only for create Form
      generalInfoFirstRow.push({
        title: t('network.switch.details.type'),
        presentContent: operational_state,
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            model="switch_types"
            name="switch_type"
            onChange={(e) => {}}
          />
        ),
      });
    }

    generalInfoFirstRow.push(
      ...[
        {
          title: t('network.switch.details.status'),
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
          title: t('network.switch.details.managed-by'),
          presentContent: switchManagedByObj ? switchManagedByObj.name : undefined,
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
        {
          title: t('network.switch.details.ip-address'),
          presentContent: (
            <IpAddressesList ipList={ip_addresses ? ip_addresses : []} editMode={editMode} onChangeIpList={() => {}} />
          ),
          editContent: (
            <IpAddressesList
              ipList={ip_addresses ? ip_addresses : []}
              editMode={editMode}
              onChangeIpList={(newList) => {
                this.props.dispatch(change(this.props.form, 'ip_addresses', newList));
              }}
            />
          ),
        },
      ],
    );

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

  renderDetailsToggleSection(editMode = true) {
    const { t, contract_number, backup, rack_position } = this.props;
    const detailsInfo = [
      {
        title: t('network.switch.details.contract-number'),
        presentContent: contract_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="contract_number"
              component={FieldInput}
              placeholder={t('network.switch.details.write-contract-number')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('network.switch.details.backup'),
        presentContent: backup,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="backup"
              component={FieldInput}
              placeholder={t('network.switch.details.write-backup')}
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
    const { t, os, os_version } = this.props;
    const detailsInfo = [
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
    ];

    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.security')}</h2>
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

export default _SwitchFormParentClass;