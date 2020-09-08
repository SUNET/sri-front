import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const OpticalNodeQuery = graphql`
  query OpticalNodeQuery($opticalNodeId: ID!) {
    getOpticalNodeById(id: $opticalNodeId) {
      __typename
      id
      name
      description
      operational_state {
        name
        value
      }
      type {
        name
        value
      }
    }
  }
`;
const getOpticalNode = (id) => {
  return fetchQuery(environment, OpticalNodeQuery, {
    opticalNodeId: id,
  }).then((data) => data.getOpticalNodeById);
};

export default getOpticalNode;
