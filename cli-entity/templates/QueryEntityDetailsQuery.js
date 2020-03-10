import graphql from "babel-plugin-relay/macro";

const __EntityClassName__DetailsQuery = graphql`
    query __EntityClassName__DetailsQuery($__entityName__Id: ID!) {
        get__EntityClassName__ById(id: $__entityName__Id) {
            id
            name
            description
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