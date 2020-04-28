import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import __EntityClassName__UpdateFormContainer from "../../containers/__entityName__/__EntityClassName__UpdateForm";
// import Delete__EntityClassName__Mutation from "../../mutations/__entityName__/Delete__EntityClassName__Mutation";

import __EntityClassName__DetailsQuery from "../../queries/__entityName__/__EntityClassName__DetailsQuery";

class __EntityClassName__Details extends React.Component {
    ID_ENTITY_KEY = "__entityName__Id";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
        Delete__EntityClassName__Mutation(idEntity, () => this.props.history.push(`/__entityBlock__/__entityInternalRoutePath__`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={__EntityClassName__DetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{this.props.t('general.error')}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details __entityName__-details">
                                <__EntityClassName__UpdateFormContainer
                                    onDelete={this.handleDelete}
                                    __entityName__={props.get__EntityClassName__ById}
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

export default __EntityClassName__Details;
