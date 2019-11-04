import React from "react";
import PropTypes from "prop-types";
import { createRefetchContainer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import InfoCreatorModifier from "../InfoCreatorModifier";
import EditField from "../EditField";
import Dropdown from "../Dropdown";
import DropdownSearch from "../DropdownSearch";
import FieldArrayContactOrganization from "./FieldArrayContactOrganization";
import FieldArrayAddressOrganization from "./FieldArrayAddressOrganization";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import FieldInput from "../FieldInput";
import uuidv4 from "uuid/v4";
import copy from "clipboard-copy";
import urlRegex from "url-regex";

import FiledArrayCheckbox, { INPUTS } from "../FieldArrayCheckbox";

import Worklog from "../Worklog";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

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
        return this.props.contactsValues.some((contact) => contact.handle_id === newContact.handle_id);
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

    render() {
        let {
            organization,
            name,
            type,
            customer_id,
            website,
            description,
            incident_management_info,
            relationship_parent_of,
            t,
            handleSubmit,
            pristine,
            submitting
        } = this.props;
        return (
            <form onSubmit={handleSubmit}>
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
                        <InfoCreatorModifier model={organization} />
                    </Col>
                </Form.Row>
                <section className="model-section">
                    <Form.Row>
                        <Col>
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
                                                <span>{description}</span>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>
                            <ToggleSection>
                                <ToggleHeading>
                                    <h2>{t("organization-details.general-information")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <>
                                                    <div className="table-details">
                                                        <div>
                                                            <div className="w-25">Type</div>
                                                            <div className="w-25">Affiliation</div>
                                                            <div className="w-25">Organization ID</div>
                                                            <div className="w-25">Parent Organization ID</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div>
                                                                    {!editable ? (
                                                                        type
                                                                    ) : (
                                                                        <Dropdown
                                                                            className="auto"
                                                                            emptyLabel="Select type"
                                                                            type="organization_types"
                                                                            name="type"
                                                                            onChange={(e) => {}}
                                                                        />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <FiledArrayCheckbox
                                                                        data={INPUTS}
                                                                        form={this.props.form}
                                                                        dispatch={this.props.dispatch}
                                                                        editable={editable}
                                                                        initialValues={
                                                                            this.props.initialValues.affiliation
                                                                        }
                                                                        error={this.props.formSyncErrors.affiliation}
                                                                        touched={this.props.fields}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    {!editable ? (
                                                                        customer_id
                                                                    ) : (
                                                                        <Form.Group>
                                                                            <Field
                                                                                type="text"
                                                                                name="customer_id"
                                                                                component={FieldInput}
                                                                                placeholder={t(
                                                                                    "organization-details.add-id"
                                                                                )}
                                                                            />
                                                                        </Form.Group>
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    {!editable ? (
                                                                        relationship_parent_of
                                                                    ) : (
                                                                        <Form.Group>
                                                                            <Field
                                                                                type="text"
                                                                                name="relationship_parent_of"
                                                                                component={FieldInput}
                                                                                placeholder={t(
                                                                                    "organization-details.add-id"
                                                                                )}
                                                                            />
                                                                        </Form.Group>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="table-details mt-4">
                                                        <div>
                                                            <div className="w-20">Website</div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <div>
                                                                    {!editable ? (
                                                                        <a
                                                                            href={this.generateURL(website)}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {website}
                                                                        </a>
                                                                    ) : (
                                                                        <Form.Group>
                                                                            <Field
                                                                                type="text"
                                                                                className="xlg"
                                                                                name="website"
                                                                                component={FieldInput}
                                                                                placeholder={t(
                                                                                    "organization-details.add-website"
                                                                                )}
                                                                            />
                                                                        </Form.Group>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>
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
                        </Col>
                    </Form.Row>
                    <hr />
                    <Form.Row>
                        <Col>
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
                                                        <div className="w-30">Role</div>
                                                        <div className="with-icon">
                                                            <span>Email</span>
                                                            <button
                                                                type="button"
                                                                onClick={() => this.copyAllEmails()}
                                                                className="btn outline btn-copy"
                                                            >
                                                                <span>{t("actions.copy-all")}</span>
                                                            </button>
                                                        </div>
                                                        <div>Phone</div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="contacts"
                                                            component={FieldArrayContactOrganization}
                                                            editable={editable}
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
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Form.Row>
                        <Col>
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
                                                <span>{incident_management_info}</span>
                                            );
                                        }}
                                    </PanelEditable.Consumer>
                                </TogglePanel>
                            </ToggleSection>
                        </Col>
                    </Form.Row>
                </section>
                <section className="model-section">
                    <Worklog model={organization} refetch={this.refetch} />
                </section>
                <div className="text-right mt-4">
                    <button type="button" onClick={() => this.props.onDelete()} className="btn link">
                        {t("actions.delete")}
                    </button>
                    <button
                        onClick={() => {
                            document.documentElement.scrollTop = 0;
                        }}
                        type="submit"
                        className="btn primary lg"
                        disabled={pristine || submitting}
                    >
                        {t("actions.save")}
                    </button>
                </div>
            </form>
        );
    }
}

const validate = (values, props) => {
    const errors = {};
    if (!values.name) {
        errors.name = "* Required!";
    }

    if (values.website) {
        if (!urlRegex({ exact: true, strict: false }).test(values.website)) {
            errors.website = "* Invalid url!";
        }
    }

    if (
        props.affiliation.customer === false &&
        props.affiliation.end_customer === false &&
        props.affiliation.host_user === false &&
        props.affiliation.partner === false &&
        props.affiliation.provider === false &&
        props.affiliation.site_owner === false
    ) {
        errors.affiliation = "* Required!";
    }

    if (values.addresses) {
        const addressArrayErrors = [];
        values.addresses.forEach((address, addressIndex) => {
            const addressErrors = {};
            if (!address || !address.street) {
                addressErrors.street = "* Required!";
                addressArrayErrors[addressIndex] = addressErrors;
            }
            if (!address || !address.postal_code) {
                addressErrors.postal_code = "* Required!";
                addressArrayErrors[addressIndex] = addressErrors;
            }
            if (!address || !address.postal_area) {
                addressErrors.postal_area = "* Required!";
                addressArrayErrors[addressIndex] = addressErrors;
            }
            if (!address || !address.phone) {
                addressErrors.phone = "* Required!";
                addressArrayErrors[addressIndex] = addressErrors;
            }
            return addressErrors;
        });
        if (addressArrayErrors.length) {
            errors.addresses = addressArrayErrors;
        }
    }

    if (values.contacts) {
        const contactArrayErrors = [];
        values.contacts.forEach((contact, contactIndex) => {
            const contactErrors = {};
            if (!contact || !contact.name) {
                contactErrors.name = "* Required!";
                contactArrayErrors[contactIndex] = contactErrors;
            }
            if (!contact || !contact.role) {
                contactErrors.role = "* Required!";
                contactArrayErrors[contactIndex] = contactErrors;
            }
            if (!contact || !contact.email) {
                contactErrors.email = "* Required!";
                contactArrayErrors[contactIndex] = contactErrors;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contact.email)) {
                contactErrors.email = "* Invalid email!";
                contactArrayErrors[contactIndex] = contactErrors;
            }
            if (!contact || !contact.phone) {
                contactErrors.phone = "* Required!";
                contactArrayErrors[contactIndex] = contactErrors;
            }
            return contactErrors;
        });
        if (contactArrayErrors.length) {
            errors.contacts = contactArrayErrors;
        }
    }
    return errors;
};

OrganizationUpdateForm = reduxForm({
    form: "updateOrganization",
    validate
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
                customer_id
                description
                incident_management_info
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
