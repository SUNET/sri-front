import { connect } from 'react-redux';
import RouterUpdateForm from '../../components/router/RouterUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'router';

const getAllOtherPorts = (cables, originalPortId) => {
  if (cables.length === 0) {
    return null;
  }
  const otherPorts = cables.map((cable) => {
    return cable.ports.find((port) => port.id !== originalPortId);
  });
  return otherPorts;
};

const getAllEndEquipments = (ports) => {
  if (!ports || ports.length === 0) {
    return null;
  }
  const otherPorts = ports.map((port) => {
    return port.parent.length > 0 ? port.parent[0] : null;
  });
  return otherPorts;
};

const mapStateToProps = (state, props) => {
  const { router } = props;
  const { ports = [] } = router;
  const portsCompleteData = {
    ports: ports.map((port) => {
      const cable =
        port.connected_to.length > 0
          ? port.connected_to.map((cn) => ({ name: cn.name, id: cn.id, __typename: cn.__typename }))
          : null;

      const endPorts = getAllOtherPorts(port.connected_to, port.id);
      const endEquipments = getAllEndEquipments(endPorts);
      const partOf = port.part_of;
      const portWithAllData = {
        ...port,
        cable,
        endEquipment: endEquipments,
        endPorts: endPorts,
        unit: partOf,
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
