import { connect } from 'react-redux';
import Create__EntityClassName__Form from '../../components/__entityName__/Create__EntityClassName__Form';

import { getCreateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsCreate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = '__entityName__';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getCreateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsCreate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const Create__EntityClassName__FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create__EntityClassName__Form);

export default Create__EntityClassName__FormContainer;
