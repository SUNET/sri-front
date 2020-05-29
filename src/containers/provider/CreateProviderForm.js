import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import CreateProviderForm from '../../components/provider/CreateProviderForm';

const mapStateToProps = (state, props) => {
  const updateProviderSelector = formValueSelector('createProvider');
  return {
    fields: getFormMeta('createProvider')(state),
    formSyncErrors: getFormSyncErrors('createProvider')(state),
    name: updateProviderSelector(state, 'name'),
    url: updateProviderSelector(state, 'url'),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
  };
};

const CreateProviderFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProviderForm);

export default CreateProviderFormContainer;
