import { connect } from 'react-redux';
import CustomerUpdateForm from '../../components/customer/CustomerUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';


const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateCustomerInModal' : 'updateCustomer';
  const updateCustomerSelector = formValueSelector(formName);
  const { customer } = props;
  const initialValues = {
    id: customer.id,
    name: customer.name,
    description: customer.description,
    url: customer.url,
  };
  return {
    form: formName,
    initialValues,
    name: updateCustomerSelector(state, 'name'),
    description: updateCustomerSelector(state, 'description'),
    url: updateCustomerSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateCustomer')(state),
    fields: getFormMeta('updateCustomer')(state),
    relatedEntities: customer.with_same_name,
    isFromModal: Boolean(props.isFromModal),
    isEditModeModal: Boolean(props.isFromModal && state.formModal.editing),
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
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  };
};

const CustomerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerUpdateForm);

export default CustomerUpdateFormContainer;
