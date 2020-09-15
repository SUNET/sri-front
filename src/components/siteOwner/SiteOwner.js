import { fetchQuery } from 'relay-runtime';
import environment from '../../createRelayEnvironment';
import graphql from 'babel-plugin-relay/macro';

const SiteOwnerQuery = graphql`
  query SiteOwnerQuery($siteOwnerId: ID!) {
    getSiteOwnerById(id: $siteOwnerId) {
      __typename
      id
      name
    }
  }
`;
const getSiteOwner = (id) => {
  return fetchQuery(environment, SiteOwnerQuery, {
    siteOwnerId: id,
  }).then((data) => data.getSiteOwnerById);
};

export default getSiteOwner;
