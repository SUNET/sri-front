import { connect } from 'react-redux';
import CreateOpticalLinkForm from '../../components/opticalLink/CreateOpticalLinkForm';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalLink';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CreateOpticalLinkFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOpticalLinkForm);

export default CreateOpticalLinkFormContainer;
