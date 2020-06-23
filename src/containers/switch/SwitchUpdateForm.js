import { connect } from 'react-redux';
import SwitchUpdateForm from '../../components/switch/SwitchUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';

const mapStateToProps = (state, props) => {
  const updateSwitchSelector = formValueSelector('updateSwitch');
  const switchData = props.switch;
  const initialValues = {
    id: switchData.id,
    name: switchData.name,
    description: switchData.description,
    managed_by: switchData.managed_by ? switchData.managed_by.value : undefined,
    switchManagedByObj: switchData.managed_by,
    operational_state: switchData.operational_state,
    ip_addresses: switchData.ip_addresses,
    contract_number: switchData.contract_number,
    backup: switchData.backup,
    rack_position: switchData.rack_position,
    os: switchData.os,
    os_version: switchData.os_version,
  };
  return {
    initialValues,
    name: updateSwitchSelector(state, 'name'),
    description: updateSwitchSelector(state, 'description'),
    managed_by: updateSwitchSelector(state, 'managed_by'),
    switchManagedByObj: updateSwitchSelector(state, 'switchManagedByObj'),
    operational_state: updateSwitchSelector(state, 'operational_state'),
    ip_addresses: updateSwitchSelector(state, 'ip_addresses'),
    contract_number: updateSwitchSelector(state, 'contract_number'),
    backup: updateSwitchSelector(state, 'backup'),
    rack_position: updateSwitchSelector(state, 'rack_position'),
    os: updateSwitchSelector(state, 'os'),
    os_version: updateSwitchSelector(state, 'os_version'),
    formSyncErrors: getFormSyncErrors('updateSwitch')(state),
    fields: getFormMeta('updateSwitch')(state),
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
  };
};
const SwitchUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchUpdateForm);

export default SwitchUpdateFormContainer;