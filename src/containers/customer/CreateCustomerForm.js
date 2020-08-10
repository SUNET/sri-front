import { connect } from 'react-redux';

import CreateCustomerForm from '../../components/customer/CreateCustomerForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'customer';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateCustomerFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCustomerForm);

export default CreateCustomerFormContainer;
