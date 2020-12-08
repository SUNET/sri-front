import { connect } from 'react-redux';
import CreateServiceForm from '../../components/service/CreateServiceForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'service';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return { ...mappedStateToProps, ...{ currentClass: props.currentClass } };
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateServiceFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateServiceForm);

export default CreateServiceFormContainer;
