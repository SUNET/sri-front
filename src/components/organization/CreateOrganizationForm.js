import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";
import CreateOrganizationMutation from "../../mutations/organization/CreateOrganizationMutation";
import DropdownSearch from "../DropdownSearch";
import FieldArrayContactOrganization from "./FieldArrayContactOrganization";
import FieldArrayAddressOrganization from "./FieldArrayAddressOrganization";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import FiledArrayCheckbox, { INPUTS } from "../FieldArrayCheckbox";

import ValidationsOrganizationForm from "./ValidationOrganizationForm";

class CreateOrganizationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: []
        };
    }

    _hasBeenAdded = (newContact) => {
        if (this.props.contactsValues) {
            return this.props.contactsValues.some((contact) => contact.handle_id === newContact.handle_id);
        }
        return false;
    };

    handleSelectedContact = (selection) => {
        if (selection !== null) {
            this.props.getContact(selection.handle_id).then((contact) => {
                const newContact = {
                    name: contact.name,
                    first_name: contact.first_name,
                    last_name: contact.last_name,
                    handle_id: contact.handle_id,
                    contact_type: contact.contact_type,
                    role: contact.roles[0] ? contact.roles[0].role_data.handle_id : "",
                    role_obj: contact.roles[0],
                    role_label: contact.roles[0] ? contact.roles[0].role_data.name : "",
                    email: contact.emails[0] ? contact.emails[0].name : "",
                    email_obj: contact.emails[0] ? contact.emails[0] : {},
                    phone: contact.phones[0] ? contact.phones[0].name : "",
                    phone_obj: contact.phones[0] ? contact.phones[0] : {},
                    created: true,
                    origin: "new",
                    status: "editing",
                    key: uuidv4()
                };
                if (!this._hasBeenAdded(newContact)) {
                    this.props.dispatch(arrayPush(this.props.form, "contacts", newContact));
                }
            });
        }
    };

    handleSubmit = (organization) => {
        CreateOrganizationMutation(organization, this);
    };

    renderHeaderName() {
        const { t, name } = this.props;
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
                <EditField
                    error={this.props.formSyncErrors.name}
                    meta={this.props.fields.name}
                    form={this.props.form}
                    dispatch={this.props.dispatch}
                    editable={editMode}
                    placeholder={t("organization-details.new")}
                >
                    <h1 className="ml-0">{name}</h1>
                </EditField>
            </div>
        );
    }

    renderGeneralInfoToggleSection() {
        const { t } = this.props;
        const generalInfoFirstRow = [
            {
                title: t("organization-details.type"),
                content: (
                    <Dropdown
                        className="auto"
                        emptyLabel="Select type"
                        type="organization_types"
                        name="type"
                        onChange={(e) => {}}
                    />
                )
            },
            {
                title: t("organization-details.affiliation"),
                content: (
                    <FiledArrayCheckbox
                        data={INPUTS}
                        form={this.props.form}
                        dispatch={this.props.dispatch}
                        editable={true}
                        initialValues={this.props.initialValues.affiliation}
                        error={this.props.formSyncErrors.affiliation}
                        touched={this.props.fields}
                    />
                )
            },
            {
                title: t("organization-details.organization-id"),
                content: (
                    <Form.Group>
                        <Field
                            type="text"
                            name="organization_id"
                            component={FieldInput}
                            placeholder={t("organization-details.add-id")}
                        />
                    </Form.Group>
                )
            },
            {
                title: t("organization-details.parent-org-id"),
                content: (
                    <Form.Group>
                        <Field
                            type="text"
                            name="organization_parent_id"
                            component={FieldInput}
                            placeholder={t("organization-details.add-id")}
                        />
                    </Form.Group>
                )
            }
        ];
        const generalInfoSecondRow = [
            {
                title: t("organization-details.website"),
                content: (
                    <Form.Group>
                        <Field
                            type="text"
                            className="xlg"
                            name="website"
                            component={FieldInput}
                            placeholder={t("organization-details.add-website")}
                        />
                    </Form.Group>
                )
            },
            {
                title: t("organization-details.org-number"),
                content: (
                    <Form.Group>
                        <Field
                            type="text"
                            name="organization_number"
                            component={FieldInput}
                            placeholder={t("organization-details.add-number")}
                        />
                    </Form.Group>
                )
            }
        ];
        const renderFormBlockSection = (data, index) => {
            return (
                <div className="form-internal-block__section" key={index}>
                    <div className="form-internal-block__section__title">{data.title}</div>
                    <div className="form-internal-block__section__content">{data.content}</div>
                </div>
            );
        };
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("organization-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <div className="form-internal-block">
                        {generalInfoFirstRow.map((formData, index) => {
                            return renderFormBlockSection(formData, index);
                        })}
                    </div>
                    <div className="form-internal-block mt-4">
                        {generalInfoSecondRow.map((formData, index) => {
                            return renderFormBlockSection(formData, index);
                        })}
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderDescriptionToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("organization-details.description")}</h2>
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
        );
    }

    renderAddressToggleSection() {
        const { t } = this.props;
        const editMode = true;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("organization-details.address")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <FieldArray
                        name="addresses"
                        component={FieldArrayAddressOrganization}
                        editable={editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.addresses}
                        metaFields={this.props.fields}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderContactsToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("organization-details.contacts")}</h2>
                    <DropdownSearch
                        selection={this.handleSelectedContact}
                        placeholder={t("search-filter.search-contact")}
                    />
                </ToggleHeading>
                <TogglePanel>
                    <div className="table-details">
                        <div>
                            <div className="w-18">Name</div>
                            <div className="w-32">Role</div>
                            <div className="w-18">Email</div>
                            <div>Phone</div>
                            <div></div>
                        </div>
                        <div>
                            <FieldArray
                                name="contacts"
                                component={FieldArrayContactOrganization}
                                editable={true}
                                dispatch={this.props.dispatch}
                                errors={this.props.formSyncErrors.contacts}
                                metaFields={this.props.fields}
                            />
                        </div>
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderAditionalInfoToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection defaultEditable={false}>
                <ToggleHeading>
                    <h2>{t("organization-details.additional-info")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <Field
                        name="incident_management_info"
                        component={FieldInput}
                        as="textarea"
                        rows="3"
                        placeholder={t("organization-details.add-description")}
                        onBlur={(e) => {
                            this.setState({ incident_management_info: e.target.value });
                        }}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderWorklogToggleSection() {
        const { t } = this.props;
        return (
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
                        onBlur={(e) => {
                            this.setState({ comment: e.target.value });
                        }}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="model-details create-organizations-form">
                    <Form.Row>
                        <Col>{this.renderHeaderName()}</Col>
                    </Form.Row>
                    <section className="model-section">
                        <Form.Row>
                            <Col>{this.renderDescriptionToggleSection()}</Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>{this.renderGeneralInfoToggleSection()}</Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>{this.renderAddressToggleSection()}</Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>{this.renderContactsToggleSection()}</Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">{this.renderAditionalInfoToggleSection()}</section>
                    <section className="model-section">{this.renderWorklogToggleSection()}</section>
                </div>
                <div className="text-right mt-4">
                    <button
                        type="button"
                        className="mr-2 btn link"
                        onClick={() => {
                            this.props.history.push("/community/organizations");
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

const asyncValidate = ValidationsOrganizationForm.composeAsyncValidators([
    ValidationsOrganizationForm.asyncValidate_organization_id,
    ValidationsOrganizationForm.asyncValidate_relationship_parent_of
]);

CreateOrganizationForm = reduxForm({
    form: "createOrganization",
    validate: ValidationsOrganizationForm.organizationFormValidate,
    asyncValidate,
    initialValues: {
        affiliation: false
    }
})(CreateOrganizationForm);

export default withTranslation()(withRouter(CreateOrganizationForm));
