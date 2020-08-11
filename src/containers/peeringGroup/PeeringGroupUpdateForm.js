import { connect } from 'react-redux';
import PeeringGroupUpdateForm from '../../components/peeringGroup/PeeringGroupUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'peeringGroup';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const PeeringGroupUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PeeringGroupUpdateForm);

export default PeeringGroupUpdateFormContainer;
