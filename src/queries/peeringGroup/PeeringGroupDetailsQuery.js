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
        id
        name
        relation_id
        ... on Logical {
          dependencies {
            __typename
            id
            name
          }
          part_of {
            __typename
            id
            name
            parent {
              __typename
              id
              name
            }
          }
        }
        ... on Unit {
          ip_address
          vlan
        }
      }
      used_by {
        __typename
        id
        name
        relation_id
        ... on PeeringPartner {
          ip_address
          as_number
          peering_link
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

export default PeeringGroupDetailsQuery;
