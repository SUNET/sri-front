import graphql from 'babel-plugin-relay/macro';

const FirewallDetailsQuery = graphql`
  query FirewallDetailsQuery($firewallId: ID!) {
    getFirewallById(id: $firewallId) {
      ...FirewallUpdateForm_firewall
      id
      name
      description
      operational_state
      managed_by {
        id
        name
        value
      }
      responsible_group {
        id
        name
      }
      support_group {
        id
        name
      }
      backup
      security_class {
        name
        value
      }
      security_comment
      os
      os_version
      model
      vendor
      service_tag
      end_support
      max_number_of_ports
      rack_units
      rack_position
      contract_number
      location {
        id
        name
      }
      owner {
        id
        name
      }
      __typename
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

export default FirewallDetailsQuery;
