import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import GroupUpdateFormContainer from "../../containers/GroupUpdateForm";
import EditField from "../EditField";
import UpdateGroupMutation from "../../mutations/UpdateGroupMutation";
import DeleteGroupMutation from "../../mutations/DeleteGroupMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

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
        console.log(group);
        UpdateGroupMutation(group, this.props.history);
    };

    _handleGroupChange = (event) => {
        this.setState({ name: event.target.value });
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
                                        <GroupUpdateFormContainer
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
