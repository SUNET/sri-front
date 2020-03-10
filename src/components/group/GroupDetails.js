import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";

import GroupUpdateFormContainer from "../../containers/group/GroupUpdateForm";
import DeleteGroupMutation from "../../mutations/group/DeleteGroupMutation";
import environment from "../../createRelayEnvironment";

import GroupDetailsQuery from "../../queries/group/GroupDetailsQuery";

class GroupDetails extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.node
            }).isRequired
        }).isRequired
    };

    handleDelete = () => {
        const groupId = this.props.match.params.groupId;
        DeleteGroupMutation(groupId, () => this.props.history.push(`/community/groups`));
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={GroupDetailsQuery}
                variables={{
                    groupId: this.props.match.params.groupId
                }}
                render={({ error, props, retry }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details group-details">
                                <GroupUpdateFormContainer
                                    onDelete={this.handleDelete}
                                    group={props.getGroupById}
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

export default GroupDetails;
