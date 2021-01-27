import { connect } from 'react-redux';
import ODFUpdateForm from '../../components/ODF/ODFUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';
import { formatPortData } from '../../components/common/formsSections/PortsToggleSection';

const ENTITY_NAME = 'ODF';

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

const ODFUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ODFUpdateForm);

export default ODFUpdateFormContainer;
