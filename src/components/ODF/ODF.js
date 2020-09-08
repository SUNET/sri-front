import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const ODFQuery = graphql`
  query ODFQuery($odfId: ID!) {
    getODFById(id: $odfId) {
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
const getODF = (id) => {
  return fetchQuery(environment, ODFQuery, {
    odfId: id,
  }).then((data) => data.getODFById);
};

export default getODF;
