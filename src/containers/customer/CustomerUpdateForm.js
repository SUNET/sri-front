import { connect } from 'react-redux';
import CustomerUpdateForm from '../../components/customer/CustomerUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'customer';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CustomerUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerUpdateForm);

export default CustomerUpdateFormContainer;
