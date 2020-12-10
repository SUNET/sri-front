import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const PeeringGroupQuery = graphql`
  query PeeringGroupQuery($peeringrGroupId: ID!) {
    getPeeringGroupById(id: $peeringrGroupId) {
      __typename
      id
      name
      description
      type: __typename
    }
  }
`;
const getPeeringGroup = (id) => {
  return fetchQuery(environment, PeeringGroupQuery, {
    peeringrGroupId: id,
  }).then((data) => data.getPeeringGroupById);
};

export default getPeeringGroup;
