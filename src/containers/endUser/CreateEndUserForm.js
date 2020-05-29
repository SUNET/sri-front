import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import CreateEndUserForm from '../../components/endUser/CreateEndUserForm';

const mapStateToProps = (state, props) => {
  const updateEndUserSelector = formValueSelector('createEndUser');
  return {
    fields: getFormMeta('createEndUser')(state),
    formSyncErrors: getFormSyncErrors('createEndUser')(state),
    name: updateEndUserSelector(state, 'name'),
    url: updateEndUserSelector(state, 'url'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreateEndUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEndUserForm);

export default CreateEndUserFormContainer;
