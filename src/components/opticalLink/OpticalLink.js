import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const OpticalLinkQuery = graphql`
  query OpticalLinkQuery($opticalLinkId: ID!) {
    getOpticalLinkById(id: $opticalLinkId) {
      __typename
      id
      name
      description
      link_type {
        __typename
        name
        value
      }
      operational_state {
        name
        value
      }
      interface_type {
        __typename
        name
        value
      }
      type: __typename
      ports {
        id
        name
      }
    }
  }
`;
const getOpticalLink = (id) => {
  return fetchQuery(environment, OpticalLinkQuery, {
    opticalLinkId: id,
  }).then((data) => data.getOpticalLinkById);
};

export default getOpticalLink;
