import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";

import DropdownSearch from "../DropdownSearch";

import FieldArrayMembersGroup from "./FieldArrayMembersGroup";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import EditField from "../EditField";
import FieldInput from "../FieldInput";

class CreateGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };
    }

    _hasBeenAdded = (newMember) => {
        return this.props.memberValues.some((member) => member.handle_id === newMember.handle_id);
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
                    email: member.emails[0] ? member.emails[0].name : "",
                    email_obj: member.emails[0] ? member.emails[0] : {},
                    phone: member.phones[0] ? member.phones[0].name : "",
                    phone_obj: member.phones[0] ? member.phones[0] : {},
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

    render() {
        const { handleSubmit, t, name } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="model-details">
                    <section className="title-section">
                        <EditField
                            error={this.props.formSyncErrors.name}
                            meta={this.props.fields.name}
                            initialValue="New group"
                            form={this.props.form}
                            dispatch={this.props.dispatch}
                            value={name}
                        >
                            <h1 className="ml-0">{name}</h1>
                        </EditField>
                    </section>
                    <section className="model-section">
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("group-details.description")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <Field
                                            name="description"
                                            component={FieldInput}
                                            as="textarea"
                                            rows="3"
                                            placeholder={t("group-details.add-description")}
                                        />
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("group-details.members")}</h2>
                                        <DropdownSearch
                                            selection={this.handleSelectedMember}
                                            placeholder={t("search-filter.search-member")}
                                        />
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
                                                <FieldArray
                                                    name="members"
                                                    component={FieldArrayMembersGroup}
                                                    editable={true}
                                                    dispatch={this.props.dispatch}
                                                    errors={this.props.formSyncErrors.members}
                                                    metaFields={this.props.fields}
                                                />
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">
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
                                />
                            </TogglePanel>
                        </ToggleSection>
                    </section>
                </div>
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
            </form>
        );
    }
}

const validate = (values, props) => {
    const errors = {};
    if (!values.name || values.name === "New group") {
        errors.name = "* Required!";
    }

    if (!values.members || !values.members.length) {
        errors.members = { _error: "At least one member must be entered" };
    } else {
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
            if (!member || !member.organization) {
                memberErrors.organization = "* Required!";
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
        name: "New group",
        members: [
            { name: "", organization: "", email: "", phone: "", key: uuidv4(), created: false, status: "editing" }
        ]
    }
})(CreateGroupForm);

export default withTranslation()(withRouter(CreateGroupForm));
