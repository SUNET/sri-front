import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import ProviderUpdateFormContainer from "../../containers/provider/ProviderUpdateForm";
// import DeleteProviderMutation from "../../mutations/provider/DeleteProviderMutation";

import ProviderDetailsQuery from "../../queries/provider/ProviderDetailsQuery";

class ProviderDetails extends React.Component {
    ID_ENTITY_KEY = "providerId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteProviderMutation(idEntity, () => this.props.history.push(`/network/providers`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={ProviderDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details provider-details">
                                <ProviderUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    provider={props.getProviderById}
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

export default ProviderDetails;
