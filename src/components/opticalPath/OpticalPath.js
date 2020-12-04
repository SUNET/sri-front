import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const OpticalPathQuery = graphql`
  query OpticalPathQuery($opticalPathId: ID!) {
    getOpticalPathById(id: $opticalPathId) {
      __typename
      id
      name
      description
      framing {
        __typename
        name
        value
      }

      capacity {
        __typename
        name
        value
      }

      operational_state {
        __typename
        name
        value
      }
      type: __typename
    }
  }
`;
const getOpticalPath = (id) => {
  return fetchQuery(environment, OpticalPathQuery, {
    opticalPathId: id,
  }).then((data) => data.getOpticalPathById);
};

export default getOpticalPath;
