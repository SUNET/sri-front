import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import CreateSwitchForm from '../../components/switch/CreateSwitchForm';

const mapStateToProps = (state, props) => {
  const updateSwitchSelector = formValueSelector('createSwitch');
  return {
    fields: getFormMeta('createSwitch')(state),
    formSyncErrors: getFormSyncErrors('createSwitch')(state),
    name: updateSwitchSelector(state, 'name'),
    managed_by: updateSwitchSelector(state, 'managed_by'),
    switch_type: updateSwitchSelector(state, 'switch_type'),
    switchManagedByObj: updateSwitchSelector(state, 'switchManagedByObj'),
    operational_state: updateSwitchSelector(state, 'operational_state'),
    ip_addresses: updateSwitchSelector(state, 'ip_addresses'),
    contract_number: updateSwitchSelector(state, 'contract_number'),
    backup: updateSwitchSelector(state, 'backup'),
    rack_units: updateSwitchSelector(state, 'rack_units'),
    rack_position: updateSwitchSelector(state, 'rack_position'),
    os: updateSwitchSelector(state, 'os'),
    os_version: updateSwitchSelector(state, 'os_version'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreateSwitchFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateSwitchForm);

export default CreateSwitchFormContainer;
