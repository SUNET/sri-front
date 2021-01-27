import { connect } from 'react-redux';
import SwitchUpdateForm from '../../components/switch/SwitchUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';
import { formatPortData } from '../../components/common/formsSections/PortsToggleSection';

const ENTITY_NAME = 'switch';

const mapStateToProps = (state, props) => {
  const entityData = props[ENTITY_NAME];
  const { ports = [] } = entityData;
  const portsCompleteData = formatPortData(ports);
  const routerWithPortsCompleteData = { ...entityData, ...portsCompleteData };
  const mappedStateToProps = getUpdateProps(
    ENTITY_NAME,
    { ...props, [ENTITY_NAME]: routerWithPortsCompleteData },
    state,
  );
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};
const SwitchUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchUpdateForm);

export default SwitchUpdateFormContainer;
