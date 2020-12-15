import { connect } from 'react-redux';
import RouterUpdateForm from '../../components/router/RouterUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'router';

const getAllOtherPorts = (cable, originalPortId) => {
  if (!cable) {
    return null;
  }
  return cable.ports.find((port) => port.id !== originalPortId);
};

const mapStateToProps = (state, props) => {
  const { router } = props;
  const { ports = [] } = router;
  const portsCompleteData = {
    ports: ports.map((port) => {
      const cable = {
        name: port?.connected_to?.name,
        id: port?.connected_to?.id,
        __typename: port?.connected_to?.__typename,
      };

      const endPorts = getAllOtherPorts(port?.connected_to, port.id);
      const endEquipments = endPorts?.parent;
      const partOf = port.part_of;
      const portWithAllData = {
        ...port,
        cable,
        endEquipment: endEquipments,
        endPorts: endPorts,
        unit: partOf ? [partOf] : null,
        dependsOnPort: partOf ? partOf.dependents : null,
      };
      return portWithAllData;
    }),
  };
  const routerWithPortsCompleteData = { ...router, ...portsCompleteData };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, { ...props, router: routerWithPortsCompleteData }, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const RouterUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(RouterUpdateForm);

export default RouterUpdateFormContainer;
