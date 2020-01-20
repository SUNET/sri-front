import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FieldArray, Field, reduxForm, change } from "redux-form";

import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import Worklog from "../Worklog";
import Dropdown from "../Dropdown";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import CopyToClipboard from "../CopyToClipboard";
import UpdateContactMutation from "../../mutations/contact/UpdateContactMutation";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

const renderEmails = ({ fields, meta, t, editable, dispatch }) => {
    const pushField = (event) => {
        if (fields.length < 10) {
            fields.push({ status: "saved", origin: "new" });
        }
    };
    const removeRow = (index) => {
        if (fields.get(index).status === "saved") {
            dispatch(change(meta.form, `emails[${index}].status`, "remove"));
        } else {
            fields.remove(index);
        }
    };
    const values = fields.getAll();
    return (
        <div className={`list-items${!editable ? "__label" : "__inputs"}`}>
            {fields.map((email, index) =>
                editable ? (
                    <div
                        key={index}
                        className={`list-items__inputs__row ${
                            values[index].status === "remove" ? "d-none" : "input-group"
                        }`}
                    >
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
                        <div className="remove-cta" onClick={() => removeRow(index)}></div>
                    </div>
                ) : (
                    <CopyToClipboard key={index} copyContent={fields.getAll()[index].email}>
                        <div                            
                            className={`list-items__label__row ${values[index].status === "remove" ? "d-none" : ""}`}
                        >
                            <div className="list-items__label__row__main-text">{fields.getAll()[index].email}</div>
                            <div className="list-items__label__row__secondary-text">{fields.getAll()[index].type}</div>
                        </div>
                    </CopyToClipboard>
                )
            )}
            {editable ? (
                <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                    <span>{t("actions.add-new")}</span>
                </button>
            ) : null}
        </div>
    );
};

const renderPhones = ({ fields, meta, t, editable, dispatch }) => {
    const pushField = (event) => {
        if (fields.length < 10) {
            fields.push({ status: "saved", origin: "new" });
        }
    };
    const removeRow = (index) => {
        if (fields.get(index).status === "saved") {
            dispatch(change(meta.form, `phones[${index}].status`, "remove"));
        } else {
            fields.remove(index);
        }
    };
    const values = fields.getAll();
    return (
        <div className={`list-items${!editable ? "__label" : "__inputs"}`}>
            {fields.map((phone, index) =>
                editable ? (
                    <div
                        key={index}
                        className={`list-items__inputs__row ${
                            values[index].status === "remove" ? "d-none" : "input-group"
                        }`}
                    >
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
                        <div className="remove-cta" onClick={() => removeRow(index)}></div>
                    </div>
                ) : (
                    <div
                        key={index}
                        className={`list-items__label__row ${values[index].status === "remove" ? "d-none" : ""}`}
                    >
                        <div className="list-items__label__row__main-text">{fields.getAll()[index].phone}</div>
                        <div className="list-items__label__row__secondary-text">{fields.getAll()[index].type}</div>
                    </div>
                )
            )}
            {editable ? (
                <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                    <span>{t("actions.add-new")}</span>
                </button>
            ) : null}
        </div>
    );
};

class ContactUpdateForm extends React.PureComponent {
    state = {
        editMode: false
    };
    static propTypes = {
        onChange: PropTypes.func
    };

    refetch = () => {
        this.props.relay.refetch(
            { contactId: this.props.contact.handle_id }, // Our refetchQuery needs to know the `contactID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };

    handleSubmit = (contact) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateContactMutation(contact, this);
    };

    renderHeaderName() {
        const { t, name } = this.props;
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
                <EditField
                    error={this.props.formSyncErrors.name}
                    meta={this.props.fields.name}
                    form={this.props.form}
                    dispatch={this.props.dispatch}
                    editable={this.state.editMode}
                >
                    <h1>{name}</h1>
                </EditField>
            </div>
        );
    }
    renderHeaderRight() {
        const { t, contact } = this.props;
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
                <InfoCreatorModifier model={contact} />
            </div>
        );
    }
    renderNotesToggleSection() {
        const { t, notes } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.notes")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {this.state.editMode ? (
                        <Field
                            name="notes"
                            component={FieldInput}
                            as="textarea"
                            rows="3"
                            placeholder={t("contact-details.add-notes")}
                        />
                    ) : (
                        <span className="pre-text">{notes}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderGeneralInfoToggleSection() {
        const { t, title, contact_type, pgp_fingerprint } = this.props;
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
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={renderEmails}
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
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
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={renderPhones}
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                    />
                )
            }
        ];
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <>
                        <div className="form-internal-block">
                            {generalInfoFirstRow.map((formData, index) => {
                                return renderFormBlockSection(this.state.editMode, formData, index);
                            })}
                        </div>
                        <div className="table-details mt-4">
                            <div>
                                <div>PGP Fingerprint</div>
                            </div>
                            <div>
                                <div>
                                    {!this.state.editMode ? (
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
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.profesional-details")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {
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
                                    editable={this.state.editMode}
                                    dispatch={this.props.dispatch}
                                    errors={this.props.formSyncErrors.organizations}
                                    metaFields={this.props.fields}
                                />
                            </div>
                        </div>
                    }
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderSaveCancelCTAs() {
        const { t, pristine, submitting } = this.props;
        return (
            <>
                <button type="button" className="btn link" onClick={this.props.onDelete}>
                    {t("actions.delete")}
                </button>
                <button type="submit" className="btn primary lg" disabled={pristine || submitting}>
                    {t("actions.save")}
                </button>
            </>
        );
    }

    render() {
        let { contact, handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className="text-right mt-4">{this.renderSaveCancelCTAs()}</div>
                    <Form.Row>
                        <Col>{this.renderHeaderName()}</Col>
                        <Col>{this.renderHeaderRight()}</Col>
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
                        <Worklog model={contact} refetch={this.refetch} />
                    </section>
                    <div className="text-right mt-4">{this.renderSaveCancelCTAs()}</div>
                </form>
            </>
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

ContactUpdateForm = reduxForm({
    form: "updateContact",
    validate,
    enableReinitialize: true,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(ContactUpdateForm);

const ContactUpdateFormFragment = createRefetchContainer(
    withTranslation()(ContactUpdateForm),
    {
        contact: graphql`
            fragment ContactUpdateForm_contact on Contact {
                handle_id
                name
                notes
                title
                contact_type
                first_name
                last_name
                pgp_fingerprint
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
                    relation_id
                    role_data {
                        handle_id
                        name
                    }
                    end {
                        handle_id
                        name
                    }
                }
                created
                creator {
                    email
                }
                modified
                modifier {
                    email
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
            }
        `
    },
    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query ContactUpdateFormRefetchQuery($contactId: Int!) {
            getContactById(handle_id: $contactId) {
                ...ContactUpdateForm_contact
            }
        }
    `
);

export default ContactUpdateFormFragment;
