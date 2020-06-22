import graphql from 'babel-plugin-relay/macro';

const SwitchDetailsQuery = graphql`
  query SwitchDetailsQuery($switchId: ID!) {
    getSwitchById(id: $switchId) {
      ...SwitchUpdateForm_switch
      id
      name
      description
      ip_addresses
      rack_units
      rack_position
      provider {
        id
        name
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
      max_number_of_ports
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

export default SwitchDetailsQuery;
