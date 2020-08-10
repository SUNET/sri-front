import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const HostUserQuery = graphql`
  query HostUserQuery($hostUserId: ID!) {
    getHostUserById(id: $hostUserId) {
      __typename
      id
      name
      type: node_type {
        name: type
      }
    }
  }
`;
const getHostUser = (id) => {
  return fetchQuery(environment, HostUserQuery, {
    hostUserId: id,
  }).then((data) => data.getHostUserById);
};

export default getHostUser;
