import graphql from 'babel-plugin-relay/macro';

const OpticalNodeDetailsQuery = graphql`
  query OpticalNodeDetailsQuery($opticalNodeId: ID!) {
    getOpticalNodeById(id: $opticalNodeId) {
      ...OpticalNodeUpdateForm_opticalNode
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

export default OpticalNodeDetailsQuery;
