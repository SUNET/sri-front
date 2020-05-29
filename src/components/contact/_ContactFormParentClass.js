// Common imports
import React from "react";
import { FieldArray, Field } from "redux-form";
import { Form, Col } from "react-bootstrap";
// components
import BackCTA from "../common/BackCTA";
import ContactEmails from "../contact/ContactEmails";
import ContactPhones from "../contact/ContactPhones";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldArrayOrganizationsContact from "../contact/FieldArrayOrganizationsContact";
import FieldInput from "../FieldInput";
import InfoCreatorModifier from "../InfoCreatorModifier";
import SaveCancelCTAs from "../common/SaveCancelCTAs";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Worklog from "../Worklog";
// const
import { isBrowser, isMobile } from "react-device-detect";
// scss
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

class _ContactFormParentClass extends React.Component {
    // GLOBAL VARs
    IS_UPDATED_FORM = false;
    FORM_ID;
    MODEL_NAME = "contact";

    componentDidMount() {
        if (this.IS_UPDATED_FORM) {
            this.updateBreadcrumbsData();
        }
    }

    componentWillUnmount() {
        if (this.IS_UPDATED_FORM) {
            this.props.getOutOfDetails();
        }
    }

    updateBreadcrumbsData() {
        this.props.moveToDetails({
            id: this.props.initialValues.id,
            name: `${this.props.initialValues.first_name} ${this.props.initialValues.last_name} `,
        });
    }

    // Methods
    refetch = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    handleSubmit = () => {
        throw new Error("This method should be overwritten in the child class");
    };
    onClickDelete = () => {
        this.props.onDelete();
    };
    onClickCancel = () => {
        const { shownInModal, history, hideContactModal } = this.props;
        if (shownInModal) {
            hideContactModal();
        } else {
            history.goBack();
        }
    };

    // Common sections RENDERS
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
    renderSaveCancelButtons() {
        const { t } = this.props;
        const textToButtons = this.IS_UPDATED_FORM ? t("actions.delete") : t("actions.cancel");
        const functionToCancel = this.IS_UPDATED_FORM ? this.onClickDelete : this.onClickCancel;
        return <SaveCancelCTAs formId={this.FORM_ID} cancelText={textToButtons} onCancel={functionToCancel} />;
    }
    renderHeader(editMode = true, showBackButton = true, shownInModal = false) {
        return (
            <Form.Row>
                <Col className={`d-inline-flex align-items-center ${isMobile ? "mb-3" : ""}`}>
                    {this.renderHeaderName(editMode, showBackButton, shownInModal)}
                </Col>
                {this.IS_UPDATED_FORM && <Col>{this.renderHeaderRight(shownInModal)}</Col>}
            </Form.Row>
        );
    }
    renderHeaderName(editMode = true, showBackButton = true, shownInModal = false) {
        const editionModeClass = editMode ? "title-section__name-inputs--edition-mode" : "";
        return (
            <div className="title-section">
                {showBackButton && <BackCTA onClick={() => this.props.history.goBack()} />}
                {this.IS_UPDATED_FORM && isMobile && !shownInModal && this.renderEditButton()}
                <div className="vertical-separator"></div>
                <div className={`title-section__name-inputs ${editionModeClass}`}>
                    {this.renderInputName("first_name", editMode)}
                    {this.renderInputName("last_name", editMode)}
                </div>
            </div>
        );
    }
    renderHeaderRight(shownInModal = false) {
        return (
            <div className="title-section__right-block">
                {isBrowser && !shownInModal && this.renderEditButton()}
                <InfoCreatorModifier model={this.props[this.MODEL_NAME]} />
            </div>
        );
    }
    renderInputName(kindOfName, editMode = true) {
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

    // Specific toggle sections RENDERS
    renderNotesToggleSection(editMode = true) {
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
        const { t, title, contactTypeObj, pgp_fingerprint } = this.props;
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
                presentContent: contactTypeObj ? contactTypeObj.name : undefined,
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
    renderProfessionalDetails(editMode = true) {
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

    // Main RENDER
    render() {
        console.error("This method should be overwritten in the child class");
        return <div>This method should be overwritten in the child class</div>;
    }
}

export default _ContactFormParentClass;
