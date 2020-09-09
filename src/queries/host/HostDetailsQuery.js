import graphql from 'babel-plugin-relay/macro';

const HostDetailsQuery = graphql`
  query HostDetailsQuery($hostId: ID!) {
    getHostById(id: $hostId) {
      ...HostUpdateForm_host
      id
      name
      operational_state {
        name
        value
      }
      description
      host_type
      ip_addresses
      host_user {
        id
        name
        __typename
      }
      owner: host_owner {
        __typename
        id
        name
        ... on EndUser {
          type: node_type {
            name: type
          }
        }
        ... on Customer {
          type: node_type {
            name: type
          }
        }
        ... on HostUser {
          type: node_type {
            name: type
          }
        }
        ... on Provider {
          type: node_type {
            name: type
          }
        }
      }
      responsible_group {
        id
        name
      }
      support_group {
        id
        name
      }
      managed_by {
        value
      }
      backup
      os
      os_version
      contract_number
      rack_units
      rack_position
      rack_back
    }
  }
`;

export default HostDetailsQuery;
