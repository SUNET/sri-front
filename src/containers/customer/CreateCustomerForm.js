import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateCustomerForm from '../../components/customer/CreateCustomerForm';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createCustomerInModal' : 'createCustomer';
  const updateCustomerSelector = formValueSelector('createCustomer');
  return {
    form: formName,
    fields: getFormMeta('createCustomer')(state),
    formSyncErrors: getFormSyncErrors('createCustomer')(state),
    name: updateCustomerSelector(state, 'name'),
    url: updateCustomerSelector(state, 'url'),
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

const CreateCustomerFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCustomerForm);

export default CreateCustomerFormContainer;
