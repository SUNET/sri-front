import graphql from 'babel-plugin-relay/macro';

const OpticalLinkDetailsQuery = graphql`
  query OpticalLinkDetailsQuery($opticalLinkId: ID!) {
    getOpticalLinkById(id: $opticalLinkId) {
      ...OpticalLinkUpdateForm_opticalLink
      __typename
      id
      name
      description
      operational_state {
        name
        value
      }
      type: link_type {
        id
        name
        value
      }
      interface_type {
        id
        name
        value
      }
      provider {
        id
        name
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

export default OpticalLinkDetailsQuery;
