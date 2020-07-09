import graphql from 'babel-plugin-relay/macro';

const ExternalEquipmentDetailsQuery = graphql`
  query ExternalEquipmentDetailsQuery($externalEquipmentId: ID!) {
    getExternalEquipmentById(id: $externalEquipmentId) {
      ...ExternalEquipmentUpdateForm_externalEquipment
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

export default ExternalEquipmentDetailsQuery;
