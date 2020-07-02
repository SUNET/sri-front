import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import ProviderUpdateFormContainer from "../../containers/provider/ProviderUpdateForm";
import DeleteProviderMutation from "../../mutations/provider/DeleteProviderMutation";

import ProviderDetailsQuery from "../../queries/provider/ProviderDetailsQuery";

class ProviderDetails extends React.Component {
    ID_ENTITY_KEY = "providerId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }),
        }),
    };

    getId() {
        const { isFromModal, idFromModal, match } = this.props;
        const entityId = isFromModal && idFromModal ? idFromModal : match.params[this.ID_ENTITY_KEY];
        return entityId;
    }

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteProviderMutation(idEntity, () => this.props.history.push(`/network/providers`));
    };

    render() {
        const entityId = this.getId();
        return (
            <QueryRenderer
                environment={environment}
                query={ProviderDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: entityId
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details provider-details">
                                <ProviderUpdateFormContainer
                                    isFromModal={this.props.isFromModal}
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
