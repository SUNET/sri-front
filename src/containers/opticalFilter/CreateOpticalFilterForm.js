import { connect } from 'react-redux';
import CreateOpticalFilterForm from '../../components/opticalFilter/CreateOpticalFilterForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalFilter';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateOpticalFilterFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOpticalFilterForm);

export default CreateOpticalFilterFormContainer;
