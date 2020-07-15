import graphql from 'babel-plugin-relay/macro';

const ExternalEquipmentDetailsQuery = graphql`
  query ExternalEquipmentDetailsQuery($externalEquipmentId: ID!) {
    getExternalEquipmentById(id: $externalEquipmentId) {
      ...ExternalEquipmentUpdateForm_externalEquipment
      id
      name
      description
      rack_units
      rack_position
      ports {
        id
        name
        __typename
        relation_id
        type: port_type {
          name
        }
      }
      owner {
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
        ... on SiteOwner {
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
      has {
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

export default ExternalEquipmentDetailsQuery;
