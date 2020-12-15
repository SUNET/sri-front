import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const HostQuery = graphql`
  query HostQuery($hostId: ID!) {
    getHostById(id: $hostId) {
      __typename
      id
      name
      description
      operational_state {
        name
        value
      }
    }
  }
`;
const getHost = (id) => {
  return fetchQuery(environment, HostQuery, {
    hostId: id,
  }).then((data) => data.getHostById);
};

export default getHost;
