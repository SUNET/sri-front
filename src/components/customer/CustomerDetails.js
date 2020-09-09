import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import CustomerUpdateFormContainer from '../../containers/customer/CustomerUpdateForm';
import DeleteCustomerMutation from '../../mutations/customer/DeleteCustomerMutation';
import CustomerDetailsQuery from '../../queries/customer/CustomerDetailsQuery';

class CustomerDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'customerId';
  UpdateFormContainer = CustomerUpdateFormContainer;
  DetailsQuery = CustomerDetailsQuery;
  entityNameProp = 'customer';
  entityGetDetailsMethodName = 'getCustomerById';
  classDetails = 'customer-details';

  handleDelete = () => {
    DeleteCustomerMutation(this.getId(), () => this.props.history.push(`/network/customers`));
  };
}

export default CustomerDetails;
