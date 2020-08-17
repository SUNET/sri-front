import React from 'react';
import { FieldArray, change, Field, arrayPush } from 'redux-form';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import ConvertHostMutation from '../../mutations/host/ConvertHostMutation';
// components
import EditField from '../EditField';
import { Form, Col } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import FieldArrayOwner from '../firewall/FieldArrayOwner';
import FieldArrayHostUser from './FieldArrayHostUser';
import IpAddressesList from '../IpAddressesList';
import ConvertHostModal from './ConvertHostModal';
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
    return true;
  }

  handleSelectedOwner = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'owner', newEntity));
      });
    }
  };

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

  renderConvertHostCTA() {
    const { t } = this.props;
    return (
      <div className="cta-convert-host" onClick={this.onClickConvertHostCTA}>
        <button type="button" className="btn convert-host outline mr-3">
          <span>{t('host-modal.convert.to.cta')}</span>
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
    let placeHolderString = t('contact-details.name');
    if (kindOfName === 'last_name') {
      placeHolderString = t('contact-details.lastName');
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
        {IS_UPDATED_FORM && editMode && this.renderConvertHostCTA()}
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
    const { t, managed_by, host_type, ip_addresses, operational_state } = this.props;

    const generalInfo = [
      {
        title: t('network.switch.details.type'),
        presentContent: host_type,
        editContent: host_type,
      },
      {
        title: t('network.switch.details.managed-by'),
        presentContent: managed_by,
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
        title: t('network.switch.details.responsible-group'),
        presentContent: responsible_group_obj ? responsible_group_obj.name : '',
        editContent: (
          <Dropdown
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            type="combo_list"
            name="responsible_group_id"
            model="group"
            placeholder={t('network.switch.details.write-responsible-group')}
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
        title: t('network.switch.details.support-group'),
        presentContent: support_group_obj ? support_group_obj.name : '',
        editContent: (
          <div className="mr-3">
            <Dropdown
              className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
              type="combo_list"
              name="support_group_id"
              model="group"
              placeholder={t('network.switch.details.write-support-group')}
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
        title: t('network.switch.details.backup'),
        presentContent: backup,
        editContent: (
          <Form.Group>
            <Field type="text" name="backup" component={FieldInput} placeholder={t('general-forms.write-text')} />
          </Form.Group>
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
    ];
    return (
      <ToggleSection>
        <ToggleHeading>
          <h2>{t('network.switch.details.details')}</h2>
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
    );
  }

  renderOSToggleSection(editMode = true) {
    const { t, os, os_version } = this.props;

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
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedOwner}
              rerenderOnEveryChange={true}
              entityRemovedId={entityRemovedId}
              disabledFilters={owner && owner.filter((o) => o.status === SAVED).length > 0}
            />
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
            <h2>{t('network.host.details.host_user')}</h2>
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
              rerenderOnEveryChange={true}
              disabledFilters={host_user && host_user.filter((hu) => hu.status === SAVED).length > 0}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _HostFormParentClass;
