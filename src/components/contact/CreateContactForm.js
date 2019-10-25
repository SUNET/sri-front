import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

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
        <>
            {fields.map((email, index) => (
                <div key={index} className="input-group">
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
                    <div>
                        <i className="icon-trash" onClick={() => fields.remove(index)}></i>
                    </div>
                </div>
            ))}
            <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </>
    );
};

const renderPhones = ({ fields, t }) => {
    const pushField = (event) => {
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <>
            {fields.map((phone, index) => (
                <div key={index} className="input-group">
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
                    <div>
                        <i className="icon-trash" onClick={() => fields.remove(index)}></i>
                    </div>
                </div>
            ))}
            <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </>
    );
};

class CreateContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };
    }

    render() {
        const { name, t, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="model-details">
                    <section className="title-section">
                        <EditField
                            error={this.props.formSyncErrors.name}
                            meta={this.props.fields.name}
                            initialValue="New contact"
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
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.general-information")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div className="w-15">Title</div>
                                                <div className="w-15">Type</div>
                                                <div className="w-35">E-mails</div>
                                                <div className="w-35">Phone</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                type="text"
                                                                component={FieldInput}
                                                                placeholder="Type title"
                                                                name="title"
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Dropdown
                                                            className="auto"
                                                            emptyLabel="Type"
                                                            name="contact_type"
                                                            type="contact_type"
                                                            onChange={(e) => {}}
                                                        />
                                                    </div>
                                                    <div>
                                                        <FieldArray name="emails" t={t} component={renderEmails} />
                                                    </div>
                                                    <div>
                                                        <FieldArray name="phones" t={t} component={renderPhones} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-details mt-4">
                                            <div>
                                                <div>PGP Fingerprint</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Form.Group>
                                                        <Field
                                                            name="pgp_fingerprint"
                                                            className="xlg"
                                                            component={FieldInput}
                                                            placeholder={t("contact-details.pgp-fingerprint")}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.profesional-details")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div className="w-35">Role</div>
                                                <div className="w-25">Organization ID</div>
                                                <div className="w-25">Organization</div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <FieldArray
                                                    name="organizations"
                                                    component={FieldArrayOrganizationsContact}
                                                    editable={true}
                                                    dispatch={this.props.dispatch}
                                                    errors={this.props.formSyncErrors.organizations}
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
        name: "New contact"
    }
})(CreateContactForm);

export default withTranslation()(withRouter(CreateContactForm));
