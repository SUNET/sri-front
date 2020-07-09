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
      }
      owner {
        id
        name
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
