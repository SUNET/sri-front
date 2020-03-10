import graphql from "babel-plugin-relay/macro";

const CustomerDetailsQuery = graphql`
    query CustomerDetailsQuery($customerId: ID!) {
        getCustomerById(id: $customerId) {
            ...CustomerUpdateForm_customer
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

export default CustomerDetailsQuery;
