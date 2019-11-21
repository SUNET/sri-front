import React from "react";
import { Form, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm, change } from "redux-form";
import uuidv4 from "uuid/v4";
import urlRegex from "url-regex";

import CreateOrganizationMutation from "../../mutations/organization/CreateOrganizationMutation";
import { checkOrganization, getOrganizationByOrganizationId } from "../../components/organization/Organization";
import DropdownSearch from "../DropdownSearch";
import FieldArrayContactOrganization from "./FieldArrayContactOrganization";
import FieldArrayAddressOrganization from "./FieldArrayAddressOrganization";
import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import FiledArrayCheckbox, { INPUTS } from "../FieldArrayCheckbox";

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

    render() {
        const { handleSubmit, t, name } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="model-details">
                    <section className="title-section">
                        <EditField
                            error={this.props.formSyncErrors.name}
                            meta={this.props.fields.name}
                            initialValue="New organization"
                            form={this.props.form}
                            dispatch={this.props.dispatch}
                            value={name}
                        >
                            <h1 className="ml-0">{name}</h1>
                        </EditField>
                    </section>
                    <section className="model-section">
                        <Form.Row>
                            <Col>
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
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("organization-details.general-information")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div className="w-25">Type</div>
                                                <div className="w-25">Affiliation</div>
                                                <div className="w-25">Organization ID</div>
                                                <div className="w-25">Parent Organization ID</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Dropdown
                                                        className="auto"
                                                        emptyLabel="Select type"
                                                        type="organization_types"
                                                        name="type"
                                                        onChange={(e) => {}}
                                                    />
                                                    <FiledArrayCheckbox
                                                        data={INPUTS}
                                                        form={this.props.form}
                                                        dispatch={this.props.dispatch}
                                                        editable={true}
                                                        initialValues={this.props.initialValues.affiliation}
                                                        error={this.props.formSyncErrors.affiliation}
                                                        touched={this.props.fields}
                                                    />
                                                    <Form.Group>
                                                        <Field
                                                            type="text"
                                                            name="organization_id"
                                                            component={FieldInput}
                                                            placeholder={t("organization-details.add-id")}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Field
                                                            type="text"
                                                            name="organization_parent_id"
                                                            component={FieldInput}
                                                            placeholder={t("organization-details.add-id")}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-details mt-4">
                                            <div>
                                                <div className="w-20">Website</div>
                                                <div>Organization Number</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Form.Group>
                                                        <Field
                                                            type="text"
                                                            className="xlg"
                                                            name="website"
                                                            component={FieldInput}
                                                            placeholder={t("organization-details.add-website")}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Field
                                                            type="text"
                                                            name="organization_number"
                                                            component={FieldInput}
                                                            placeholder={t("organization-details.add-number")}
                                                        />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("organization-details.address")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
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
                                                    editable={true}
                                                    dispatch={this.props.dispatch}
                                                    errors={this.props.formSyncErrors.addresses}
                                                    metaFields={this.props.fields}
                                                />
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <Form.Row>
                            <Col>
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
                            </Col>
                        </Form.Row>
                    </section>
                    <section className="model-section">
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
                                    onBlur={(e) => {
                                        this.setState({ comment: e.target.value });
                                    }}
                                />
                            </TogglePanel>
                        </ToggleSection>
                    </section>
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

// combine field validations
function composeAsyncValidators(validatorFns) {
    return async (values, dispatch, props, field) => {
        let errors;
        for (const validatorFn of validatorFns) {
            try {
                await validatorFn(values, dispatch, props, field);
            } catch (err) {
                errors = Object.assign({}, errors, err);
            }
        }

        if (errors) throw errors;
    };
}

const asyncValidate_organization_id = (values, dispatch) => {
    if (values.organization_id) {
        return checkOrganization(values.organization_id, values.handle_id).then((exists) => {
            if (exists) {
                // this absurdity, is by the error of non-throw-literal
                const error = { organization_id: "Already exist!" };
                throw error;
            }
        });
    }
};

const asyncValidate_relationship_parent_of = (values, dispatch) => {
    if (values.organization_parent_id) {
        return checkOrganization(values.organization_parent_id).then((exists) => {
            if (!exists) {
                // this absurdity, is by the error of non-throw-literal
                const error = { organization_parent_id: "Doesn't match any organization!" };
                throw error;
            } else {
                getOrganizationByOrganizationId(values.organization_parent_id).then((organization) => {
                    if (organization) {
                        dispatch(change("createOrganization", `relationship_parent_of`, organization));
                    }
                });
            }
        });
    }
};

// combine field validations
const asyncValidate = composeAsyncValidators([asyncValidate_organization_id, asyncValidate_relationship_parent_of]);

const validate = (values, props) => {
    const errors = {};
    if (!values.name || values.name === "New organization") {
        errors.name = "* Required!";
    }

    if (!values.type) {
        errors.type = "* Required!";
    }

    if (!values.organization_id) {
        errors.organization_id = "* Required!";
    }

    if (values.organization_parent_id) {
        if (values.organization_parent_id === values.organization_id) {
            errors.organization_parent_id = "* Invalid Id!";
        }
    }

    if (values.website) {
        if (!urlRegex({ exact: true, strict: false }).test(values.website)) {
            errors.website = "* Invalid url!";
        }
    }

    if (
        (props.affiliation.customer === undefined || props.affiliation.customer === false) &&
        (props.affiliation.end_customer === undefined || props.affiliation.end_customer === false) &&
        (props.affiliation.host_user === undefined || props.affiliation.host_user === false) &&
        (props.affiliation.partner === undefined || props.affiliation.partner === false) &&
        (props.affiliation.provider === undefined || props.affiliation.provider === false) &&
        (props.affiliation.site_owner === undefined || props.affiliation.site_owner === false)
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

CreateOrganizationForm = reduxForm({
    form: "createOrganization",
    validate,
    asyncValidate,
    initialValues: {
        name: "New organization",
        affiliation: false
    }
})(CreateOrganizationForm);

export default withTranslation()(withRouter(CreateOrganizationForm));
