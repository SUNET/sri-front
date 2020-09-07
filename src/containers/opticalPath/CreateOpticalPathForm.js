import { connect } from 'react-redux';
import CreateOpticalPathForm from '../../components/opticalPath/CreateOpticalPathForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalPath';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateOpticalPathFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOpticalPathForm);

export default CreateOpticalPathFormContainer;
