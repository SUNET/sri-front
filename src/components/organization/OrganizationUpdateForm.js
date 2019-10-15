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
import DropdownSearch from "../DropdownSearch";
import FieldArrayContactOrganization from "./FieldArrayContactOrganization";
import FieldArrayAddressOrganization from "./FieldArrayAddressOrganization";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import FieldInput from "../FieldInput";
import uuidv4 from "uuid/v4";
// import uuidv4 from "uuid/v4";
// import NumberFormat from "react-number-format";

import Worklog from "../Worklog";
// import Dropdown from "../Dropdown";
// import ComponentFormRow from "../ComponentFormRow";
// import CopyToClipboard from "../CopyToClipboard";
// import AppendChild from "../AppendChild";
import ToggleSection, { ToggleHeading, TogglePanel, PanelEditable } from "../../components/ToggleSection";

import "../../style/ModelDetails.scss";

class OrganizationUpdateForm extends React.Component {
    static propTypes = {
        onChange: PropTypes.func
    };

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
            const addContact = { ...selection.node };
            const newContact = {
                name: addContact.name,
                first_name: addContact.first_name,
                last_name: addContact.last_name,
                handle_id: addContact.handle_id,
                contact_type: addContact.contact_type,
                role: addContact.roles[0].role_data.handle_id,
                role_obj: addContact.roles[0],
                role_label: addContact.roles[0].role_data.name,
                email: addContact.emails[0] ? addContact.emails[0].name : "",
                email_obj: addContact.emails[0] ? addContact.emails[0] : {},
                phone: addContact.phones[0] ? addContact.phones[0].name : "",
                phone_obj: addContact.phones[0] ? addContact.phones[0] : {},
                created: true,
                origin: "new",
                status: "saved",
                key: uuidv4()
            };
            if (!this._hasBeenAdded(newContact)) {
                this.props.dispatch(arrayPush("createOrganization", "contacts", newContact));
            }
        }
    };

    render() {
        let { organization, name, description, incident_management_info, t, handleSubmit } = this.props;
        console.log(this.props);
        return (
            <form onSubmit={handleSubmit}>
                <Form.Row>
                    <Col>
                        <div className="title-section">
                            <button
                                type="button"
                                onClick={() => this.props.history.goBack()}
                                className="btn btn-back outline"
                            >
                                <span>{t("actions.back")}</span>
                            </button>
                            <EditField error={this.props.formSyncErrors.name} meta={this.props.fields.name}>
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
                                    <h2>{t("organization-details.address")}</h2>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <div className="table-details">
                                                    <div>
                                                        <div>Website</div>
                                                        <div>Street</div>
                                                        <div>Postal Code</div>
                                                        <div>Postal Area</div>
                                                        <div>Phone</div>
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="addresses"
                                                            component={FieldArrayAddressOrganization}
                                                            editable={true}
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
                                            return editable && <DropdownSearch selection={this.handleSelectedMember} />;
                                        }}
                                    </PanelEditable.Consumer>
                                </ToggleHeading>
                                <TogglePanel>
                                    <PanelEditable.Consumer>
                                        {(editable) => {
                                            return (
                                                <div className="table-details">
                                                    <div>
                                                        <div>Name</div>
                                                        <div>Role</div>
                                                        <div>Email</div>
                                                        <div>Phone</div>
                                                        <div></div>
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="contacts"
                                                            component={FieldArrayContactOrganization}
                                                            editable={true}
                                                            dispatch={this.props.dispatch}
                                                            errors={this.props.formSyncErrors.members}
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
                    <button type="button" onClick={() => this._handleDelete()} className="btn link">
                        {t("actions.delete")}
                    </button>
                    <button onClick={() => {}} className="btn primary lg">
                        {t("actions.save")}
                    </button>
                </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = "* Required!";
    }

    if (!values.addresses || !values.addresses.length) {
        errors.addresses = { _error: "At least one address must be entered" };
    } else {
        const addressArrayErrors = [];
        values.addresses.forEach((address, addressIndex) => {
            const addressErrors = {};
            if (!address || !address.website) {
                addressErrors.website = "* Required!";
                addressArrayErrors[addressIndex] = addressErrors;
            }
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

    if (!values.contacts || !values.contacts.length) {
        errors.contacts = { _error: "At least one contact must be entered" };
    } else {
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
                incident_management_info
                addresses {
                    handle_id
                    website
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
