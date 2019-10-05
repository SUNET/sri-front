import React from "react";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
// import uuidv4 from "uuid/v4";

import Worklog from "../Worklog";

import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class Group extends React.Component {
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
        let { group, t, handleSubmit } = this.props;
        console.log(this.props);
        return (
            <form onSubmit={handleSubmit}>
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
                                            return editable ? (
                                                <Field
                                                    name="description"
                                                    component={FieldInput}
                                                    as="textarea"
                                                    rows="3"
                                                    placeholder={t("group-details.add-description")}
                                                />
                                            ) : (
                                                <span>{group.description}</span>
                                            );
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
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <div className="table-details">
                                                    <div>
                                                        <div>Name</div>
                                                        <div>Organization</div>
                                                        <div>Email</div>
                                                        <div>Phone</div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="members"
                                                            component={FieldArrayMembersGroup}
                                                            editable={editable}
                                                        />
                                                    </div>
                                                </div>
                                            );
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
                <div className="text-right mt-4">
                    <button type="button" className="btn link">
                        {t("actions.delete")}
                    </button>
                    <button type="submit" className="btn primary lg">
                        {t("actions.save")}
                    </button>
                </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "* Required!";
    }

    if (!values.members || !values.members.length) {
        errors.members = { _error: "At least one email must be entered" };
    } else {
        const memberArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
            const memberErrors = {};
            if (!member || !member.name) {
                memberErrors.name = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.organization) {
                memberErrors.organization = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.email) {
                memberErrors.email = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.phone) {
                memberErrors.phone = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            return memberErrors;
        });
        if (memberArrayErrors.length) {
            errors.members = memberArrayErrors;
        }
    }
    return errors;
};

Group = reduxForm({
    form: "updateGroup",
    validate
})(Group);

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
