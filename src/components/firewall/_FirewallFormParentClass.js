import React from 'react';
import { FieldArray, change, Field, arrayPush } from 'redux-form';
import { Form } from 'react-bootstrap';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
// components
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import FieldInput from '../FieldInput';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import FieldArrayOwner from './FieldArrayOwner';

// const
import { SAVED } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

import { renderRackToggleSection } from '../common/formsSections/RackToggleSection';
import renderFormBlockSection from '../common/BlockSection';
import { renderPortsToggleSection, handleSelectedPort } from '../common/formsSections/PortsToggleSection';
import { renderBulkPortToggleSection } from '../common/formsSections/BulkPortToggleSection';
// import { renderLocationRackToggleSection } from '../common/formsSections/LocationRackToggleSection';


class _FirewallFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = undefined;
  FORM_ID = '';
  MODEL_NAME = 'firewall';
  ROUTE_LIST_DIRECTION = '/network/firewalls';

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
        this.handleSelectedNetworkOrganization(selectionData, methodName);
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

  handleSelectedNetworkOrganization = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.__typename,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'owner', newEntity));
      });
    }
  };

  renderSections(editMode) {
    const { t, rack_position, rack_units, isFromModal, /* location, dispatch, form*/ } = this.props;
    return (
      <>
        {/* {renderLocationRackToggleSection(editMode, { t, location, dispatch, form })} */}
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderDetailsToggleSection(editMode)}
        {this.renderSecurityToggleSection(editMode)}
        {this.renderOSToggleSection(editMode)}
        {renderRackToggleSection(editMode, { t, rack_position, rack_units })}
        {this.renderOwnerToggleSection(editMode)}
        {!isFromModal && renderPortsToggleSection(editMode, this)}
        {!isFromModal && editMode && renderBulkPortToggleSection(this)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, operational_state, contract_number, managed_by } = this.props;
    const generalInfo = [
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
    const { t, model, vendor, backup, end_support } = this.props;
    const detailsInfo = [
      {
        title: t('general-forms/model'),
        presentContent: model,
        editContent: (
          <Form.Group>
            <Field type="text" name="model" component={FieldInput} placeholder={t('general-forms/write-text')} />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/vendor'),
        presentContent: vendor,
        editContent: (
          <Form.Group>
            <Field type="text" name="vendor" component={FieldInput} placeholder={t('general-forms/write-text')} />
          </Form.Group>
        ),
      },
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
        title: t('general-forms/end-support'),
        presentContent: end_support,
        editContent: (
          <Form.Group>
            <DayPickerInput
              value={end_support}
              placeholder="yyyy-mm-dd"
              format="YYYY-MM-DD"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                locale: 'en',
                localeUtils: MomentLocaleUtils,
                numberOfMonths: 1,
              }}
              onDayChange={(newDate) => {
                const formattedDate = newDate ? formatDate(newDate, 'YYYY-MM-DD') : '';
                this.props.dispatch(change(this.props.form, 'end_support', formattedDate));
              }}
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
      securityClassObj,
      support_group_obj,
      support_group_id,
      responsible_group_obj,
      responsible_group_id,
    } = this.props;

    const securityInfo = [
      {
        title: t('general-forms/security-class'),
        presentContent: securityClassObj ? securityClassObj.name : undefined,
        editContent: (
          <Dropdown
            t={t}
            className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
            emptyLabel="Select type"
            type="security_classes"
            name="security_class"
            onChange={(e) => {}}
          />
        ),
      },
      {
        title: t('general-forms/security-comment'),
        presentContent: (
          <Form.Group>
            <Field
              as="textarea"
              rows="3"
              type="text"
              name="security_comment"
              disabled
              component={FieldInput}
              placeholder={t('general-forms/write-text')}
            />
          </Form.Group>
        ),
        editContent: (
          <Form.Group>
            <Field
              as="textarea"
              rows="3"
              type="text"
              name="security_comment"
              component={FieldInput}
              placeholder={t('general-forms/write-text')}
            />
          </Form.Group>
        ),
      },
    ];
    const securitySecondRowInfo = [
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
      </section>
    );
  }

  renderOSToggleSection(editMode = true) {
    const componentClassName = 'os';
    const { t, os, os_version, max_number_of_ports, service_tag } = this.props;

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
      {
        title: t('general-forms/service-tag'),
        presentContent: service_tag,
        editContent: (
          <Form.Group>
            <Field type="text" name="service_tag" component={FieldInput} placeholder={t('general-forms/write-text')} />
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

  renderOwnerToggleSection(editMode = false) {
    const componentClassName = 'owner-block';
    const { t, owner, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/owner')}</h2>
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
              handleSearchResult={this.handleSelectedNetworkOrganization}
              rerenderOnEveryChange
              entityRemovedId={entityRemovedId}
              disabledFilters={owner && owner.filter((o) => o.status === SAVED).length > 0}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _FirewallFormParentClass;
