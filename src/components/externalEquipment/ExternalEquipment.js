import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const ExternalEquipmentQuery = graphql`
  query ExternalEquipmentQuery($externalEquipmentId: ID!) {
    getExternalEquipmentById(id: $externalEquipmentId) {
        __typename
      id
      name
      description
      type: __typename
    }
  }
`;
const getExternalEquipment = (id) => {
  return fetchQuery(environment, ExternalEquipmentQuery, {
    externalEquipmentId: id,
  }).then((data) => data.getExternalEquipmentById);
};

export default getExternalEquipment;
