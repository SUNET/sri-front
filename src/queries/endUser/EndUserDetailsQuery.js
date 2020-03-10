import graphql from "babel-plugin-relay/macro";

const EndUserDetailsQuery = graphql`
    query EndUserDetailsQuery($endUserId: ID!) {
        getEndUserById(id: $endUserId) {
            ...EndUserUpdateForm_endUser
            id
            name
            description
            url
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

export default EndUserDetailsQuery;
