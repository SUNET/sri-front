import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const OpticalMultiplexSectionQuery = graphql`
  query OpticalMultiplexSectionQuery($serviceId: ID!) {
    getOpticalMultiplexSectionById(id: $serviceId) {
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
const getOpticalMultiplexSection = (id) => {
  return fetchQuery(environment, OpticalMultiplexSectionQuery, {
    serviceId: id,
  }).then((data) => data.getOpticalMultiplexSectionById);
};

export default getOpticalMultiplexSection;
