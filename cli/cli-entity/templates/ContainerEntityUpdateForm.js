import { connect } from 'react-redux';
import __EntityClassName__UpdateForm from '../../components/__entityName__/__EntityClassName__UpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = '__entityName__';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const __EntityClassName__UpdateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(__EntityClassName__UpdateForm);

export default __EntityClassName__UpdateFormContainer;
