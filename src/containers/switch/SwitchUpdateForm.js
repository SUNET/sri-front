import { connect } from 'react-redux';
import SwitchUpdateForm from '../../components/switch/SwitchUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'switch';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  console.log('mappedStateToProps: ', mappedStateToProps);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};
const SwitchUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchUpdateForm);

export default SwitchUpdateFormContainer;
