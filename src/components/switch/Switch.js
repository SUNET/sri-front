import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const SwitchQuery = graphql`
  query SwitchQuery($switchId: ID!) {
    getSwitchById(id: $switchId) {
        __typename
      id
      name
      description
      operational_state {
        name
        value
      }
      type: __typename
    }
  }
`;
const getSwitch = (id) => {
  return fetchQuery(environment, SwitchQuery, {
    switchId: id,
  }).then((data) => data.getSwitchById);
};

export default getSwitch;
