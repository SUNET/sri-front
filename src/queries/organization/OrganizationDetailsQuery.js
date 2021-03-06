import graphql from 'babel-plugin-relay/macro';

const OrganizationDetailsQuery = graphql`
  query OrganizationDetailsQuery($organizationId: ID!) {
    getOrganizationById(id: $organizationId) {
      ...OrganizationUpdateForm_organization
      id
      name
      type {
        name
        value
      }
      website
      organization_id
      organization_number
      description
      incident_management_info
      affiliation_customer
      affiliation_end_customer
      affiliation_host_user
      affiliation_partner
      affiliation_provider
      affiliation_site_owner
      parent_organization {
        organization_id
        relation_id
        id
        name
      }
      addresses {
        id
        name
        street
        postal_code
        postal_area
        phone
      }
      incoming {
        name
        relation {
          relation_id
          type
          end {
            id
            node_name
          }
          start {
            id
            node_name
          }
        }
      }
      contacts {
        id
        first_name
        last_name
        contact_type {
          name
          value
        }
        emails {
          id
          name
          type {
            name
            value
          }
        }
        phones {
          id
          name
          type {
            name
            value
          }
        }
        roles {
          relation_id
          role_data {
            id
            name
          }
          end {
            id
            name
          }
        }
      }
      with_same_name {
        id
        name
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

export default OrganizationDetailsQuery;
