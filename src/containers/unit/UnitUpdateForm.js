import { connect } from 'react-redux';
import UnitUpdateForm from '../../components/unit/UnitUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'unit';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const UnitUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitUpdateForm);

export default UnitUpdateFormContainer;
