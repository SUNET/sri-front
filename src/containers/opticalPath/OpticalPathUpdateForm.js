import { connect } from 'react-redux';
import OpticalPathUpdateForm from '../../components/opticalPath/OpticalPathUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalPath';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const OpticalPathUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalPathUpdateForm);

export default OpticalPathUpdateFormContainer;
