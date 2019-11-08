import { fetchQuery } from "relay-runtime";
import environment from "../../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const OrganizationQuery = graphql`
    query OrganizationQuery($organizationId: Int!) {
        getOrganizationById(handle_id: $organizationId) {
            handle_id
            name
            type
            website
            organization_id
            organization_number
            description
            incident_management_info
            addresses {
                handle_id
                name
                street
                postal_code
                postal_area
                phone
            }
            incoming {
                name
                relation {
                    relation_id
                    type
                    end {
                        handle_id
                        node_name
                    }
                    start {
                        handle_id
                        node_name
                    }
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

const OrganizationCheckExistQuery = graphql`
    query OrganizationCheckExistQuery($organization_id: String!, $handle_id: Int) {
        checkExistentOrganizationId(organization_id: $organization_id, handle_id: $handle_id)
    }
`;

export const getOrganization = (handle_id) => {
    return fetchQuery(environment, OrganizationQuery, {
        organizationId: handle_id
    }).then((data) => {
        return data.getOrganizationById;
    });
};

export const checkOrganization = (organization_id, handle_id) => {
    let variables = {
        organization_id: organization_id
    };
    if (handle_id) variables.handle_id = handle_id;
    console.log(variables);
    return fetchQuery(environment, OrganizationCheckExistQuery, variables).then((data) => {
        return data.checkExistentOrganizationId;
    });
};
