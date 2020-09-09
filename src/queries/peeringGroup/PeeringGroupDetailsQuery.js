import graphql from 'babel-plugin-relay/macro';

const PeeringGroupDetailsQuery = graphql`
  query PeeringGroupDetailsQuery($peeringGroupId: ID!) {
    getPeeringGroupById(id: $peeringGroupId) {
      ...PeeringGroupUpdateForm_peeringGroup
      __typename
      id
      name
      dependencies {
        __typename
        type: __typename
        relation_id
        id
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

export default PeeringGroupDetailsQuery;
