import { connect } from 'react-redux';
import RouterUpdateForm from '../../components/router/RouterUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'router';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const RouterUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(RouterUpdateForm);

export default RouterUpdateFormContainer;
