import graphql from 'babel-plugin-relay/macro';

const ODFDetailsQuery = graphql`
  query ODFDetailsQuery($ODFId: ID!) {
    getODFById(id: $ODFId) {
      ...ODFUpdateForm_ODF
      __typename
      id
      name
      description
      operational_state {
        name
        value
      }
      rack_units
      rack_position
      rack_back
      max_number_of_ports
      ports {
        id
        name
        __typename
        relation_id
        type: port_type {
          name
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

export default ODFDetailsQuery;
