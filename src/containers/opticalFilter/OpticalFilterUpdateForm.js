import { connect } from 'react-redux';
import OpticalFilterUpdateForm from '../../components/opticalFilter/OpticalFilterUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalFilter';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const OpticalFilterUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalFilterUpdateForm);

export default OpticalFilterUpdateFormContainer;
