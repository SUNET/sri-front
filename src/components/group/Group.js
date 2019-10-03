import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
// import uuidv4 from "uuid/v4";
// import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
// import Dropdown from "../Dropdown";
// import ComponentFormRow from "../ComponentFormRow";
// import CopyToClipboard from "../CopyToClipboard";
// import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class Group extends React.PureComponent {
    static propTypes = {
        onChange: PropTypes.func
    };

    refetch = () => {
        this.props.relay.refetch(
            { groupId: this.props.group.handle_id }, // Our refetchQuery needs to know the `groupID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };

    render() {
        let { group, members, t } = this.props;
        return (
            <>
                <section className="model-section">
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("group-details.description")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return <span>{group.description}</span>;
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("group-details.members")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <div className="table-details">
                                        <div>
                                            <div>Name</div>
                                            <div>Organization</div>
                                            <div>Email</div>
                                            <div>Phone</div>
                                            <div></div>
                                        </div>
                                        <div>
                                            {members.edges.map((member, index) => {
                                                return (
                                                    <div>
                                                        <div>
                                                            {member.node.first_name} {member.node.last_name}
                                                        </div>
                                                        <div>
                                                            {member.node.roles.map((role, index) => {
                                                                return index === 0 ? role.end.name : null;
                                                            })}
                                                        </div>
                                                        <div>
                                                            {member.node.emails.map((email, index) => {
                                                                return index === 0 ?  email.name : null;
                                                            })}
                                                        </div>
                                                        <div>
                                                            {member.node.phones.map((phone, index) => {
                                                                return index === 0 ?  phone.name : null;
                                                            })}
                                                        </div>
                                                        <div></div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={group} refetch={this.refetch} />
                </section>
            </>
        );
    }
}

const GroupFragment = createRefetchContainer(
    withTranslation()(Group),
    {
        group: graphql`
            fragment Group_group on Group {
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
            }
        `
    },
    {
        members: graphql`
            fragment Group_members on ContactConnection {
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
        `
    },
    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query GroupRefetchQuery($groupId: Int!) {
            getGroupById(handle_id: $groupId) {
                ...Group_group
            }
        }
    `
);

export default GroupFragment;
