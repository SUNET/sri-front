import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateProviderForm from '../../components/provider/CreateProviderForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createProviderInModal' : 'createProvider';
  const updateProviderSelector = formValueSelector('createProvider');
  return {
    form: formName,
    fields: getFormMeta('createProvider')(state),
    formSyncErrors: getFormSyncErrors('createProvider')(state),
    name: updateProviderSelector(state, 'name'),
    url: updateProviderSelector(state, 'url'),
    isFromModal: props.isFromModal,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    createdEntity: (entityName, entityId) => {
      dispatch(formModalActions.createdEntity(entityName, entityId));
    },
  };
};

const CreateProviderFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProviderForm);

export default CreateProviderFormContainer;
