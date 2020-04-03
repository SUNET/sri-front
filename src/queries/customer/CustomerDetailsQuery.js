import graphql from "babel-plugin-relay/macro";

const CustomerDetailsQuery = graphql`
    query CustomerDetailsQuery($customerId: ID!) {
        getCustomerById(id: $customerId) {
            ...CustomerUpdateForm_customer
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

export default CustomerDetailsQuery;
