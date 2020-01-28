import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";
import copy from "clipboard-copy";
import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
import Dropdown from "../Dropdown";
import DropdownSearch from "../DropdownSearch";
import FieldArrayContactOrganization from "./FieldArrayContactOrganization";
import FieldArrayAddressOrganization from "./FieldArrayAddressOrganization";
import FieldInput from "../FieldInput";
import UpdateOrganizationMutation from "../../mutations/organization/UpdateOrganizationMutation";
import FiledArrayCheckbox, { INPUTS } from "../FieldArrayCheckbox";
import Worklog from "../Worklog";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

import ValidationsOrganizationForm from "./ValidationOrganizationForm";

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

class OrganizationUpdateForm extends React.Component {
    state = {
        editMode: false
    };

    static propTypes = {
        onChange: PropTypes.func
    };

    componentDidMount() {
        //register vitual field for affiliation for checked if it has errors (improve in backend)
        this.props.registerFieldAffiliation();
    }

    refetch = () => {
        this.props.relay.refetch(
            { organizationId: this.props.organization.handle_id }, // Our refetchQuery needs to know the `organizationID`
            null, // We can use the refetchVariables as renderVariables
            () => {
                console.log("Refetch done");
            },
            { force: true }
        );
    };

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
                    email: contact.emails,
                    email_obj: contact.emails,
                    phone: contact.phones,
                    phone_obj: contact.phones,
                    created: true,
                    origin: "new",
                    status: "saved",
                    key: uuidv4()
                };
                if (!this._hasBeenAdded(newContact)) {
                    this.props.dispatch(arrayPush(this.props.form, "contacts", newContact));
                }
            });
        }
    };

    copyAllEmails = () => {
        const emails = this.props.contactsValues.map((contact) => {
            return contact.status === "saved" ? contact.email : null;
        });
        copy(emails.join(" "));
    };

    generateURL = (url) => {
        if (!/^(?:f|ht)tps?:\/\//.test(url)) {
            url = "http://" + url;
        }
        return url;
    };

    handleSubmit = (organization) => {
        this.setState({ editMode: !this.state.editMode });
        UpdateOrganizationMutation(organization, this);
    };

    renderHeaderName() {
        const { t, name } = this.props;
        const { editMode } = this.state;
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
                    placeholder={t("contact-details.new")}
                >
                    <h1>{name}</h1>
                </EditField>
            </div>
        );
    }
    renderHeaderRight() {
        const { t, organization } = this.props;
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
                <InfoCreatorModifier model={organization} />
            </div>
        );
    }

    renderDescriptionToggleSection() {
        const { t, description } = this.props;
        const { editMode } = this.state;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.description")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {editMode ? (
                        <Field
                            name="description"
                            component={FieldInput}
                            as="textarea"
                            rows="3"
                            placeholder={t("group-details.add-description")}
                        ></Field>
                    ) : (
                        <span className="pre-text">{description}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderGeneralInfoToggleSection() {
        const { type, organization_id, organization_number, website, organization_parent_id, t } = this.props;

        const generalInfoFirstRow = [
            {
                title: t("organization-details.type"),
                presentContent: type,
                editContent: (
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
                presentContent: (
                    <FiledArrayCheckbox
                        data={INPUTS}
                        form={this.props.form}
                        dispatch={this.props.dispatch}
                        editable={false}
                        initialValues={this.props.initialValues.affiliation}
                        error={this.props.formSyncErrors.affiliation}
                        touched={this.props.fields}
                    />
                ),
                editContent: (
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
                presentContent: organization_id,
                editContent: (
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
                presentContent: organization_parent_id,
                editContent: (
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
                presentContent: (
                    <a href={this.generateURL(website)} target="_blank" rel="noopener noreferrer">
                        {website}
                    </a>
                ),
                editContent: (
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
                presentContent: organization_number,
                editContent: (
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

        const { editMode } = this.state;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <div>
                        <div className="form-internal-block">
                            {generalInfoFirstRow.map((formData, index) => {
                                return renderFormBlockSection(editMode, formData, index);
                            })}
                        </div>
                        <div className="form-internal-block mt-4">
                            {generalInfoSecondRow.map((formData, index) => {
                                return renderFormBlockSection(editMode, formData, index);
                            })}
                        </div>
                    </div>
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderAddressToggleSection() {
        const { t } = this.props;
        const { editMode } = this.state;
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
        const { editMode } = this.state;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.contacts")}</h2>
                </ToggleHeading>

                <TogglePanel>
                    <FieldArray
                        name="contacts"
                        component={FieldArrayContactOrganization}
                        editable={editMode}
                        dispatch={this.props.dispatch}
                        errors={this.props.formSyncErrors.contacts}
                        metaFields={this.props.fields}
                        rerenderOnEveryChange={true}
                        handleContactSearch={this.handleSelectedContact}
                    />
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderAditionalInfoToggleSection() {
        const { t, incident_management_info } = this.props;
        const { editMode } = this.state;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.additional-info")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    {editMode ? (
                        <Field
                            name="incident_management_info"
                            component={FieldInput}
                            as="textarea"
                            rows="3"
                            placeholder={t("group-details.add-description")}
                        />
                    ) : (
                        <span className="pre-text">{incident_management_info}</span>
                    )}
                </TogglePanel>
            </ToggleSection>
        );
    }

    render() {
        const { organization, t, handleSubmit, pristine, submitting } = this.props;
        console.log(organization);
        
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                {/* <div className="text-right mt-4">{this.renderSaveCancelCTAs()}</div> */}
                <Form.Row>
                    <Col>{this.renderHeaderName()}</Col>
                    <Col>{this.renderHeaderRight()}</Col>
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
                <section className="model-section">
                    <Form.Row>
                        <Col>{this.renderAditionalInfoToggleSection()}</Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={organization} refetch={this.refetch} />
                </section>
                <div className="text-right mt-4">
                    <button type="button" onClick={() => this.props.onDelete()} className="btn link">
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

const asyncValidate = ValidationsOrganizationForm.composeAsyncValidators([
    ValidationsOrganizationForm.asyncValidate_organization_id,
    ValidationsOrganizationForm.asyncValidate_relationship_parent_of
]);

OrganizationUpdateForm = reduxForm({
    form: "updateOrganization",
    validate: ValidationsOrganizationForm.organizationFormValidate,
    enableReinitialize: true,
    asyncValidate,
    onSubmitSuccess: (result, dispatch, props) => {
        document.documentElement.scrollTop = 0;
    }
})(OrganizationUpdateForm);

const OrganizationUpdateFormFragment = createRefetchContainer(
    withTranslation()(OrganizationUpdateForm),
    {
        organization: graphql`
            fragment OrganizationUpdateForm_organization on Organization {
                handle_id
                name
                type
                website
                organization_id
                organization_number
                description
                incident_management_info
                parent_organization {
                    organization_id
                }
                addresses {
                    handle_id
                    name
                    street
                    postal_code
                    postal_area
                    phone
                }
                incoming {
                    name
                    relation {
                        relation_id
                        type
                        end {
                            handle_id
                            node_name
                        }
                        start {
                            handle_id
                            node_name
                        }
                    }
                }
                contacts {
                    handle_id
                    first_name
                    last_name
                    contact_type
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
                created
                creator {
                    email
                }
                modified
                modifier {
                    email
                }
            }
        `
    },
    graphql`
        # Refetch query to be fetched upon calling 'refetch'.
        # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
        query OrganizationUpdateFormRefetchQuery($organizationId: Int!) {
            getOrganizationById(handle_id: $organizationId) {
                ...OrganizationUpdateForm_organization
            }
        }
    `
);

export default OrganizationUpdateFormFragment;
