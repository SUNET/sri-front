import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const CableQuery = graphql`
  query CableQuery($cableId: ID!) {
    getCableById(id: $cableId) {
      __typename
      id
      name
      description
      type: cable_type {
        name
        value
      }
      cable_type {
        name
        value
      }
    }
  }
`;
const getCable = (id) => {
  return fetchQuery(environment, CableQuery, {
    cableId: id,
  }).then((data) => data.getCableById);
};

export default getCable;
