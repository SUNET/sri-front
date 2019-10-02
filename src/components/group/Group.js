import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
// import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
// import Dropdown from "../Dropdown";
import ComponentFormRow from "../ComponentFormRow";
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
        let { group, t } = this.props;
        return (
            <>
                <section className="model-section">
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("contact-details.notes")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return <span>test {editable.toString()}</span>;
                                        }}
                                    </PanelEditable.Consumer>
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
            }
        `
    },
    {
        members: graphql`
            fragment Group_members on Query @argumentDefinitions(
                filter: { type: ContactFilter }
            ) {
                contacts(filter: $filter) {
                    edges {
                        node {
                            handle_id
                            roles {
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
