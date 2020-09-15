import { connect } from 'react-redux';
import CreateOpticalNodeForm from '../../components/opticalNode/CreateOpticalNodeForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalNode';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateOpticalNodeFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOpticalNodeForm);

export default CreateOpticalNodeFormContainer;
