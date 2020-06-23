import React from 'react';
import { change, FieldArray, Field } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';

// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import IpAddressesList from './IpAddressesList';

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
  renderGeneralInfoToggleSection(editMode = true) {
    const { t, switchManagedByObj, operational_state, ip_addresses } = this.props;
    const generalInfoFirstRow = [
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
        title: t('network.switch.details.ip-address'),
        presentContent: (
          <IpAddressesList
            ipList={ip_addresses ? ip_addresses : []}
            editMode={editMode}
            onChangeIpList={(newList) => {
              this.props.dispatch(change(this.props.form, 'ip_addresses', newList));
            }}
          />
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
      // {
      //   title: 'Phone',
      //   presentContent: (
      //     <FieldArray
      //       name="phones"
      //       t={t}
      //       component={ContactPhones}
      //       editable={editMode}
      //       dispatch={this.props.dispatch}
      //     />
      //   ),
      //   editContent: (
      //     <FieldArray
      //       name="phones"
      //       t={t}
      //       component={ContactPhones}
      //       editable={editMode}
      //       dispatch={this.props.dispatch}
      //     />
      //   ),
      // },
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
}

export default _SwitchFormParentClass;
