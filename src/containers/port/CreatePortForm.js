import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import CreatePortForm from '../../components/port/CreatePortForm';

const mapStateToProps = (state, props) => {
  const updatePortSelector = formValueSelector('createPort');
  return {
    fields: getFormMeta('createPort')(state),
    formSyncErrors: getFormSyncErrors('createPort')(state),
    name: updatePortSelector(state, 'name'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreatePortFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePortForm);

export default CreatePortFormContainer;
