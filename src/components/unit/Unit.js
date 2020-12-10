import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const UnitQuery = graphql`
  query UnitQuery($unitId: ID!) {
    getUnitById(id: $unitId) {
      __typename
      id
      name
      description
      type: __typename
    }
  }
`;
const getUnit = (id) => {
  return fetchQuery(environment, UnitQuery, {
    unitId: id,
  }).then((data) => data.getUnitById);
};

export default getUnit;
