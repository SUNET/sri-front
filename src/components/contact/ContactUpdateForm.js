import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";

import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import Worklog from "../Worklog";
import Dropdown from "../Dropdown";
import FieldArrayOrganizationsContact from "./FieldArrayOrganizationsContact";
import UpdateContactMutation from "../../mutations/contact/UpdateContactMutation";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import ContactPhones from "./ContactPhones";
import ContactEmails from "./ContactEmails";
import BackCTA from "../common/BackCTA";
import ValidationsContactForm from "./ValidationContactForm";
import { isBrowser, isMobile, isTablet } from "react-device-detect";

import "../../style/ModelDetails.scss";

const renderFormBlockSection = (editable, data, uniqueKey) => {
    const isPresentState = !editable;
    const presentContent = data.presentContent || "";
    return (
        <div className="form-internal-block__section" key={uniqueKey}>
            <div className="form-internal-block__section__title">{data.title}</div>
            <div
                className={`form-internal-block__section__content ${
                    editable ? "form-internal-block__section__content--edition-mode" : ""
                }`}
            >
                {isPresentState ? presentContent : data.editContent}
            </div>
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
            { contactId: this.props.contact.id }, // Our refetchQuery needs to know the `contactID`
            null, // We can use the refetchVariables as renderVariables
            () => {},
            { force: true }
        );
    };

    handleSubmit = (contact) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateContactMutation(contact, this);
    };

    renderHeaderName() {
        const { t, first_name, last_name } = this.props;
        const { editMode } = this.state;
        const editionModeClass = editMode ? "title-section__name-inputs--edition-mode" : "";
        return (
            <div className="title-section">
                {isBrowser && <BackCTA onClick={() => this.props.history.goBack()} />}
                {isMobile && this.renderEditButton()}
                <div className="vertical-separator"></div>
                <div className={`title-section__name-inputs ${editionModeClass}`}>
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
    renderEditButton() {
        const { t } = this.props;
        const desktopClass = isBrowser ? "with-vertical-separator with-vertical-separator--right" : "";
        return (
            <div className={`title-section__right-block__buttons ${desktopClass} mr-3`}>
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
        );
    }
    renderHeaderRight() {
        const { contact } = this.props;
        return (
            <div className="title-section__right-block">
                {isBrowser && this.renderEditButton()}
                <InfoCreatorModifier model={contact} />
            </div>
        );
    }
    renderNotesToggleSection() {
        const { t, notes } = this.props;
        const { editMode } = this.state;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.notes")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {editMode ? (
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
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={ContactEmails}
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
                        component={ContactPhones}
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={ContactPhones}
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
                                                className={`${isBrowser ? 'xlg' : 'auto'}`}
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

    renderProfessionalDetails() {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("contact-details.professional-details")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <FieldArray
                        name="organizations"
                        component={FieldArrayOrganizationsContact}
                        editable={this.state.editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.organizations}
                        metaFields={this.props.fields}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderSaveCancelButtons() {
        // change for the SaveCancelCTAs components/common/
        const { t, pristine, submitting } = this.props;
        const mobileClasses = isMobile ? "d-inline-flex align-items-center justify-content-center" : "text-right";
        return (
            <Form.Row>
                <Col className={mobileClasses}>
                    <button type="button" className="btn link" onClick={this.props.onDelete}>
                        {t("actions.delete")}
                    </button>
                    <button type="submit" className="btn primary lg" disabled={pristine || submitting}>
                        {t("actions.save")}
                    </button>
                </Col>
            </Form.Row>
        );
    }

    render() {
        let { contact, handleSubmit } = this.props;
        return (
            <>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    {isBrowser && this.renderSaveCancelButtons()}
                    <Form.Row>
                        <Col className={`d-inline-flex align-items-center ${isMobile ? "mb-3" : ""}`}>
                            {this.renderHeaderName()}
                        </Col>
                        <Col>{this.renderHeaderRight()}</Col>
                    </Form.Row>
                    <section className="model-section">
                        <Form.Row>
                            <Col>
                                {this.renderNotesToggleSection()}
                                <hr />
                                {this.renderGeneralInfoToggleSection()}
                                <hr />
                                {this.renderProfessionalDetails()}
                            </Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">
                        <Worklog model={contact} refetch={this.refetch} />
                    </section>
                    {this.renderSaveCancelButtons()}
                </form>
            </>
        );
    }
}

ContactUpdateForm = reduxForm({
    form: "updateContact",
    validate: ValidationsContactForm.contactFormValidate,
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
                id
                name
                notes
                title
                contact_type
                first_name
                last_name
                pgp_fingerprint
                emails {
                    id
                    name
                    type
                }
                phones {
                    id
                    name
                    type
                }
                roles {
                    relation_id
                    role_data {
                        id
                        name
                    }
                    end {
                        id
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
        query ContactUpdateFormRefetchQuery($contactId: ID!) {
            getContactById(id: $contactId) {
                ...ContactUpdateForm_contact
            }
        }
    `
);

export default ContactUpdateFormFragment;
