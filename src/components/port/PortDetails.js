import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import PortUpdateFormContainer from "../../containers/port/PortUpdateForm";
import DeletePortMutation from "../../mutations/port/DeletePortMutation";

import PortDetailsQuery from "../../queries/port/PortDetailsQuery";

class PortDetails extends React.Component {
    ID_ENTITY_KEY = "portId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        DeletePortMutation(idEntity, () => this.props.history.push(`/network/port`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={PortDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details port-details">
                                <PortUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    port={props.getPortById}
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

export default PortDetails;
