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

import { UPDATE_CONTACT_FORM } from "../../utils/constants";

import "../../style/ModelDetails.scss";

import _CreateAndUpdateFormParent from "../common/_FormParentClass";

// const renderFormBlockSection = (editable, data, uniqueKey) => {
//     const isPresentState = !editable;
//     const presentContent = data.presentContent || "";
//     return (
//         <div className="form-internal-block__section" key={uniqueKey}>
//             <div className="form-internal-block__section__title">{data.title}</div>
//             <div
//                 className={`form-internal-block__section__content ${
//                     editable ? "form-internal-block__section__content--edition-mode" : ""
//                 }`}
//             >
//                 {isPresentState ? presentContent : data.editContent}
//             </div>
//         </div>
//     );
// };

class ContactUpdateForm extends _CreateAndUpdateFormParent {
    IS_UPDATED_FORM = true;
    FORM_ID = UPDATE_CONTACT_FORM;
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
        console.log(contact);
        
        this.setState({ editMode: !this.state.editMode });
        UpdateContactMutation(contact, this);
    };
    // renderHeader() {
    //     return (
    //         <Form.Row>
    //             <Col className={`d-inline-flex align-items-center ${isMobile ? "mb-3" : ""}`}>
    //                 {this.renderHeaderName()}
    //             </Col>
    //             <Col>{this.renderHeaderRight()}</Col>
    //         </Form.Row>
    //     );
    // }
    // renderInputName(kindOfName, editMode = false) {
    //     // INFO: kindOfName = 'first_name' || 'last_name'
    //     const { t, formSyncErrors, fields, form, dispatch } = this.props;
    //     const placeHolderString =
    //         kindOfName === "first_name" ? t("contact-details.name") : t("contact-details.lastName");
    //     return (
    //         <EditField
    //             error={formSyncErrors[kindOfName]}
    //             meta={fields[kindOfName]}
    //             form={form}
    //             dispatch={dispatch}
    //             editable={editMode}
    //             placeholder={placeHolderString}
    //             name={kindOfName}
    //         >
    //             <h1>{this.props[kindOfName]}</h1>
    //         </EditField>
    //     );
    // }
    // renderHeaderName() {
    //     const { t, first_name, last_name } = this.props;
    //     const { editMode } = this.state;
    //     const editionModeClass = editMode ? "title-section__name-inputs--edition-mode" : "";
    //     const showBackCTA = isBrowser;

    //     return (
    //         <div className="title-section">
    //             {showBackCTA && <BackCTA onClick={() => this.props.history.goBack()} />}
    //             {isMobile && this.renderEditButton()}
    //             <div className="vertical-separator"></div>
    //             <div className={`title-section__name-inputs ${editionModeClass}`}>
    //                 {this.renderInputName("first_name", editMode)}
    //                 {this.renderInputName("last_name", editMode)}
    //             </div>
    //         </div>
    //     );
    // }
    // renderEditButton() {
    //     const { t } = this.props;
    //     const desktopClass = isBrowser ? "with-vertical-separator with-vertical-separator--right" : "";
    //     return (
    //         <div className={`title-section__right-block__buttons ${desktopClass} mr-3`}>
    //             <button
    //                 type="button"
    //                 onClick={() => {
    //                     this.setState({ editMode: !this.state.editMode });
    //                 }}
    //                 className="btn outline btn-edit"
    //             >
    //                 <i className="icon-pencil"></i>
    //                 <span>{t("actions.edit")}</span>
    //             </button>
    //         </div>
    //     );
    // }
    // renderHeaderRight() {
    //     const { contact } = this.props;
    //     return (
    //         <div className="title-section__right-block">
    //             {isBrowser && this.renderEditButton()}
    //             <InfoCreatorModifier model={contact} />
    //         </div>
    //     );
    // }
    // renderNotesToggleSection(editMode = false) {
    //     const { t } = this.props;
    //     return (
    //         <ToggleSection>
    //             <ToggleHeading>
    //                 <h2>{t("contact-details.notes")}</h2>
    //             </ToggleHeading>
    //             <TogglePanel>
    //                 {editMode ? (
    //                     <Field
    //                         name="notes"
    //                         component={FieldInput}
    //                         as="textarea"
    //                         rows="3"
    //                         placeholder={t("contact-details.add-notes")}
    //                     />
    //                 ) : (
    //                     <span className="pre-text">{this.props.notes}</span>
    //                 )}
    //             </TogglePanel>
    //         </ToggleSection>
    //     );
    // }
    // renderGeneralInfoToggleSection(editMode = false) {
    //     const { t, title, contact_type, pgp_fingerprint } = this.props;
    //     const generalInfoFirstRow = [
    //         {
    //             title: "Title",
    //             presentContent: title,
    //             editContent: (
    //                 <Form.Group>
    //                     <Field type="text" component={FieldInput} placeholder="Type title" name="title" />
    //                 </Form.Group>
    //             )
    //         },
    //         {
    //             title: "Type",
    //             presentContent: contact_type,
    //             editContent: (
    //                 <Dropdown
    //                     className="auto"
    //                     emptyLabel="Select type"
    //                     name="contact_type"
    //                     type="contact_type"
    //                     onChange={(e) => {}}
    //                 />
    //             )
    //         },
    //         {
    //             title: "E-mails",
    //             presentContent: (
    //                 <FieldArray
    //                     name="emails"
    //                     t={t}
    //                     component={ContactEmails}
    //                     editable={editMode}
    //                     dispatch={this.props.dispatch}
    //                 />
    //             ),
    //             editContent: (
    //                 <FieldArray
    //                     name="emails"
    //                     t={t}
    //                     component={ContactEmails}
    //                     editable={editMode}
    //                     dispatch={this.props.dispatch}
    //                 />
    //             )
    //         },
    //         {
    //             title: "Phone",
    //             presentContent: (
    //                 <FieldArray
    //                     name="phones"
    //                     t={t}
    //                     component={ContactPhones}
    //                     editable={editMode}
    //                     dispatch={this.props.dispatch}
    //                 />
    //             ),
    //             editContent: (
    //                 <FieldArray
    //                     name="phones"
    //                     t={t}
    //                     component={ContactPhones}
    //                     editable={editMode}
    //                     dispatch={this.props.dispatch}
    //                 />
    //             )
    //         }
    //     ];
    //     return (
    //         <ToggleSection defaultEditable={false}>
    //             <ToggleHeading>
    //                 <h2>{t("contact-details.general-information")}</h2>
    //             </ToggleHeading>
    //             <TogglePanel>
    //                 <>
    //                     <div className="form-internal-block">
    //                         {generalInfoFirstRow.map((formData, index) => {
    //                             return renderFormBlockSection(editMode, formData, index);
    //                         })}
    //                     </div>
    //                     <div className="table-details mt-4">
    //                         <div>
    //                             <div>PGP Fingerprint</div>
    //                         </div>
    //                         <div>
    //                             <div>
    //                                 {!editMode ? (
    //                                     pgp_fingerprint
    //                                 ) : (
    //                                     <Form.Group>
    //                                         <Field
    //                                             type="text"
    //                                             component={FieldInput}
    //                                             className={`${isBrowser ? "xlg" : "auto"}`}
    //                                             placeholder={t("contact-details.pgp-fingerprint")}
    //                                             name="pgp_fingerprint"
    //                                         />
    //                                     </Form.Group>
    //                                 )}
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </>
    //             </TogglePanel>
    //         </ToggleSection>
    //     );
    // }
    // renderSaveCancelButtons() {
    //     // change for the SaveCancelCTAs components/common/
    //     const { t, pristine, submitting } = this.props;
    //     const mobileClasses = isMobile ? "d-inline-flex align-items-center justify-content-center" : "text-right";
    //     return (
    //         <Form.Row>
    //             <Col className={mobileClasses}>
    //                 <button type="button" className="btn link" onClick={this.props.onDelete}>
    //                     {t("actions.delete")}
    //                 </button>
    //                 <button type="submit" className="btn primary lg" disabled={pristine || submitting}>
    //                     {t("actions.save")}
    //                 </button>
    //             </Col>
    //         </Form.Row>
    //     );
    // }
    // renderProfessionalDetails(editMode) {
    //     const { t } = this.props;
    //     return (
    //         <ToggleSection>
    //             <ToggleHeading>
    //                 <h2>{t("contact-details.professional-details")}</h2>
    //             </ToggleHeading>
    //             <TogglePanel>
    //                 <FieldArray
    //                     name="organizations"
    //                     component={FieldArrayOrganizationsContact}
    //                     editable={editMode}
    //                     dispatch={this.props.dispatch}
    //                     errors={this.props.formSyncErrors.organizations}
    //                     metaFields={this.props.fields}
    //                 />
    //             </TogglePanel>
    //         </ToggleSection>
    //     );
    // }
    // renderWorkLog() {
    //     let { contact } = this.props;
    //     return (
    //         <section className="model-section">
    //             <Worklog model={contact} refetch={this.refetch} />
    //         </section>
    //     );
    // }
    // renderModelMainSection(editMode) {
    //     return (
    //         <section className="model-section">
    //             <Form.Row>
    //                 <Col>
    //                     {this.renderNotesToggleSection(editMode)}
    //                     <hr />
    //                     {this.renderGeneralInfoToggleSection(editMode)}
    //                     <hr />
    //                     {this.renderProfessionalDetails(editMode)}
    //                 </Col>
    //             </Form.Row>
    //         </section>
    //     );
    // }
    render() {
        let { handleSubmit } = this.props;
        return (
            <form id={this.FORM_ID} onSubmit={handleSubmit(this.handleSubmit)}>
                {isBrowser && this.renderSaveCancelButtons()}
                {this.renderHeader(this.state.editMode)}
                {this.renderModelMainSection(this.state.editMode)}
                {this.renderWorkLog(this.state.editMode)}
                {this.renderSaveCancelButtons()}
            </form>
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
