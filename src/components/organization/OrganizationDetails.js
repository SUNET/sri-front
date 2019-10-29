import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import OrganizationUpdateFormContainer from "../../containers/organization/OrganizationUpdateForm";

import UpdateOrganizationMutation from "../../mutations/organization/UpdateOrganizationMutation";
import DeleteOrganizationMutation from "../../mutations/organization/DeleteOrganizationMutation";
import environment from "../../createRelayEnvironment";

const OrganizationDetailsQuery = graphql`
    query OrganizationDetailsQuery($organizationId: Int!) {
        getOrganizationById(handle_id: $organizationId) {
            ...OrganizationUpdateForm_organization
            handle_id
            name
            type
            website
            customer_id
            description
            incident_management_info
            affiliation_customer
            affiliation_end_customer
            affiliation_host_user
            affiliation_partner
            affiliation_provider
            affiliation_site_owner
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
        getOrganizationContacts(handle_id: $organizationId) {
            relation_id
            contact {
                handle_id
                first_name
                last_name
                contact_type
                emails {
                    handle_id
                    name
                    type
                }
                phones {
                    handle_id
                    name
                    type
                }
                roles {
                    name
                    end {
                        handle_id
                        name
                    }
                }
            }
            role {
                handle_id
                name
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

    handleSubmit = (organization) => {
        organization.id = this.props.match.params.organizationId;
        UpdateOrganizationMutation(organization);
    };

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
                            <section className="model-details">
                                <OrganizationUpdateFormContainer
                                    onSubmit={this.handleSubmit}
                                    onDelete={this.handleDelete}
                                    organization={props.getOrganizationById}
                                    contacts={props.getOrganizationContacts}
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
