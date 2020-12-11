import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const RackQuery = graphql`
  query RackQuery($rackId: ID!) {
    getRackById(id: $rackId) {
      __typename
      id
      name
      description
      type: __typename
    }
  }
`;
const getRack = (id) => {
  return fetchQuery(environment, RackQuery, {
    rackId: id,
  }).then((data) => data.getRackById);
};

export default getRack;
