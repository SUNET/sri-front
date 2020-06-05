import graphql from 'babel-plugin-relay/macro';

const CableDetailsQuery = graphql`
  query CableDetailsQuery($cableId: ID!) {
    getCableById(id: $cableId) {
      ...CableUpdateForm_cable
      id
      name
      description
      cable_type {
        name
        value
      }
      providers {
        id
        relation_id
        name
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

export default CableDetailsQuery;
