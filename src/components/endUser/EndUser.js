import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const EndUserQuery = graphql`
  query EndUserQuery($endUserId: ID!) {
    getEndUserById(id: $endUserId) {
        __typename
      id
      name
    }
  }
`;
const getEndUser = (id) => {
  return fetchQuery(environment, EndUserQuery, {
    endUserId: id,
  }).then((data) => data.getEndUserById);
};

export default getEndUser;
