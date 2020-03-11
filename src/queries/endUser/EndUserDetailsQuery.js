import graphql from "babel-plugin-relay/macro";

const EndUserDetailsQuery = graphql`
    query EndUserDetailsQuery($endUserId: ID!) {
        getEndUserById(id: $endUserId) {
            ...EndUserUpdateForm_endUser
            id
            name
            description
            url
            __typename
            with_same_name {
                id
                name
                __typename
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

export default EndUserDetailsQuery;
