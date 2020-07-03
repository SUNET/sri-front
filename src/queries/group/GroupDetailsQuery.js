import graphql from 'babel-plugin-relay/macro';

const GroupDetailsQuery = graphql`
  query GroupDetailsQuery($groupId: ID!) {
    getGroupById(id: $groupId) {
      ...GroupUpdateForm_group
      id
      name
      description
      contacts {
        id
        first_name
        last_name
        relation_id
        contact_type {
          name
          value
        }
        emails {
          id
          name
          type {
            name
            value
          }
        }
        phones {
          id
          name
          type {
            name
            value
          }
        }
        roles {
          role_data {
            id
            name
          }
          end {
            id
            name
          }
        }
        outgoing {
          name
          relation {
            relation_id
            type
            end {
              id
              node_name
            }
          }
        }
      }
      contact_relations {
        entity_id
        relation_id
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

export default GroupDetailsQuery;
