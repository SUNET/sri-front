import graphql from 'babel-plugin-relay/macro';

const FirewallDetailsQuery = graphql`
  query FirewallDetailsQuery($firewallId: ID!) {
    getFirewallById(id: $firewallId) {
      ...FirewallUpdateForm_firewall
      id
      name
      description
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
