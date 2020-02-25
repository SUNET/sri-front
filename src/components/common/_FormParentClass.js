import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FieldArray, Field, reduxForm } from "redux-form";
import InfoCreatorModifier from "../InfoCreatorModifier";
import CreateContactMutation from "../../mutations/contact/CreateContactMutation";
import FieldArrayOrganizationsContact from "../contact/FieldArrayOrganizationsContact";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ContactPhones from "../contact/ContactPhones";
import ContactEmails from "../contact/ContactEmails";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import ValidationsContactForm from "../contact/ValidationContactForm";
import BackCTA from "./BackCTA";
import Worklog from "../Worklog";

import { isBrowser, isMobile, isTablet } from "react-device-detect";

import { CREATE_CONTACT_FORM } from "../../utils/constants";

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

class _CreateAndUpdateFormParent extends React.Component {
    IS_UPDATED_FORM = false;
    FORM_ID = CREATE_CONTACT_FORM;
    refetch = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    handleSubmit = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    renderHeader(editMode = false) {
        return (
            <Form.Row>
                <Col className={`d-inline-flex align-items-center ${isMobile ? "mb-3" : ""}`}>
                    {this.renderHeaderName(editMode)}
                </Col>
                {this.IS_UPDATED_FORM && <Col>{this.renderHeaderRight()}</Col>}
            </Form.Row>
        );
    }
    renderInputName(kindOfName, editMode = false) {
        // INFO: kindOfName = 'first_name' || 'last_name'
        const { t, formSyncErrors, fields, form, dispatch } = this.props;
        const placeHolderString =
            kindOfName === "first_name" ? t("contact-details.name") : t("contact-details.lastName");
        return (
            <EditField
                error={formSyncErrors[kindOfName]}
                meta={fields[kindOfName]}
                form={form}
                dispatch={dispatch}
                editable={editMode}
                placeholder={placeHolderString}
                name={kindOfName}
            >
                <h1>{this.props[kindOfName]}</h1>
            </EditField>
        );
    }
    renderHeaderName(editMode = false) {
        const { shown_in_modal, t, first_name, last_name } = this.props;
        const editionModeClass = editMode ? "title-section__name-inputs--edition-mode" : "";
        const showBackCTA = isBrowser && shown_in_modal;

        return (
            <div className="title-section">
                {showBackCTA && <BackCTA onClick={() => this.props.history.goBack()} />}
                {this.IS_UPDATED_FORM && isMobile && this.renderEditButton()}
                <div className="vertical-separator"></div>
                <div className={`title-section__name-inputs ${editionModeClass}`}>
                    {this.renderInputName("first_name", editMode)}
                    {this.renderInputName("last_name", editMode)}
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
    renderNotesToggleSection(editMode = false) {
        const { t } = this.props;
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
                        <span className="pre-text">{this.props.notes}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderGeneralInfoToggleSection(editMode = true) {
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
                        editable={editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="emails"
                        t={t}
                        component={ContactEmails}
                        editable={editMode}
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
                        editable={editMode}
                        dispatch={this.props.dispatch}
                    />
                ),
                editContent: (
                    <FieldArray
                        name="phones"
                        t={t}
                        component={ContactPhones}
                        editable={editMode}
                        dispatch={this.props.dispatch}
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
                                return renderFormBlockSection(editMode, formData, index);
                            })}
                        </div>
                        <div className="table-details mt-4">
                            <div>
                                <div>PGP Fingerprint</div>
                            </div>
                            <div>
                                <div>
                                    {!editMode ? (
                                        pgp_fingerprint
                                    ) : (
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                className={`${isBrowser ? "xlg" : "auto"}`}
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
        console.log(this.FORM_ID);

        return (
            <SaveCancelCTAs
                formId={this.FORM_ID}
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
    renderProfessionalDetails(editMode) {
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
                        editable={editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.organizations}
                        metaFields={this.props.fields}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderWorkLog() {
        const { t, contact } = this.props;
        return (
            <section className="model-section">
                {this.IS_UPDATED_FORM ? (
                    <Worklog model={contact} refetch={this.refetch} />
                ) : (
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
                )}
            </section>
        );
    }
    renderModelMainSection(editMode = true) {
        return (
            <section className="model-section">
                <Form.Row>
                    <Col>
                        {this.renderNotesToggleSection(editMode)}
                        <hr />
                        {this.renderGeneralInfoToggleSection(editMode)}
                        <hr />
                        {this.renderProfessionalDetails(editMode)}
                    </Col>
                </Form.Row>
            </section>
        );
    }
    render() {
        throw new Error("This method should be overwritten in the child class");
        return <></>;
    }
}

export default _CreateAndUpdateFormParent;
