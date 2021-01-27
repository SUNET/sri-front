import graphql from 'babel-plugin-relay/macro';

const OpticalNodeDetailsQuery = graphql`
  query OpticalNodeDetailsQuery($opticalNodeId: ID!) {
    getOpticalNodeById(id: $opticalNodeId) {
      ...OpticalNodeUpdateForm_opticalNode
      __typename
      id
      name
      description
      type {
        id
        name
        value
      }
      ports {
        id
        name
        __typename
        relation_id
        type: port_type {
          name
        }
      }
      rack_units
      rack_position
      rack_back
      location {
        __typename
        id
        name
        parent {
          __typename
          id
          name
          parent {
            __typename
            id
            name
            id
            name
            description
            __typename
          }
        }
      }
      operational_state {
        id
        name
        value
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

export default OpticalNodeDetailsQuery;
