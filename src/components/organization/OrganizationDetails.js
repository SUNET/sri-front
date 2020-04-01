import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import OrganizationUpdateFormContainer from "../../containers/organization/OrganizationUpdateForm";
import DeleteOrganizationMutation from "../../mutations/organization/DeleteOrganizationMutation";
import environment from "../../createRelayEnvironment";

const OrganizationDetailsQuery = graphql`
    query OrganizationDetailsQuery($organizationId: ID!) {
        getOrganizationById(id: $organizationId) {
            ...OrganizationUpdateForm_organization
            id
            name
            type {
                name
                value
            }
            website
            organization_id
            organization_number
            description
            incident_management_info
            affiliation_customer
            affiliation_end_customer
            affiliation_host_user
            affiliation_partner
            affiliation_provider
            affiliation_site_owner
            parent_organization {
                organization_id
            }
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
            contacts {
                id
                first_name
                last_name
                contact_type {
                    name
                    value
                }
                emails {
                    id
                    name
                    type {
                        name
                        value
                    }
                }
                phones {
                    id
                    name
                    type {
                        name
                        value
                    }
                }
                roles {
                    relation_id
                    role_data {
                        id
                        name
                    }
                    end {
                        id
                        name
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

class OrganizationDetails extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleDelete = () => {
        const organizationId = this.props.match.params.organizationId;
        DeleteOrganizationMutation(organizationId, () => this.props.history.push(`/community/organizations`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={OrganizationDetailsQuery}
                variables={{
                    organizationId: this.props.match.params.organizationId
                }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details organization-details">
                                <OrganizationUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    organization={props.getOrganizationById}
                                    history={this.props.history}
                                />
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default OrganizationDetails;
