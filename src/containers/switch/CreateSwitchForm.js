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
    url: updateSwitchSelector(state, 'url'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreateSwitchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateSwitchForm);

export default CreateSwitchFormContainer;
