import { fetchQuery } from "relay-runtime";
import environment from "../../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const ProviderQuery = graphql`
    query ProviderQuery($providerId: ID!) {
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

export const getProvider = (id) => {
    return fetchQuery(environment, ProviderQuery, {
        providerId: id
    }).then((data) => {
        return data.getProviderById;
    });
};
