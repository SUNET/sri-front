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
      operational_state {
        name
        value
      }
      type: __typename
    }
  }
`;
const getOpticalLink = (id) => {
  return fetchQuery(environment, OpticalLinkQuery, {
    opticalLinkId: id,
  }).then((data) => data.getOpticalLinkById);
};

export default getOpticalLink;
