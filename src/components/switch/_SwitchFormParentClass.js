import React from 'react';
import { change, Field } from 'redux-form';
import { Form } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import IpAddressesList from '../IpAddressesList';
import FieldInput from '../FieldInput';
// const
import { isBrowser } from 'react-device-detect';

import renderFormBlockSection from '../common/BlockSection';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';


class _SwitchFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'Switch';
  ROUTE_LIST_DIRECTION = '/network/switches';

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

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, location, dispatch, form } = this.props;
    return (
      <>
        {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderDetailsToggleSection(editMode)}
        {this.renderSecurityToggleSection(editMode)}
        {this.renderHostToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, managed_by, operational_state, ip_addresses, provider_id, provider_obj } = this.props;
    const generalInfoFirstRow = [];

    if (!this.IS_UPDATED_FORM) {
      // only for create Form
      generalInfoFirstRow.push({
        title: t('general-forms/type'),
        presentContent: null,
        editContent: (
          <Dropdown
            t={t}
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
          title: t('general-forms/managed-by'),
          presentContent: managed_by,
          editContent: (
            <Dropdown
              t={t}
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

    const generalInfoSecondRow = [
      {
        title: t('entity-name/provider'),
        presentContent: provider_obj ? provider_obj.name : '',
        editContent: (
          <Dropdown
            t={t}
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
      <section className={`model-section ${componentClassName}`}>
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
              <div className="form-internal-block">
                {generalInfoSecondRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderDetailsToggleSection(editMode = true) {
    const componentClassName = 'details-block';
    const { t, contract_number, backup } = this.props;
    const detailsInfo = [
      {
        title: t('general-forms/contract-number'),
        presentContent: contract_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="contract_number"
              component={FieldInput}
              placeholder={t('general-forms/write-number')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/contract-backup'),
        presentContent: backup,
        editContent: (
          <Form.Group>
            <Field type="text" name="backup" component={FieldInput} placeholder={t('general-forms/write-backup')} />
          </Form.Group>
        ),
      },
    ];

    return (
      <section className={`model-section ${componentClassName}`}>
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
      </section>
    );
  }

  renderSecurityToggleSection(editMode = true) {
    const componentClassName = 'security-block';
    const {
      t,
      os,
      os_version,
      support_group_id,
      supportGroupObj,
      responsible_group_id,
      responsibleGroupObj,
    } = this.props;

    const detailsInfoFirstRow = [
      {
        title: t('general-forms/os'),
        presentContent: os,
        editContent: (
          <Form.Group>
            <Field type="text" name="os" component={FieldInput} placeholder={t('general-forms/write-text')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/os-version'),
        presentContent: os_version,
        editContent: (
          <Form.Group>
            <Field type="text" name="os_version" component={FieldInput} placeholder={t('general-forms/write-text')} />
          </Form.Group>
        ),
      },
    ];

    const detailsInfoSecondRow = [
      {
        title: t('general-forms/support-group'),
        presentContent: supportGroupObj ? supportGroupObj.name : '',
        editContent: (
          <div className="mr-3">
            <Dropdown
              t={t}
              className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
              type="combo_list"
              name="support_group_id"
              model="group"
              placeholder={t('general-forms/write-support-group')}
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
        title: t('general-forms/responsible-group'),
        presentContent: responsibleGroupObj ? responsibleGroupObj.name : '',
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="responsible_group_id"
            model="group"
            placeholder={t('general-forms/write-responsible-group')}
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
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/security')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {detailsInfoFirstRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="form-internal-block">
                {detailsInfoSecondRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderHostToggleSection(editMode = true) {
    const componentClassName = 'host-block';
    const { t, max_number_of_ports } = this.props;
    const detailsInfo = [
      {
        title: t('general-forms/max-number-of-ports'),
        presentContent: max_number_of_ports,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="max_number_of_ports"
              component={FieldInput}
              placeholder={t('general-forms/write-number')}
            />
          </Form.Group>
        ),
      },
    ];

    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('entity-name/host')}</h2>
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
      </section>
    );
  }
}

export default _SwitchFormParentClass;
