import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import GroupUpdateFormContainer from "../../containers/group/GroupUpdateForm";
import DeleteGroupMutation from "../../mutations/group/DeleteGroupMutation";
import environment from "../../createRelayEnvironment";

const GroupDetailsQuery = graphql`
    query GroupDetailsQuery($groupId: Int!) {
        getGroupById(handle_id: $groupId) {
            ...GroupUpdateForm_group
            handle_id
            name
            description
            contacts {
                handle_id
                first_name
                last_name
                contact_type
                emails {
                    handle_id
                    name
                    type
                }
                phones {
                    handle_id
                    name
                    type
                }
                roles {
                    role_data {
                        handle_id
                        name
                    }
                    end {
                        handle_id
                        name
                    }
                }
                outgoing {
                    name
                    relation {
                        relation_id
                        type
                        end {
                            handle_id
                            node_name
                        }
                    }
                }
            }
            comments {
                id
                user {
                    first_name
                    last_name
                }
                comment
                submit_date
            }
            created
            creator {
                email
            }
            modified
            modifier {
                email
            }
        }
    }
`;

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
