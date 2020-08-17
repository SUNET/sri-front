import graphql from 'babel-plugin-relay/macro';

const RouterDetailsQuery = graphql`
  query RouterDetailsQuery($routerId: ID!) {
    getRouterById(id: $routerId) {
      ...RouterUpdateForm_router
      id
      name
      description
      operational_state {
        id
        name
        value
      }
      model
      version
      ports {
        id
        name
        __typename
        relation_id
        type: port_type {
          name
        }
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

export default RouterDetailsQuery;
