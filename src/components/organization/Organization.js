import { fetchQuery } from "relay-runtime";
import environment from "../../createRelayEnvironment";
import graphql from "babel-plugin-relay/macro";

const OrganizationQuery = graphql`
    query OrganizationQuery($organizationId: ID!) {
        getOrganizationById(id: $organizationId) {
            id
            name
            type
            website
            organization_id
            organization_number
            description
            incident_management_info
            addresses {
                id
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
                        id
                        node_name
                    }
                    start {
                        id
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
    query OrganizationCheckExistQuery($organization_id: String!, $id: ID) {
        checkExistentOrganizationId(organization_id: $organization_id, id: $id)
    }
`;

const OrganizationIdQuery = graphql`
    query OrganizationIdQuery($filter: OrganizationFilter) {
        organizations(filter: $filter) {
            edges {
                node {
                    id
                }
            }
        }
    }
`;
export const getOrganization = (id) => {
    return fetchQuery(environment, OrganizationQuery, {
        organizationId: id
    }).then((data) => {
        return data.getOrganizationById;
    });
};

export const getOrganizationByOrganizationId = (organization_id) => {
    let variables = {
        filter: { AND: [{ organization_id: organization_id }] }
    };
    return fetchQuery(environment, OrganizationIdQuery, variables).then((data) => {
        return data.organizations.edges[0] ? data.organizations.edges[0].node.id : "";
    });
};

export const checkOrganization = (organization_id, id) => {
    let variables = {
        organization_id: organization_id
    };
    if (id) variables.id = id;
    return fetchQuery(environment, OrganizationCheckExistQuery, variables).then((data) => {
        return data.checkExistentOrganizationId;
    });
};
