import { connect } from 'react-redux';
import OpticalLinkUpdateForm from '../../components/opticalLink/OpticalLinkUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'opticalLink';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const OpticalLinkUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpticalLinkUpdateForm);

export default OpticalLinkUpdateFormContainer;
