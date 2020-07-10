import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import EndUserUpdateFormContainer from "../../containers/endUser/EndUserUpdateForm";
import DeleteEndUserMutation from "../../mutations/endUser/DeleteEndUserMutation";

import EndUserDetailsQuery from "../../queries/endUser/EndUserDetailsQuery";

class EndUserDetails extends React.Component {
    ID_ENTITY_KEY = "endUserId";
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
        DeleteEndUserMutation(idEntity, () => this.props.history.push(`/network/end-users`));
    };

    render() {
        const entityId = this.getId();
        return (
            <QueryRenderer
                environment={environment}
                query={EndUserDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: entityId
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details endUser-details">
                                <EndUserUpdateFormContainer
                                    isFromModal={this.props.isFromModal}
                                    onDelete={this.handleDelete}
                                    endUser={props.getEndUserById}
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

export default EndUserDetails;
