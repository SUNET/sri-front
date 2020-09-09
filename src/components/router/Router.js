import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const RouterQuery = graphql`
  query RouterQuery($routerId: ID!) {
    getRouterById(id: $routerId) {
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
const getRouter = (id) => {
  return fetchQuery(environment, RouterQuery, {
    routerId: id,
  }).then((data) => data.getRouterById);
};

export default getRouter;
