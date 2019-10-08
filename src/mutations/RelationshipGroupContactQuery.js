import { fetchQuery } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import environment from "../createRelayEnvironment";

const query = graphql`
    query RelationshipGroupContactQuery($group_id: Int!, $contact_id: Int!) {
        getGroupContactRelations(group_id: $group_id, contact_id: $contact_id) {
            id
            relation_id
            type
            start {
                handle_id
                node_name
            }
            end {
                handle_id
                node_name
            }
        }
    }
`;

function RelationshipGroupContactQuery(group, contact) {
    const variables = {
        group_id: group,
        contact_id: contact
    };
    return fetchQuery(environment, query, variables).then((data) => {
        return data.relation_id;
    });
}

export default RelationshipGroupContactQuery;
