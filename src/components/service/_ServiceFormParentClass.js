import React from 'react';
import _BasicFormParentClass from '../common/_BasicFormParentClass';
import { arrayPush, change, Field, FieldArray } from 'redux-form';
import moment from 'moment';
// components
import { Form } from 'react-bootstrap';
import Dropdown from '../Dropdown';
import ToggleSection, { ToggleHeading, TogglePanel } from '../../components/ToggleSection';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import FieldInput from '../FieldInput';
import FieldArrayDependsOn from './FieldArrayDependsOn';
import FieldArrayUsers from './FieldArrayUsers';
// const
import { SAVED, NEW } from '../../utils/constants';
import { isBrowser } from 'react-device-detect';

import renderFormBlockSection from '../common/BlockSection';

class _ServiceFormParentClass extends _BasicFormParentClass {
  // GLOBAL VARs
  IS_UPDATED_FORM = false;
  FORM_ID;
  MODEL_NAME = 'service';

  constructor(props) {
    super(props);
    if (!props.isFromModal) {
      this.ROUTE_LIST_DIRECTION = `/network/${props.currentClass?.path}`;
    }
  }

  backToList = () => {
    const [, blockPath, entityPath] = this.props?.history?.location?.pathname?.split('/');
    this.props.history.push(`/${blockPath}/${entityPath}`);
  };

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
      if (fieldModalOpened === 'dependencies') {
        this.handleSelectedDependency(selectionData, methodName);
      } else if (fieldModalOpened === 'users') {
        this.handleSelectedNetworkOrganization(selectionData, methodName);
      }
      return false;
    }
    return true;
  }

  handleSelectedDependency = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          __typename: entity.__typename,
          name: entity.name,
          description: entity.description,
          type: entity.type,
          entityType: {
            name: entity.__typename,
          },
          id: entity.id,
          status: SAVED,
          origin: NEW,
        };
        if (entity.operational_state) {
          newEntity.operational_state = entity.operational_state;
        }
        this.props.dispatch(arrayPush(this.props.form, 'dependencies', newEntity));
      });
    }
  };

  handleSelectedNetworkOrganization = (selection, typeOfSelection) => {
    if (selection !== null && selection.id) {
      this.props[typeOfSelection](selection.id).then((entity) => {
        const newEntity = {
          type: entity.type,
          __typename: entity.__typename,
          name: entity.name,
          id: entity.id,
          status: 'saved',
        };
        this.props.dispatch(arrayPush(this.props.form, 'users', newEntity));
      });
    }
  };

  renderInputName(kindOfName, editMode = true) {
    const { name } = this.props;
    return <h1>{name}</h1>;
  }

  renderSections(editMode) {
    return (
      <>
        {this.renderDescriptionToggleSection(editMode)}
        {this.renderGeneralInfoToggleSection(editMode)}
        {this.renderSecurityToggleSection(editMode)}
        {this.renderDependsOnToggleSection(editMode)}
        {this.renderUsersToggleSection(editMode)}
        {this.renderNCSFieldsToggleSection(editMode)}
        {this.renderWorkLog()}
      </>
    );
  }

  renderGeneralInfoToggleSection(editMode = true) {
    const componentClassName = 'general-info-block';
    const {
      t,
      operational_state,
      decommissioned_date,
      service_type_obj,
      currentClass,
      provider_id,
      provider_obj,
      project_end_date,
    } = this.props;

    const datePickerElement = (formElementName, value) => {
      return (
        <Form.Group>
          <DayPickerInput
            value={value}
            placeholder="yyyy/mm/dd"
            format="YYYY/MM/DD"
            disabled={true}
            dayPickerProps={{
              locale: 'en',
            }}
            onDayChange={(newDate) => {
              this.props.dispatch(change(this.props.form, formElementName, moment(newDate).format('YYYY-MM-DD')));
            }}
          />
        </Form.Group>
      );
    };
    const disabledDateInput = (
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
          serviceClass={currentClass?.originalName}
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
        presentContent: operational_state === 'Decommissioned' ? decommissioned_date : disabledDateInput,
        editContent:
          operational_state === 'Decommissioned'
            ? datePickerElement('decommissioned_date', decommissioned_date)
            : disabledDateInput,
      },
    ];

    if (currentClass?.originalName === 'IP') {
      generalInfo.push({
        title: t('general-forms/end-project-date'),
        presentContent: service_type_obj && service_type_obj.name === 'Project' ? project_end_date : disabledDateInput,
        editContent:
          service_type_obj && service_type_obj.name === 'Project'
            ? datePickerElement('project_end_date', project_end_date)
            : disabledDateInput,
      });
    }

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
                {generalInfo.map((formData, index) => {
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

  renderNCSFieldsToggleSection(editMode = true) {
    const componentClassName = 'ncsfFiels-block';
    const { t, ncs_service_name, vpn_type, vlan, vrf_target } = this.props;
    const ncsFieldsInfo = [
      {
        title: t('general-forms/ncs-service-name'),
        presentContent: ncs_service_name,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="ncs_service_name"
              component={FieldInput}
              placeholder={t('general-forms/short-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/vpn-type'),
        presentContent: vpn_type,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="vpn_type"
              component={FieldInput}
              placeholder={t('general-forms/short-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/vlan'),
        presentContent: vlan,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="vlan"
              component={FieldInput}
              placeholder={t('general-forms/short-text')}
            />
          </Form.Group>
        ),
      },
      {
        title: t('general-forms/vrf-target'),
        presentContent: vrf_target,
        editContent: (
          <Form.Group>
            <Field
              type="text"
              className={`${isBrowser ? 'xlg' : 'xlg mw-100'}`}
              name="vrf_target"
              component={FieldInput}
              placeholder={t('general-forms/short-text')}
            />
          </Form.Group>
        ),
      },
    ];
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/ncs-fields')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <div>
              <div className="form-internal-block">
                {ncsFieldsInfo.map((formData, index) => {
                  return renderFormBlockSection(editMode, formData, index);
                })}
              </div>
            </div>
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderDependsOnToggleSection(editMode = true) {
    const componentClassName = 'depends-on-block';
    const { t, entityRemovedId } = this.props;
    return (
      <section className={`model-section ${componentClassName}`}>
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/service-depend-on')}</h2>
          </ToggleHeading>
          <TogglePanel>
            <FieldArray
              name="dependencies"
              component={FieldArrayDependsOn}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.dependencies}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'dependencies' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedDependency}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'dependencies' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }

  renderUsersToggleSection(editMode = false) {
    const { t, entityRemovedId } = this.props;
    return (
      <section className="model-section">
        <ToggleSection>
          <ToggleHeading>
            <h2>{t('general-forms/users')}</h2>
          </ToggleHeading>

          <TogglePanel>
            <FieldArray
              name="users"
              component={FieldArrayUsers}
              editable={editMode}
              dispatch={this.props.dispatch}
              errors={this.props.formSyncErrors.parents}
              metaFields={this.props.fields}
              handleDeployCreateForm={(typeEntityToShowForm) => {
                this.setState({ fieldModalOpened: 'users' });
                this.props.showModalCreateForm(typeEntityToShowForm);
              }}
              showRowEditModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'users' });
                this.props.showModalEditForm(typeEntityToShowForm, entityId);
              }}
              showRowDetailModal={(typeEntityToShowForm, entityId) => {
                this.setState({ fieldModalOpened: 'users' });
                this.props.showModalDetailForm(typeEntityToShowForm, entityId);
              }}
              handleSearchResult={this.handleSelectedNetworkOrganization}
              rerenderOnEveryChange
              entityRemovedId={this.state.fieldModalOpened === 'users' ? entityRemovedId : null}
            />
          </TogglePanel>
        </ToggleSection>
      </section>
    );
  }
}

export default _ServiceFormParentClass;
