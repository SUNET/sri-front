import graphql from 'babel-plugin-relay/macro';

const PeeringPartnerDetailsQuery = graphql`
  query PeeringPartnerDetailsQuery($peeringPartnerId: ID!) {
    getPeeringPartnerById(id: $peeringPartnerId) {
      ...PeeringPartnerUpdateForm_peeringPartner
      id
      name
      as_number
      peering_link
      __typename
      with_same_name {
        id
        name
        __typename
        ... on Organization {
          website
          organization_id
          parent_organization {
            organization_id
          }
          affiliation_partner
          affiliation_customer
          affiliation_provider
          affiliation_host_user
          affiliation_site_owner
          affiliation_end_customer
          type {
            name
            value
          }
        }
        ... on EndUser {
          url
        }
        ... on Customer {
          url
        }
        ... on SiteOwner {
          url
        }
        ... on Provider {
          url
        }
      }
      comments {
        id
        user {
          first_name
          last_name
        }
        comment
        submit_date
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

export default PeeringPartnerDetailsQuery;
