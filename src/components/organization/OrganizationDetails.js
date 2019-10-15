import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import OrganizationUpdateFormContainer from "../../containers/organization/OrganizationUpdateForm";

import UpdateOrganizationMutation from "../../mutations/UpdateOrganizationMutation";
import DeleteOrganizationMutation from "../../mutations/DeleteOrganizationMutation";
import environment from "../../createRelayEnvironment";

const OrganizationDetailsQuery = graphql`
    query OrganizationDetailsQuery($organizationId: Int!) {
        getOrganizationById(handle_id: $organizationId) {
            ...OrganizationUpdateForm_organization
            handle_id
            name
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

    _handleUpdate = (organization) => {
        const update_organization = {
            id: this.props.match.params.organizationId,
            name: organization.name,
            description: organization.description
        };
        UpdateOrganizationMutation(update_organization);
    };

    _handleDelete = () => {
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
                                <OrganizationUpdateFormContainer organization={props.getOrganizationById} />
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
