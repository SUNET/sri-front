import graphql from 'babel-plugin-relay/macro';

const OpticalMultiplexSectionDetailsQuery = graphql`
  query OpticalMultiplexSectionDetailsQuery($opticalMultiplexSectionId: ID!) {
    getOpticalMultiplexSectionById(id: $opticalMultiplexSectionId) {
      ...OpticalMultiplexSectionUpdateForm_opticalMultiplexSection
      __typename
      id
      name
      description
      operational_state {
        name
        value
      }
      provider {
        id
        name
      }
      dependencies {
        __typename
        id
        name
        type: __typename
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

export default OpticalMultiplexSectionDetailsQuery;
