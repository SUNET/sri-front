import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const FirewallQuery = graphql`
  query FirewallQuery($firewallId: ID!) {
    getFirewallById(id: $firewallId) {
        __typename
      id
      name
      description
      operational_state
      type: __typename
    }
  }
`;
const getFirewall = (id) => {
  return fetchQuery(environment, FirewallQuery, {
    firewallId: id,
  }).then((data) => data.getFirewallById);
};

export default getFirewall;
