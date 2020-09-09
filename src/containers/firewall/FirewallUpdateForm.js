import { connect } from 'react-redux';
import FirewallUpdateForm from '../../components/firewall/FirewallUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'firewall';

const mapStateToProps = (state, props) => {
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, props, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};
const FirewallUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(FirewallUpdateForm);

export default FirewallUpdateFormContainer;
