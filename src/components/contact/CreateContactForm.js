import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

import CreateContactMutation from "../../mutations/contact/CreateContactMutation";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";

const renderEmails = ({ fields, t }) => {
    const pushField = (event) => {
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <div className="list-items__inputs">
            {fields.map((email, index) => (
                <div key={index} className={`list-items__inputs__row input-group`}>
                    <Form.Group>
                        <Field
                            className="auto"
                            name={`${email}.email`}
                            type="text"
                            component={FieldInput}
                            placeholder="Email"
                        />
                    </Form.Group>
                    <Dropdown
                        className="auto"
                        emptyLabel="Type"
                        type="email_type"
                        name={`${email}.type`}
                        onChange={(e) => {}}
                    />
                    <div className="row-remove-cta" onClick={() => fields.remove(index)}></div>
                </div>
            ))}
            <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </div>
    );
};

const renderPhones = ({ fields, t }) => {
    const pushField = (event) => {
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <div className="list-items__inputs">
            {fields.map((phone, index) => (
                <div key={index} className={`list-items__inputs__row input-group`}>
                    <Form.Group>
                        <Field
                            className="auto"
                            name={`${phone}.phone`}
                            type="text"
                            component={FieldInput}
                            placeholder="Phone"
                        />
                    </Form.Group>
                    <Dropdown
                        className="auto"
                        emptyLabel="Type"
                        type="phone_type"
                        name={`${phone}.type`}
                        onChange={(e) => {}}
                    />
                    <div className="row-remove-cta" onClick={() => fields.remove(index)}></div>
                </div>
            ))}
            <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </div>
    );
};

const renderFormBlockSection = (editable, data, uniqueKey) => {
    const isPresentState = !editable && data.presentContent;
    return (
        <div className="form-internal-block__section" key={uniqueKey}>
            <div className="form-internal-block__section__title">{data.title}</div>
            <div
                className={`form-internal-block__section__content ${
                    editable ? "form-internal-block__section__content--edition-mode" : ""
                }`}
            >
                {isPresentState ? data.presentContent : data.editContent}
            </div>
        </div>
    );
};

class CreateContactForm extends React.Component {
    handleSubmit = (contact) => {
        CreateContactMutation(contact, this);
    };

    renderHeaderName() {
        const { t, first_name, last_name } = this.props;
        const editMode = true;
        return (
            <div className="title-section">
                <button
                    type="button"
                    onClick={() => this.props.history.push(`/community/contacts`)}
                    className="btn btn-back outline"
                >
                    <span>{t("actions.back")}</span>
                </button>
                <div className="vertical-separator"></div>
                <div className="title-section__name-inputs">
                    <EditField
                        error={this.props.formSyncErrors.name}
                        meta={this.props.fields.name}
                        form={this.props.form}
                        dispatch={this.props.dispatch}
                        editable={editMode}
                        placeholder={t("contact-details.name")}
                        name="first_name"
                    >
                        <h1>{first_name}</h1>
                    </EditField>
                    <EditField
                        error={this.props.formSyncErrors.last_name}
                        meta={this.props.fields.last_name}
                        form={this.props.form}
                        dispatch={this.props.dispatch}
                        editable={editMode}
                        placeholder={t("contact-details.lastName")}
                        name="last_name"
                    >
                        <h1>{last_name}</h1>
                    </EditField>
                </div>
            </div>
        );
    }

    renderNotesToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.notes")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <Field
                        name="notes"
                        component={FieldInput}
                        as="textarea"
                        rows="3"
                        placeholder={t("contact-details.add-notes")}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderGeneralInfoToggleSection() {
        const editionMode = true;
        const { t, title, contact_type, pgp_fingerprint } = this.props;
        const generalInfoFirstRow = [
            {
                title: "Title",
                presentContent: title,
                editContent: (
                    <Form.Group>
                        <Field type="text" component={FieldInput} placeholder="Type title" name="title" />
                    </Form.Group>
                )
            },
            {
                title: "Type",
                presentContent: contact_type,
                editContent: (
                    <Dropdown
                        className="auto"
                        emptyLabel="Select type"
                        name="contact_type"
                        type="contact_type"
                        onChange={(e) => {}}
                    />
                )
            },
            {
                title: "E-mails",
                presentContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={renderEmails}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={renderEmails}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                )
            },
            {
                title: "Phone",
                presentContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={renderPhones}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={renderPhones}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                )
            }
        ];
        return (
            // <ToggleSection defaultEditable={false}>
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("contact-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <>
                        <div className="form-internal-block">
                            {generalInfoFirstRow.map((formData, index) => {
                                return renderFormBlockSection(editionMode, formData, index);
                            })}
                        </div>
                        <div className="table-details mt-4">
                            <div>
                                <div>PGP Fingerprint</div>
                            </div>
                            <div>
                                <div>
                                    {!editionMode ? (
                                        pgp_fingerprint
                                    ) : (
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                className="xlg"
                                                placeholder={t("contact-details.pgp-fingerprint")}
                                                name="pgp_fingerprint"
                                            />
                                        </Form.Group>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderProfesionalDetails() {
        const { t } = this.props;
        const editionMode = true;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.profesional-details")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <FieldArray
                        name="organizations"
                        component={FieldArrayOrganizationsContact}
                        editable={editionMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.organizations}
                        metaFields={this.props.fields}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    render() {
        const { t, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="model-details create-contact-form">
                    {/* <div className="text-right mt-4">{this.renderSaveCancelCTAs()}</div> */}
                    <Form.Row>
                        <Col>{this.renderHeaderName()}</Col>
                    </Form.Row>
                    <section className="model-section">
                        <Form.Row>
                            <Col>
                                {this.renderNotesToggleSection()}
                                <hr />
                                {this.renderGeneralInfoToggleSection()}
                                <hr />
                                {this.renderProfesionalDetails()}
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
                            this.props.history.push("/community/contacts");
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

const validate = (values) => {
    const errors = {};
    if (!values.name || values.name === "New contact") {
        errors.name = "* Required!";
    }

    if (!values.contact_type) {
        errors.contact_type = "* Required!";
    }

    if (values.emails) {
        const emailArrayErrors = [];
        values.emails.forEach((email, emailIndex) => {
            const emailErrors = {};
            if (!email || !email.email) {
                emailErrors.email = "* Required!";
                emailArrayErrors[emailIndex] = emailErrors;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.email)) {
                emailErrors.email = "* Invalid email!";
                emailArrayErrors[emailIndex] = emailErrors;
            }
            if (!email || !email.type) {
                emailErrors.type = "* Required!";
                emailArrayErrors[emailIndex] = emailErrors;
            }
            return emailErrors;
        });
        if (emailArrayErrors.length) {
            errors.emails = emailArrayErrors;
        }
    }

    if (values.phones) {
        const phoneArrayErrors = [];
        values.phones.forEach((phone, phoneIndex) => {
            const phoneErrors = {};
            if (!phone || !phone.phone) {
                phoneErrors.phone = "* Required!";
                phoneArrayErrors[phoneIndex] = phoneErrors;
            }
            if (!phone || !phone.type) {
                phoneErrors.type = "* Required!";
                phoneArrayErrors[phoneIndex] = phoneErrors;
            }
            return phoneErrors;
        });
        if (phoneArrayErrors.length) {
            errors.phones = phoneArrayErrors;
        }
    }

    if (values.organizations) {
        const organizationArrayErrors = [];
        values.organizations.forEach((organization, organizationIndex) => {
            const organizationErrors = {};
            if (!organization || !organization.role) {
                organizationErrors.role = "* Required!";
                organizationArrayErrors[organizationIndex] = organizationErrors;
            }
            if (!organization || !organization.organization) {
                organizationErrors.organization = "* Required!";
                organizationArrayErrors[organizationIndex] = organizationErrors;
            }
            return organizationErrors;
        });
        if (organizationArrayErrors.length) {
            errors.organizations = organizationArrayErrors;
        }
    }

    return errors;
};

CreateContactForm = reduxForm({
    form: "createContact",
    validate,
    initialValues: {
        name: ""
    }
})(CreateContactForm);

export default withTranslation()(withRouter(CreateContactForm));
