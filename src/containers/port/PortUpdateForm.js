import { connect } from 'react-redux';
import PortUpdateForm from '../../components/port/PortUpdateForm';
import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';
import { getLocationElement } from '../../utils';
import { RoutesNetworkEntity } from '../../Routes';

const ENTITY_NAME = 'port';

const getConnectionPathData = (originPort, destinationPort) => {
  const parentElement = originPort.parent[0];
  const cable = originPort.connected_to[0];
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
        currentElement: true,
      },
      cable: {
        id: cable.id,
        name: cable.name,
        connectionType: cable?.type?.name,
        path: `/${RoutesNetworkEntity[cable.__typename]}/${cable.id}`,
      },
      destinationEquipment: destinationPortParent[0]
        ? {
            id: destinationPortParent[0].id,
            name: destinationPortParent[0].name,
            connectionType: destinationPort?.type?.name,
            path: `/${RoutesNetworkEntity[destinationPortParent[0].__typename]}/${destinationPortParent[0].id}`,
            portName: destinationPort.name,
            portPath: `/${RoutesNetworkEntity[destinationPort?.__typename]}/${destinationPort?.id}`,
          }
        : null,
    },
  };
};

const mapStateToProps = (state, props) => {
  const { port } = props;
  const { id, connected_to = [] } = port;

  const cablesWithAllData = connected_to.map((cable) => {
    // MAX2
    const theOtherPort = cable.ports.find((port) => port.id !== id);
    return {
      ...cable,
      ...getConnectionPathData(port, theOtherPort),
      endSite: [{ ...getLocationElement(theOtherPort?.parent[0]?.location, 'Site'), __typename: 'Site' }],
      endRoom: [{ ...getLocationElement(theOtherPort?.parent[0]?.location, 'Room'), __typename: 'Room' }],
      endRack: [{ ...getLocationElement(theOtherPort?.parent[0]?.location, 'Rack'), __typename: 'Rack' }],
      endEquipment:
        theOtherPort?.parent.length > 0 // only one
          ? [
              {
                id: theOtherPort?.parent[0]?.id,
                name: theOtherPort?.parent[0]?.name,
                __typename: theOtherPort?.parent[0]?.__typename,
              },
            ]
          : [],
      endPort: [
        {
          id: theOtherPort?.id,
          name: theOtherPort?.name,
          __typename: theOtherPort?.__typename,
        },
      ],
    };
  });
  const portsCompleteData = {
    connected_to: cablesWithAllData,
  };
  const portWithCableCompleteData = { ...port, ...portsCompleteData, ...getConnectionPathData(port) };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, { ...props, port: portWithCableCompleteData }, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const PortUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PortUpdateForm);

export default PortUpdateFormContainer;
