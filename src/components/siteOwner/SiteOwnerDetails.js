import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import SiteOwnerUpdateFormContainer from "../../containers/siteOwner/SiteOwnerUpdateForm";
import DeleteSiteOwnerMutation from "../../mutations/siteOwner/DeleteSiteOwnerMutation";

import SiteOwnerDetailsQuery from "../../queries/siteOwner/SiteOwnerDetailsQuery";

class SiteOwnerDetails extends React.Component {
    ID_ENTITY_KEY = "siteOwnerId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteSiteOwnerMutation(idEntity, () => this.props.history.push(`/network/site-owners`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={SiteOwnerDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details siteOwner-details">
                                <SiteOwnerUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    siteOwner={props.getSiteOwnerById}
                                    history={this.props.history}
                                    refetch={retry}
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

export default SiteOwnerDetails;
