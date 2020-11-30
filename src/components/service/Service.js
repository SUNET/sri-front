import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const ServiceQuery = graphql`
  query ServiceQuery($serviceId: ID!) {
    getServiceById(id: $serviceId) {
      __typename
      id
      name
      description
      service_type {
        name
      }
      operational_state {
        name
        value
      }
      type: __typename
    }
  }
`;
const getService = (id) => {
  return fetchQuery(environment, ServiceQuery, {
    serviceId: id,
  }).then((data) => data.getServiceById);
};

export default getService;
