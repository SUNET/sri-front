import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import GroupUpdateFormContainer from "../../containers/GroupUpdateForm";
import UpdateGroupMutation from "../../mutations/UpdateGroupMutation";
import environment from "../../createRelayEnvironment";

const GroupDetailsQuery = graphql`
    query GroupDetailsQuery($groupId: Int!, $filter: ContactFilter) {
        getGroupById(handle_id: $groupId) {
            ...GroupUpdateForm_group
            handle_id
            name
            description
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
        contacts(filter: $filter) {
            edges {
                node {
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
                        name
                        end {
                            handle_id
                            name
                        }
                    }
                }
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

    handleSubmit = (group) => {
        group.id = this.props.match.params.groupId;
        UpdateGroupMutation(group, this.props.history);
    };

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={GroupDetailsQuery}
                variables={{
                    groupId: this.props.match.params.groupId,
                    filter: {
                        AND: [
                            {
                                member_of_groups: {
                                    handle_id: this.props.match.params.groupId
                                }
                            }
                        ]
                    }
                }}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>;
                    } else if (props) {
                        return (
                            <section className="model-details">
                                <GroupUpdateFormContainer
                                    onSubmit={this.handleSubmit}
                                    group={props.getGroupById}
                                    members={props.contacts}
                                    history={this.props.history}
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