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
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

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
        <div className={!editable ? "list-items-label" : ""}>
            {fields.map((email, index) =>
                editable ? (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : "input-group"}>
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
                            <i className="icon-trash" onClick={() => removeRow(index)}></i>
                        </div>
                    </div>
                ) : (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
                        <div>
                            {fields.getAll()[index].email ? (
                                <CopyToClipboard>{fields.getAll()[index].email}</CopyToClipboard>
                            ) : (
                                <div>{fields.getAll()[index].email}</div>
                            )}
                        </div>
                        <div>{fields.getAll()[index].type}</div>
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
        <div className={!editable ? "list-items-label" : ""}>
            {fields.map((phone, index) =>
                editable ? (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : "input-group"}>
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
                            <i className="icon-trash" onClick={() => removeRow(index)}></i>
                        </div>
                    </div>
                ) : (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
                        <div>{fields.getAll()[index].phone}</div>
                        <div>{fields.getAll()[index].type}</div>
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
        UpdateContactMutation(contact, this);
    };

    render() {
        let {
            contact,
            t,
            name,
            notes,
            title,
            contact_type,
            pgp_fingerprint,
            handleSubmit,
            pristine,
            submitting
        } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Form.Row>
                    <Col>
                        <div className="title-section">
                            <button
                                type="button"
                                onClick={() => this.props.history.push(`/community/contacts`)}
                                className="btn btn-back outline"
                            >
                                <span>{t("actions.back")}</span>
                            </button>
                            <EditField
                                error={this.props.formSyncErrors.name}
                                meta={this.props.fields.name}
                                form={this.props.form}
                                dispatch={this.props.dispatch}
                            >
                                <h1>{name}</h1>
                            </EditField>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </Col>
                    <Col>
                        <InfoCreatorModifier model={contact} />
                    </Col>
                </Form.Row>
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
                                            return editable ? (
                                                <Field
                                                    name="notes"
                                                    component={FieldInput}
                                                    as="textarea"
                                                    rows="3"
                                                    placeholder={t("contact-details.add-notes")}
                                                />
                                            ) : (
                                                <span className="pre-text">{notes}</span>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                            <hr />
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("contact-details.general-information")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <>
                                                    <div className="table-details">
                                                        <div>
                                                            <div className="w-15">Title</div>
                                                            <div className="w-15">Type</div>
                                                            <div className="w-35">E-mails</div>
                                                            <div className="w-35">Phone</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div className="w-20">
                                                                    {!editable ? (
                                                                        title
                                                                    ) : (
                                                                        <Form.Group>
                                                                            <Field
                                                                                type="text"
                                                                                component={FieldInput}
                                                                                placeholder="Type title"
                                                                                name="title"
                                                                            />
                                                                        </Form.Group>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    {!editable ? (
                                                                        contact_type
                                                                    ) : (
                                                                        <Dropdown
                                                                            className="auto"
                                                                            emptyLabel="Select type"
                                                                            name="contact_type"
                                                                            type="contact_type"
                                                                            onChange={(e) => {}}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <FieldArray
                                                                        name="emails"
                                                                        t={t}
                                                                        component={renderEmails}
                                                                        editable={editable}
                                                                        dispatch={this.props.dispatch}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <FieldArray
                                                                        name="phones"
                                                                        t={t}
                                                                        component={renderPhones}
                                                                        editable={editable}
                                                                        dispatch={this.props.dispatch}
                                                                    />
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
                                                                {!editable ? (
                                                                    pgp_fingerprint
                                                                ) : (
                                                                    <Form.Group>
                                                                        <Field
                                                                            type="text"
                                                                            component={FieldInput}
                                                                            className="xlg"
                                                                            placeholder={t(
                                                                                "contact-details.pgp-fingerprint"
                                                                            )}
                                                                            name="pgp_fingerprint"
                                                                        />
                                                                    </Form.Group>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                            <hr />
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("contact-details.profesional-details")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
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
                                                            editable={editable}
                                                            dispatch={this.props.dispatch}
                                                            errors={this.props.formSyncErrors.organizations}
                                                            metaFields={this.props.fields}
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
                    <Worklog model={contact} refetch={this.refetch} />
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
