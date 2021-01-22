import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const SiteQuery = graphql`
  query SiteQuery($siteId: ID!) {
    getSiteById(id: $siteId) {
      __typename
      id
      name
      description
      type: __typename
      country {
        name
        value
      }
      owner_id
    }
  }
`;
const getSite = (id) => {
  return fetchQuery(environment, SiteQuery, {
    siteId: id,
  }).then((data) => data.getSiteById);
};

export default getSite;
