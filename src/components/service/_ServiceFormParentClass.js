import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { change } from 'redux-form';
import moment from 'moment';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import DayPickerInput from 'react-day-picker/DayPickerInput';
// const
import { isBrowser } from 'react-device-detect';

import renderFormBlockSection from '../common/BlockSection';

class _ServiceFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'service';
  ROUTE_LIST_DIRECTION = '/network/services';

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
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderSecurityToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const { t, operational_state, decommissioned_date, service_type_obj, currentClass } = this.props;
    const datePickerElement = (
      <Form.Group>
        <DayPickerInput
          value={decommissioned_date}
          placeholder="yyyy/mm/dd"
          format="YYYY/MM/DD"
          disabled={true}
          dayPickerProps={{
            locale: 'en',
            numberOfMonths: 1,
          }}
          onDayChange={(newDate) => {
            this.props.dispatch(change(this.props.form, 'decommissioned_date', moment(newDate).format('YYYY-MM-DD')));
          }}
        />
      </Form.Group>
    );
    const disabledDecommissedDateInput = (
      <Form.Group>
        <Form.Control type="text" name="" value="" disabled />
      </Form.Group>
    );
    const serviceTypeDropdown = (
      <Form.Group>
        <Dropdown
          t={t}
          className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
          emptyLabel="Select type"
          model="services_types"
          name="service_type_id"
          serviceClass={currentClass.originalName}
          onChange={(newValue) => {
            this.props.dispatch(change(this.props.form, 'service_type_id', newValue ? newValue.id : null));
            this.props.dispatch(change(this.props.form, 'service_type_obj', newValue ? newValue : null));
          }}
        />
      </Form.Group>
    );
    const generalInfo = [
      {
        title: t('general-forms/service-type'),
        presentContent: service_type_obj ? service_type_obj.name : '',
        editContent: serviceTypeDropdown,
      },
      {
        title: t('general-forms/operational-state'),
        presentContent: operational_state,
        editContent: (
          <Form.Group>
            <Dropdown
              t={t}
              className={`${isBrowser ? 'auto' : 'xlg mw-100'}`}
              emptyLabel="Select type"
              type="operational_states"
              name="operational_state"
              onChange={(e) => {}}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/decommissioned-date'),
        presentContent: operational_state === 'Decommissioned' ? decommissioned_date : disabledDecommissedDateInput,
        editContent: operational_state === 'Decommissioned' ? datePickerElement : disabledDecommissedDateInput,
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

  renderSecurityToggleSection(editMode = true) {
    const componentClassName = 'security-block';
    const { t, support_group_obj, support_group_id, responsible_group_obj, responsible_group_id } = this.props;
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
}

export default _ServiceFormParentClass;
