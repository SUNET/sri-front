import graphql from 'babel-plugin-relay/macro';

const __EntityClassName__DetailsQuery = graphql`
  query __EntityClassName__DetailsQuery($__entityName__Id: ID!) {
    get__EntityClassName__ById(id: $__entityName__Id) {
      ...__EntityClassName__UpdateForm___entityName__
      id
      name
      description
      __typename
      with_same_name {
        id
        name
        __typename
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

export default __EntityClassName__DetailsQuery;
