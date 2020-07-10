import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateEndUserForm from '../../components/endUser/CreateEndUserForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createCustomerInModal' : 'createCustomer';
  const updateEndUserSelector = formValueSelector('createEndUser');
  return {
    form: formName,
    fields: getFormMeta('createEndUser')(state),
    formSyncErrors: getFormSyncErrors('createEndUser')(state),
    name: updateEndUserSelector(state, 'name'),
    url: updateEndUserSelector(state, 'url'),
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

const CreateEndUserFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEndUserForm);

export default CreateEndUserFormContainer;
