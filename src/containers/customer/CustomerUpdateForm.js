import { connect } from 'react-redux';
import CustomerUpdateForm from '../../components/customer/CustomerUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
// import { showNewContactForm } from "../../actions/ComponentFormRow";

const mapStateToProps = (state, props) => {
  const updateCustomerSelector = formValueSelector('updateCustomer');
  const { customer } = props;
  const initialValues = {
    id: customer.id,
    name: customer.name,
    description: customer.description,
    url: customer.url,
  };
  return {
    initialValues,
    name: updateCustomerSelector(state, 'name'),
    description: updateCustomerSelector(state, 'description'),
    url: updateCustomerSelector(state, 'url'),
    formSyncErrors: getFormSyncErrors('updateCustomer')(state),
    fields: getFormMeta('updateCustomer')(state),
    relatedEntities: customer.with_same_name,
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
    // ,showNewContactForm
  };
};

const CustomerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerUpdateForm);

export default CustomerUpdateFormContainer;
