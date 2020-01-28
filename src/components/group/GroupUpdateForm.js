import React from "react";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import uuidv4 from "uuid/v4";
import EditField from "../EditField";
import InfoCreatorModifier from "../InfoCreatorModifier";
import FieldInput from "../FieldInput";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";

import copy from "clipboard-copy";
import Worklog from "../Worklog";
import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import UpdateGroupMutation from "../../mutations/group/UpdateGroupMutation";

import "../../style/ModelDetails.scss";

class GroupUpdateForm extends React.Component {
    state = {
        editMode: false
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

    _hasBeenAdded = (newMember) => {
        if (this.props.memberValues) {
            return this.props.memberValues.some((member) => member.handle_id === newMember.handle_id);
        }
        return false;
    };

    handleSelectedMember = (selection) => {
        if (selection !== null) {
            this.props.getContact(selection.handle_id).then((member) => {
                const newMember = {
                    name: member.name,
                    first_name: member.first_name,
                    last_name: member.last_name,
                    handle_id: member.handle_id,
                    contact_type: member.contact_type,
                    organization: member.roles[0] ? member.roles[0].end.handle_id : "",
                    organization_obj: member.roles[0] ? member.roles[0].end : {},
                    organization_label: member.roles[0] ? member.roles[0].end.name : "",
                    email: member.emails,
                    email_obj: member.emails,
                    phone: member.phones,
                    phone_obj: member.phones,
                    created: true,
                    origin: "new",
                    status: "saved",
                    key: uuidv4()
                };
                if (!this._hasBeenAdded(newMember)) {
                    this.props.dispatch(arrayPush(this.props.form, "members", newMember));
                }
            });
        }
    };

    copyAllEmails = () => {
        const emails = this.props.memberValues.map((member) => {
            return member.status === "saved" ? member.email : null;
        });
        copy(emails.join(" "));
    };

    handleSubmit = (group) => {
        UpdateGroupMutation(group, this);
    };

    renderHeaderName(editMode = true) {
        const { t, name } = this.props;
        return (
            <div className="title-section">
                <button
                    type="button"
                    onClick={() => this.props.history.push(`/community/groups`)}
                    className="btn btn-back outline"
                >
                    <span>{t("actions.back")}</span>
                </button>
                <div className="vertical-separator"></div>
                <EditField
                    error={this.props.formSyncErrors.name}
                    meta={this.props.fields.name}
                    form={this.props.form}
                    dispatch={this.props.dispatch}
                    editable={editMode}
                    placeholder={t("contact-details.new")}
                >
                    <h1>{name}</h1>
                </EditField>
            </div>
        );
    }
    renderHeaderRight() {
        const { t, group } = this.props;
        return (
            <div className="title-section__right-block">
                <div className="title-section__right-block__buttons with-vertical-separator with-vertical-separator--right">
                    <button
                        type="button"
                        onClick={() => {
                            this.setState({ editMode: !this.state.editMode });
                        }}
                        className="btn outline btn-edit"
                    >
                        <i className="icon-pencil"></i>
                        <span>{t("actions.edit")}</span>
                    </button>
                </div>
                <InfoCreatorModifier model={group} />
            </div>
        );
    }

    renderDescriptionToggleSection(editMode = true) {
        const { t, description } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.description")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {editMode ? (
                        <Field
                            name="description"
                            component={FieldInput}
                            as="textarea"
                            rows="3"
                            placeholder={t("group-details.add-description")}
                        ></Field>
                    ) : (
                        <span className="pre-text">{description}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderContactsToggleSection(editMode = true) {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.contacts")}</h2>
                </ToggleHeading>

                <TogglePanel>
                    <FieldArray
                        name="members"
                        component={FieldArrayMembersGroup}
                        editable={editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.members}
                        metaFields={this.props.fields}
                        handleContactSearch={this.handleSelectedMember}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    render() {
        let { group, t, handleSubmit, pristine, submitting } = this.props;
        console.log(group);
        
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Form.Row>
                    <Col>{this.renderHeaderName(this.state.editMode)}</Col>
                    <Col>{this.renderHeaderRight()}</Col>
                </Form.Row>
                <section className="model-section">
                    <Form.Row>
                        <Col>{this.renderDescriptionToggleSection(this.state.editMode)}</Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>{this.renderContactsToggleSection(this.state.editMode)}</Col>
                    </Form.Row>
                    <section className="model-section">
                        <Worklog model={group} refetch={this.refetch} />
                    </section>
                </section>

                <div className="text-right mt-4">
                    <button type="button" className="btn link" onClick={this.props.onDelete}>
                        {t("actions.delete")}
                    </button>
                    <button type="submit" className="btn primary lg" disabled={pristine || submitting}>
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

    if (values.members) {
        const memberArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
            const memberErrors = {};
            if (!member || !member.name) {
                memberErrors.name = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            } else if (!/^[a-zA-Z0-9]+ ?([a-zA-Z0-9]+$){1}/i.test(member.name)) {
                memberErrors.name = "* Invalid name!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.email) {
                memberErrors.email = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(member.email)) {
                memberErrors.email = "* Invalid email!";
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

GroupUpdateForm = reduxForm({
    form: "updateGroup",
    validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(GroupUpdateForm);

const GroupUpdateFragment = createRefetchContainer(
    withTranslation()(GroupUpdateForm),
    {
        group: graphql`
            fragment GroupUpdateForm_group on Group {
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
        `
    },

    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query GroupUpdateFormRefetchQuery($groupId: Int!) {
            getGroupById(handle_id: $groupId) {
                ...GroupUpdateForm_group
            }
        }
    `
);

export default GroupUpdateFragment;
