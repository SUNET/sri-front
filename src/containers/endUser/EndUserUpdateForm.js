import { connect } from 'react-redux';
import EndUserUpdateForm from '../../components/endUser/EndUserUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'endUser';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const EndUserUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserUpdateForm);

export default EndUserUpdateFormContainer;
