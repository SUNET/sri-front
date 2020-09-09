import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const OpticalFilterQuery = graphql`
  query OpticalFilterQuery($opticalFilterId: ID!) {
    getOpticalFilterById(id: $opticalFilterId) {
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
const getOpticalFilter = (id) => {
  return fetchQuery(environment, OpticalFilterQuery, {
    opticalFilterId: id,
  }).then((data) => data.getOpticalFilterById);
};

export default getOpticalFilter;
