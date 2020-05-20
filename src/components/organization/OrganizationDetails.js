import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import OrganizationUpdateFormContainer from "../../containers/organization/OrganizationUpdateForm";
import DeleteOrganizationMutation from "../../mutations/organization/DeleteOrganizationMutation";
import environment from "../../createRelayEnvironment";
import OrganizationDetailsQuery from "../../queries/organization/OrganizationDetailsQuery";
import { withTranslation } from "react-i18next";

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
                        return <div>{this.props.t('general.error')}</div>;
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

export default withTranslation()(OrganizationDetails);
