import graphql from "babel-plugin-relay/macro";

const ProviderDetailsQuery = graphql`
    query ProviderDetailsQuery($providerId: ID!) {
        getProviderById(id: $providerId) {
            ...ProviderUpdateForm_provider
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

export default ProviderDetailsQuery;
