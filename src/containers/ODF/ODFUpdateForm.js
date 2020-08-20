import { connect } from 'react-redux';
import ODFUpdateForm from '../../components/ODF/ODFUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'ODF';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const ODFUpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ODFUpdateForm);

export default ODFUpdateFormContainer;
