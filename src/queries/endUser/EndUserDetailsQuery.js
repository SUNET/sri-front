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
                ... on Organization {
                    website
                }
                ... on Provider {
                    url
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

export default EndUserDetailsQuery;
