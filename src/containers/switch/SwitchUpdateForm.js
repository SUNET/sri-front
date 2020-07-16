import { connect } from 'react-redux';
import SwitchUpdateForm from '../../components/switch/SwitchUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as formModalActions from '../../actions/FormModal';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateSwitchInModal' : 'updateSwitch';
  const updateSwitchSelector = formValueSelector(formName);
  const switchData = props.switch;
  const initialValues = {
    id: switchData.id,
    name: switchData.name,
    description: switchData.description,
    managed_by: switchData.managed_by ? switchData.managed_by.value : undefined,
    switchManagedByObj: switchData.managed_by,
    operational_state: switchData.operational_state,
    ip_addresses: switchData.ip_addresses,
    providerObj: switchData.provider ? switchData.provider : undefined,
    provider_id: switchData.provider ? switchData.provider.id : undefined,
    contract_number: switchData.contract_number,
    backup: switchData.backup,
    rack_units: switchData.rack_units,
    rack_position: switchData.rack_position,
    os: switchData.os,
    os_version: switchData.os_version,
    supportGroupObj: switchData.support_group ? switchData.support_group : undefined,
    support_group_id: switchData.support_group ? switchData.support_group.id : undefined,
    responsibleGroupObj: switchData.responsible_group ? switchData.responsible_group : undefined,
    responsible_group_id: switchData.responsible_group ? switchData.responsible_group.id : undefined,
    max_number_of_ports: switchData.max_number_of_ports,
  };

  return {
    initialValues,
    form: formName,
    name: updateSwitchSelector(state, 'name'),
    description: updateSwitchSelector(state, 'description'),
    managed_by: updateSwitchSelector(state, 'managed_by'),
    switchManagedByObj: updateSwitchSelector(state, 'switchManagedByObj'),
    ip_addresses: updateSwitchSelector(state, 'ip_addresses'),
    provider_id: updateSwitchSelector(state, 'provider_id'),
    providerObj: updateSwitchSelector(state, 'providerObj'),
    operational_state: updateSwitchSelector(state, 'operational_state'),
    contract_number: updateSwitchSelector(state, 'contract_number'),
    backup: updateSwitchSelector(state, 'backup'),
    rack_units: updateSwitchSelector(state, 'rack_units'),
    rack_position: updateSwitchSelector(state, 'rack_position'),
    os: updateSwitchSelector(state, 'os'),
    os_version: updateSwitchSelector(state, 'os_version'),
    support_group_id: updateSwitchSelector(state, 'support_group_id'),
    supportGroupObj: updateSwitchSelector(state, 'supportGroupObj'),
    responsible_group_id: updateSwitchSelector(state, 'responsible_group_id'),
    responsibleGroupObj: updateSwitchSelector(state, 'responsibleGroupObj'),
    max_number_of_ports: updateSwitchSelector(state, 'max_number_of_ports'),
    formSyncErrors: getFormSyncErrors('updateSwitch')(state),
    fields: getFormMeta('updateSwitch')(state),
    isFromModal: Boolean(props.isFromModal),
    isEditModeModal: Boolean(props.isFromModal && state.formModal.editing),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  };
};
const SwitchUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchUpdateForm);

export default SwitchUpdateFormContainer;
