import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import CreateHostForm from '../../components/host/CreateHostForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createHostInModal' : 'createHost';
  const updateHostSelector = formValueSelector(formName);
  return {
    form: formName,
    fields: getFormMeta('createHost')(state),
    formSyncErrors: getFormSyncErrors('createHost')(state),
    name: updateHostSelector(state, 'name'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
  };
};

const CreateHostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateHostForm);

export default CreateHostFormContainer;
