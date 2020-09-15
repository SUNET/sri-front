import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const PortQuery = graphql`
  query PortQuery($portId: ID!) {
    getPortById(id: $portId) {
      __typename
      id
      name
      description
      type: port_type {
        name
        value
      }
    }
  }
`;
const getPort = (id) => {
  return fetchQuery(environment, PortQuery, {
    portId: id,
  }).then((data) => data.getPortById);
};

export default getPort;
