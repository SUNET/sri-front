import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const CustomerQuery = graphql`
  query CustomerQuery($customerId: ID!) {
    getCustomerById(id: $customerId) {
        __typename
      id
      name
    }
  }
`;
const getCustomer = (id) => {
  return fetchQuery(environment, CustomerQuery, {
    customerId: id,
  }).then((data) => data.getCustomerById);
};

export default getCustomer;
