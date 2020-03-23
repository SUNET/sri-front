import graphql from "babel-plugin-relay/macro";

const PortDetailsQuery = graphql`
    query PortDetailsQuery($portId: ID!) {
        getPortById(id: $portId) {
            ...PortUpdateForm_port
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

export default PortDetailsQuery;
