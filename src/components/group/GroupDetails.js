import React from "react";
import PropTypes from "prop-types";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";

import Group from "./Group";
import EditField from "../EditField";
import DeleteContactMutation from "../../mutations/DeleteContactMutation";
import UpdateGroupMutation from "../../mutations/UpdateGroupMutation";
import environment from "../../createRelayEnvironment";
import InfoCreatorModifier from "../InfoCreatorModifier";

const GroupDetailsQuery = graphql`
    query GroupDetailsQuery($groupId: Int!, $filter: ContactFilter) {
        ...Group_members @arguments(count: $count, filter: $filter)
        getGroupById(handle_id: $groupId) {
            ...Group_group
            name
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

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        };
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

    getGroup = (group) => {
        this.group = group;
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
                        this.group = props.getGroupById;
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
                                        <Form>
                                            <Group onChange={this._handleGroupChange} group={props.getGroupById} />
                                            <div className="text-right mt-4">
                                                <button onClick={() => this._handleDelete()} className="btn link">
                                                    {t("actions.delete")}
                                                </button>
                                                <button
                                                    onClick={() => this._handleUpdate(props.getGroupById)}
                                                    className="btn primary lg"
                                                >
                                                    {t("actions.save")}
                                                </button>
                                            </div>
                                        </Form>
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
