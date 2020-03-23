import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import CableUpdateFormContainer from "../../containers/cable/CableUpdateForm";
import DeleteCableMutation from "../../mutations/cable/DeleteCableMutation";

import CableDetailsQuery from "../../queries/cable/CableDetailsQuery";

class CableDetails extends React.Component {
    ID_ENTITY_KEY = "cableId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeleteCableMutation(idEntity, () => this.props.history.push(`/community/cables`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={CableDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details cable-details">
                                <CableUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    cable={props.getCableById}
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

export default CableDetails;
