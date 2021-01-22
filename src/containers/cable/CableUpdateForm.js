import { connect } from 'react-redux';
import CableUpdateForm from '../../components/cable/CableUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';
import { RoutesNetworkEntity } from '../../Routes';

const ENTITY_NAME = 'cable';

const getConnectionPathData = (originPort, cable, destinationPort) => {
  const parentElement = originPort?.parent;
  const destinationPortParent = destinationPort?.parent;

  if (!parentElement || !cable || !destinationPortParent) {
    return false;
  }

  return {
    connection_path: {
      originEquipment: {
        id: parentElement?.id,
        name: parentElement?.name,
        connectionType: originPort?.type?.name,
        path: `/${RoutesNetworkEntity[parentElement?.__typename]}/${parentElement?.id}`,
        portName: originPort.name,
        portPath: `/${RoutesNetworkEntity[originPort?.__typename]}/${originPort?.id}`,
      },
      cable: {
        id: cable.id,
        portName: cable.name,
        connectionType: cable?.cable_type?.name,
        path: `/${RoutesNetworkEntity[cable.__typename]}/${cable.id}`,
        currentElement: true,
      },
      destinationEquipment: destinationPortParent
        ? {
            id: destinationPortParent.id,
            name: destinationPortParent.name,
            connectionType: destinationPort?.type?.name,
            path: `/${RoutesNetworkEntity[destinationPortParent.__typename]}/${destinationPortParent.id}`,
            portName: destinationPort.name,
            portPath: `/${RoutesNetworkEntity[destinationPort?.__typename]}/${destinationPort?.id}`,
          }
        : null,
    },
  };
};

const mapStateToProps = (state, props) => {
  const { cable } = props;
  const mappedStateToProps = getUpdateProps(
    ENTITY_NAME,
    {
      ...props,
      cable: { ...cable, connected_to: { ...getConnectionPathData(cable.ports[0], cable, cable.ports[1]) } },
    },
    state,
  );
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const CableUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CableUpdateForm);

export default CableUpdateFormContainer;
