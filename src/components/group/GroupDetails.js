import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import Group from "../../containers/Group";
import EditField from "../EditField";
import UpdateGroupMutation from "../../mutations/UpdateGroupMutation";
import DeleteGroupMutation from "../../mutations/DeleteGroupMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

const GroupDetailsQuery = graphql`
    query GroupDetailsQuery($groupId: Int!, $filter: ContactFilter) {
        getGroupById(handle_id: $groupId) {
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
            ...Group_group
        }
        contacts(filter: $filter) {
            edges {
                node {
                    handle_id
                    first_name
                    last_name
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

    handleSubmit = (values) => {
        console.log("values", values);
    }
    _handleGroupChange = (event) => {
        this.setState({ name: event.target.value });
    };

    _handleUpdate = (group) => {
        const update_group = {
            id: this.props.match.params.groupId,
            name: group.name,
            description: group.description
        };
        UpdateGroupMutation(update_group);
    };

    _handleDelete = () => {
        const groupId = this.props.match.params.groupId;
        DeleteGroupMutation(groupId, () => this.props.history.push(`/community/groups`));
    };

    render() {
        let { t } = this.props;
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
                                <Row>
                                    <Col>
                                        <div className="title-section">
                                            <button
                                                onClick={() => this.props.history.goBack()}
                                                className="btn btn-back outline"
                                            >
                                                <span>{t("actions.back")}</span>
                                            </button>
                                            <EditField onChange={this._handleGroupChange}>
                                                <h1>{props.getGroupById.name}</h1>
                                            </EditField>
                                            <FontAwesomeIcon icon={faStar} />
                                        </div>
                                    </Col>
                                    <Col>
                                        <InfoCreatorModifier model={props.getGroupById} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                            <Group
                                                onSubmit={this.handleSubmit}
                                                group={props.getGroupById}
                                                members={props.contacts}
                                            />
                                    </Col>
                                </Row>
                            </section>
                        );
                    }
                    return <div>Loading</div>;
                }}
            />
        );
    }
}

export default withTranslation()(GroupDetails);
