import graphql from 'babel-plugin-relay/macro';

const CustomerDetailsQuery = graphql`
  query CustomerDetailsQuery($customerId: ID!) {
    getCustomerById(id: $customerId) {
      ...CustomerUpdateForm_customer
      id
      name
      description
      url
      __typename
      with_same_name {
        id
        name
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
        ... on PeeringPartner {
          peering_link
        }
        __typename
      }
      uses {
        __typename
        id
        name
        description
        relation_id
        ... on Service {
          service_type {
            name
          }
          operational_state {
            value
            name
          }
        }
      }
      owns {
        __typename
        id
        name
        relation_id
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

export default CustomerDetailsQuery;
