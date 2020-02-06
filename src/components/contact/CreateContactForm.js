import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

import CreateContactMutation from "../../mutations/contact/CreateContactMutation";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ContactPhones from "./ContactPhones";
import ContactEmails from "./ContactEmails";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import ValidationsContactForm from "./ValidationContactForm";
import BackCTA from "../common/BackCTA";
import { CREATE_CONTACT_FORM } from "../../utils/constants";

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
        const { shown_in_modal, t, first_name, last_name } = this.props;
        const editMode = true;
        return (
            <div className="title-section">
                {!shown_in_modal && <BackCTA onClick={() => this.props.history.goBack()} />}
                <div className="vertical-separator"></div>
                <div className="title-section__name-inputs">
                    <EditField
                        error={this.props.formSyncErrors.first_name}
                        meta={this.props.fields.first_name}
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
                        component={ContactEmails}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={ContactEmails}
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
                        component={ContactPhones}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={ContactPhones}
                        // editable={editionMode}
                        // dispatch={this.props.dispatch}
                    />
                )
            }
        ];
        return (
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

    renderSaveCancelButtons() {
        return (
            <SaveCancelCTAs
                formId={CREATE_CONTACT_FORM}
                onCancel={() => {
                    if (this.props.shown_in_modal) {
                        this.props.hideContactModal();
                    } else {
                        this.props.history.goBack();
                    }
                }}
            />
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
            <form id={CREATE_CONTACT_FORM} onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="model-details create-contact-form">
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
                {this.renderSaveCancelButtons()}
            </form>
        );
    }
}

CreateContactForm = reduxForm({
    form: "createContact",
    validate: ValidationsContactForm.contactFormValidate,
    initialValues: {}
})(CreateContactForm);

export default withTranslation()(CreateContactForm);
