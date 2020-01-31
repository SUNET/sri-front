import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";

import DropdownSearch from "../DropdownSearch";
import CreateGroupMutation from "../../mutations/group/CreateGroupMutation";
import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import Worklog from "../Worklog";

class CreateGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };
    }

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
                    organization: member.roles,
                    organization_obj: member.roles.length ? member.roles.map((elem) => elem.end) : [],
                    organization_label: member.roles.length ? member.roles.map((elem) => elem.end) : [],
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

    handleSubmit = (group) => {
        CreateGroupMutation(group, this);
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
                    placeholder={t("group-details.new")}
                >
                    <h1>{name}</h1>
                </EditField>
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

    renderWorklogToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("contact-details.worklog")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <Field
                        name="comment"
                        component={FieldInput}
                        as="textarea"
                        rows="3"
                        placeholder={t("worklog.add-comment")}
                        onBlur={(e) => {
                            this.setState({ comment: e.target.value });
                        }}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderFooterSaveCancel() {
        return (
            <div className="text-right mt-4">
                <button
                    type="button"
                    className="mr-2 btn link"
                    onClick={() => {
                        this.props.history.push("/community/groups");
                    }}
                >
                    Cancel
                </button>
                <button
                    className="btn primary lg"
                    type="submit"
                    // disabled={!this.props.valid || this.props.pristine || this.props.submitting}
                >
                    Save
                </button>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="model-details create-group-form">
                    <Form.Row>
                        <Col>{this.renderHeaderName(this.state.editMode)}</Col>
                    </Form.Row>
                    <section className="model-section">
                        <Form.Row>
                            <Col>{this.renderDescriptionToggleSection(this.state.editMode)}</Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>{this.renderContactsToggleSection(this.state.editMode)}</Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">{this.renderWorklogToggleSection()}</section>
                </div>
                {this.renderFooterSaveCancel()}
            </form>
        );
    }
}

const validate = (values, props) => {
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

CreateGroupForm = reduxForm({
    form: "createGroup",
    validate,
    initialValues: {
        name: ""
    }
})(CreateGroupForm);

export default withTranslation()(withRouter(CreateGroupForm));
