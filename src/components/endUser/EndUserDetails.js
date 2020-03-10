import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import environment from "../../createRelayEnvironment";

import EndUserUpdateFormContainer from "../../containers/endUser/EndUserUpdateForm";
// import DeleteEndUserMutation from "../../mutations/endUser/DeleteEndUserMutation";

import EndUserDetailsQuery from "../../queries/endUser/EndUserDetailsQuery";

class EndUserDetails extends React.Component {
    ID_ENTITY_KEY = "endUserId";
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    // handleDelete = () => {
    //     const idEntity = this.props.match.params[this.ID_ENTITY_KEY];
    //     DeleteEndUserMutation(idEntity, () => this.props.history.push(`/community/endUsers`));
    // };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={EndUserDetailsQuery}
                variables={{
                    [this.ID_ENTITY_KEY]: this.props.match.params[this.ID_ENTITY_KEY]
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details endUser-details">
                                <EndUserUpdateFormContainer
                                    // onDelete={this.handleDelete}
                                    endUser={props.getEndUserById}
                                    history={this.props.history}
                                    // refetch={retry}
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
