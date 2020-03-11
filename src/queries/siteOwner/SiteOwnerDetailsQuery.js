import graphql from "babel-plugin-relay/macro";

const SiteOwnerDetailsQuery = graphql`
    query SiteOwnerDetailsQuery($siteOwnerId: ID!) {
        getSiteOwnerById(id: $siteOwnerId) {
            ...SiteOwnerUpdateForm_siteOwner
            id
            name
            description
            url
            __typename
            with_same_name {
                id
                name
                __typename
            }
            created
            creator {
                email
            }
            modified
            modifier {
                email
            }
        }
    }
`;

export default SiteOwnerDetailsQuery;
