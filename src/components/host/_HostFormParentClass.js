import React from 'react';
import { FieldArray, change, Field, arrayPush } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import ConvertHostMutation from '../../mutations/host/ConvertHostMutation';
// components
import EditField from '../EditField';
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayOwner from '../common/FieldArrayOwner';
import FieldArrayHostUser from './FieldArrayHostUser';
import IpAddressesList from '../IpAddressesList';
import ConvertHostModal from './ConvertHostModal';
// const
import { SAVED } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import { renderOwnerToggleSection, handleSelectedOwner } from '../common/formsSections/OwnerToggleSection';
import renderFormBlockSection from '../common/BlockSection';

import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';

class _HostFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'host';
  ROUTE_LIST_DIRECTION = '/network/hosts';

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
        handleSelectedOwner({
          selection: selectionData,
          getMethod: this.props[methodName],
          form: this.props.form,
          dispatch: this.props.dispatch,
        });
      } else if (fieldModalOpened === 'ports') {
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

  handleSelectedHostUser = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'host_user', newEntity));
      });
    }
  };

  onClickConvertHostCTA = () => {
    this.showConvertHostModal();
  };

  showConvertHostModal() {
    this.setState({ visibleConvertHostModal: true });
  }

  clickInConvertHostOption = (optionName) => {
    ConvertHostMutation(
      {
        id: this.props.host.id,
        slug: optionName,
      },
      this,
    );
  };

  renderSections(editMode) {
    const { host_type, t, rack_position, rack_units, isFromModal, location, dispatch, form } = this.props;
    const isLogicalHost = host_type === 'Logical';
    return (
      <>
        {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderDetailsToggleSection(editMode)}
        {this.renderOSToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {(!this.IS_UPDATED_FORM || (this.IS_UPDATED_FORM && !isLogicalHost)) &&
          renderOwnerToggleSection(editMode, this)}
        {this.IS_UPDATED_FORM && isLogicalHost && this.renderHostUserToggleSection(editMode)}
        {!isLogicalHost && !isFromModal && renderPortsToggleSection(editMode, this)}
        {!isLogicalHost && !isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog(editMode)}
      </>
    );
  }

  renderConvertHostCTA() {
    const { t } = this.props;
    return (
      <div className="cta-convert-host" onClick={this.onClickConvertHostCTA}>
        <button type="button" className="btn convert-host outline mr-3">
          <span>{t('host-modal/convert-to-cta')}</span>
        </button>
      </div>
    );
  }

  renderConvertHostModal() {
    const { visibleConvertHostModal } = this.state;
    return (
      <ConvertHostModal
        isVisibleModal={visibleConvertHostModal}
        onHide={() => this.setState({ visibleConvertHostModal: false })}
        clickInConvertHostOption={this.clickInConvertHostOption}
      ></ConvertHostModal>
    );
  }

  renderInputName(kindOfName, editMode = true) {
    // INFO: kindOfName = 'first_name' || 'last_name' || 'name'
    const { t, formSyncErrors, fields, form, dispatch } = this.props;
    let placeHolderString = t('general-forms/name');
    if (kindOfName === 'last_name') {
      placeHolderString = t('general-forms/last-name');
    }
    return (
      <>
        <EditField
          error={formSyncErrors[kindOfName]}
          meta={fields[kindOfName]}
          form={form}
          dispatch={dispatch}
          editable={editMode}
          placeholder={placeHolderString}
          name={kindOfName}
        >
          <h1>{this.props[kindOfName]}</h1>
        </EditField>
        {this.IS_UPDATED_FORM && editMode && this.renderConvertHostCTA()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, managed_by, host_type, ip_addresses, operational_state } = this.props;

    const generalInfo = [
      {
        title: t('general-forms/type'),
        presentContent: host_type,
        editContent: host_type,
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

  renderDetailsToggleSection(editMode = true) {
    const componentClassName = 'details-block';
    const {
      t,
      support_group_obj,
      support_group_id,
      responsible_group_obj,
      responsible_group_id,
      contract_number,
      backup,
    } = this.props;
    const detailsRowInfo = [
      {
        title: t('general-forms/responsible-group'),
        presentContent: responsible_group_obj ? responsible_group_obj.name : '',
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="responsible_group_id"
            model="group"
            placeholder={t('general-forms/write-responsible-group')}
            currentValue={responsible_group_id}
            objectCurrentValue={responsible_group_obj}
            nameDataInsideRequest="all_groups"
            valueField="id"
            labelElementsArray={['name']}
            onChange={(newSupportGroup) => {
              this.props.dispatch(
                change(this.props.form, 'responsible_group_id', newSupportGroup ? newSupportGroup.id : null),
              );
              this.props.dispatch(
                change(this.props.form, 'responsible_group_obj', newSupportGroup ? newSupportGroup : null),
              );
            }}
          />
        ),
      },
      {
        title: t('general-forms/support-group'),
        presentContent: support_group_obj ? support_group_obj.name : '',
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
              objectCurrentValue={support_group_obj}
              nameDataInsideRequest="all_groups"
              valueField="id"
              labelElementsArray={['name']}
              onChange={(newSupportGroup) => {
                this.props.dispatch(
                  change(this.props.form, 'support_group_id', newSupportGroup ? newSupportGroup.id : null),
                );
                this.props.dispatch(
                  change(this.props.form, 'support_group_obj', newSupportGroup ? newSupportGroup : null),
                );
              }}
            />
          </div>
        ),
      },
    ];
    const detailsSecondRow = [
      {
        title: t('general-forms/contract-backup'),
        presentContent: backup,
        editContent: (
          <Form.Group>
            <Field type="text" name="backup" component={FieldInput} placeholder={t('general-forms/write-text')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/contract-number'),
        presentContent: contract_number,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              name="contract_number"
              component={FieldInput}
              placeholder={t('general-forms/write-text')}
            />
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
                {detailsSecondRow.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
              <div className="form-internal-block">
                {detailsRowInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderOSToggleSection(editMode = true) {
    const { t, os, os_version } = this.props;
    const componentClassName = 'os-block';

    const osInfo = [
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
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/os')}</h2>
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
      </section>
    );
  }

  renderHostUserToggleSection(editMode = false) {
    const { t, host_user } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/host-user')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="host_user"
              component={FieldArrayHostUser}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleSearchResult={(selection) => {
                this.handleSelectedHostUser(selection, 'getHostUserById');
              }}
              rerenderOnEveryChange
              disabledFilters={host_user && host_user.filter((hu) => hu.status === SAVED).length > 0}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _HostFormParentClass;
