import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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

class OrganizationUpdateForm extends React.Component {
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
        UpdateOrganizationMutation(organization, this);
    };

    renderDescriptionToggleSection() {
        const { t, description } = this.props;

        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.description")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return editable ? (
                                <Field
                                    name="description"
                                    component={FieldInput}
                                    as="textarea"
                                    rows="3"
                                    placeholder={t("group-details.add-description")}
                                />
                            ) : (
                                <span className="pre-text">{description}</span>
                            );
                        }}
                    </PanelEditable.Consumer>
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderGeneralInfoToggleSection() {
        const { type, organization_id, organization_number, website, organization_parent_id, t } = this.props;
        const renderFormBlockSection = (editable, data, uniqueKey) => {
            const isPresentState = !editable && data.presentContent;
            return (
                <div className="form-internal-block__section" key={uniqueKey}>
                    <div className="form-internal-block__section__title">{data.title}</div>
                    <div className="form-internal-block__section__content">
                        {isPresentState ? data.presentContent : data.editContent}
                    </div>
                </div>
            );
        };

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

        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.general-information")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return (
                                <div>
                                    <div className="form-internal-block">
                                        {generalInfoFirstRow.map((formData, index) => {
                                            return renderFormBlockSection(editable, formData, index);
                                        })}
                                    </div>
                                    <div className="form-internal-block mt-4">
                                        {generalInfoSecondRow.map((formData, index) => {
                                            return renderFormBlockSection(editable, formData, index);
                                        })}
                                    </div>
                                </div>
                            );
                        }}
                    </PanelEditable.Consumer>
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderAddressToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.address")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return (
                                <div className="table-details">
                                    <div>
                                        <div className="w-23">Street</div>
                                        <div className="w-23">Postal Code</div>
                                        <div className="w-23">Postal Area</div>
                                        <div className="w-23">Phone</div>
                                    </div>
                                    <div>
                                        <FieldArray
                                            name="addresses"
                                            component={FieldArrayAddressOrganization}
                                            rerenderOnEveryChange={true}
                                            editable={editable}
                                            dispatch={this.props.dispatch}
                                            errors={this.props.formSyncErrors.addresses}
                                            metaFields={this.props.fields}
                                        />
                                    </div>
                                </div>
                            );
                        }}
                    </PanelEditable.Consumer>
                </TogglePanel>
            </ToggleSection>
        );
    }
    renderContactsToggleSection() {
        const { t } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.contacts")}</h2>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return (
                                editable && (
                                    <DropdownSearch
                                        selection={this.handleSelectedContact}
                                        placeholder={t("search-filter.search-contact")}
                                    />
                                )
                            );
                        }}
                    </PanelEditable.Consumer>
                </ToggleHeading>
                <TogglePanel>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return (
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
                                            editable={editable}
                                            rerenderOnEveryChange={true}
                                            dispatch={this.props.dispatch}
                                            errors={this.props.formSyncErrors.contacts}
                                            metaFields={this.props.fields}
                                        />
                                    </div>
                                </div>
                            );
                        }}
                    </PanelEditable.Consumer>
                </TogglePanel>
            </ToggleSection>
        );
    }

    renderAditionalInfoToggleSection() {
        const { t, incident_management_info } = this.props;
        return (
            <ToggleSection>
                <ToggleHeading>
                    <h2>{t("organization-details.additional-info")}</h2>
                </ToggleHeading>
                <TogglePanel>
                    <PanelEditable.Consumer>
                        {(editable) => {
                            return editable ? (
                                <Field
                                    name="incident_management_info"
                                    component={FieldInput}
                                    as="textarea"
                                    rows="3"
                                    placeholder={t("group-details.add-description")}
                                />
                            ) : (
                                <span className="pre-text">{incident_management_info}</span>
                            );
                        }}
                    </PanelEditable.Consumer>
                </TogglePanel>
            </ToggleSection>
        );
    }
    render() {
        const { organization, name, t, handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Form.Row>
                    <Col>
                        <div className="title-section">
                            <button
                                type="button"
                                onClick={() => this.props.history.push("/community/organizations")}
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
                            >
                                <h1>{name}</h1>
                            </EditField>
                        </div>
                    </Col>
                    <Col>
                        <InfoCreatorModifier model={organization} />
                    </Col>
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
