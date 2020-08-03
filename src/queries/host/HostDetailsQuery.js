import graphql from 'babel-plugin-relay/macro';

const HostDetailsQuery = graphql`
  query HostDetailsQuery($hostId: ID!) {
    getHostById(id: $hostId) {
      ...HostUpdateForm_host
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

export default HostDetailsQuery;
