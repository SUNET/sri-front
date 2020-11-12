import { connect } from 'react-redux';
import ServiceUpdateForm from '../../components/service/ServiceUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'service';

const mapStateToProps = (state, props) => {
  const { service } = props;
  const users = service.customers && service.end_users ? [...service.customers, ...service.end_users] : [];
  const serviceWithUsers = { ...service, ...{ users } };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, { ...props, service: serviceWithUsers }, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const ServiceUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ServiceUpdateForm);

export default ServiceUpdateFormContainer;
