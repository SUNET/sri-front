import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";

import DropdownSearch from "../DropdownSearch";

import CreateOrganizationMutation from "../../mutations/CreateOrganizationMutation";

import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ComponentFormRowContainer from "../../containers/ComponentFormRow";

const renderContacts = ({ fields, meta, onChangeRole, onBlurContact, onChangeContact, t, addRow }) => {
    const pushField = (event) => {
        if (fields.length < 5) {
            addRow(fields.length);
            fields.push({ key: uuidv4() });
        }
    };
    return (
        <>
            {fields.map((contact, index) => (
                <>
                    <span>{`${index}_${fields.length}`}</span>
                    <span>{contact.key}</span>
                    <ComponentFormRowContainer editable={true} key={contact.key} index={index} fields={fields}>
                        {(editFields, isNew) => {
                            return editFields || isNew ? (
                                <>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Full Name"
                                                name={`${contact}.name`}
                                                onBlur={(e) => onBlurContact(e, index)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Dropdown
                                            className="auto"
                                            emptyLabel="Select role"
                                            model="roles"
                                            name={`${contact}.role`}
                                            onChange={(e) => onChangeContact(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Email"
                                                name={`${contact}.email`}
                                                onBlur={(e) => onBlurContact(e, index)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Phone"
                                                name={`${contact}.phone`}
                                                onBlur={(e) => onBlurContact(e, index)}
                                            />
                                        </Form.Group>
                                    </div>
                                </>
                            ) : (
                                <></>
                            );
                        }}
                    </ComponentFormRowContainer>
                </>
            ))}
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div className="col-actions">
                    <button type="button" className="btn link mt-2" onClick={(e) => pushField(e)}>
                        {t("actions.add-new")}
                    </button>
                </div>
            </div>
        </>
    );
};

class CreateOrganization extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "New organization",
            description: "",
            type: "",
            afffiliation: "",
            organizationId: "",
            relationship_parent_of: "",
            address: {},
            contacts: {},
            comment: "",
            incident_management_info: "",
            errors: []
        };
    }

    handleFieldChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, description, type, contacts, incident_management_info, comment, address } = this.state;
        console.log(contacts);
        debugger;
        CreateOrganizationMutation(
            name,
            description,
            type,
            incident_management_info,
            comment,
            contacts,
            address,
            () => this.props.history
        );
    };

    handleSelectedContact = (selection) => {
        if (selection !== null) {
            const addContact = { ...selection.node };
            const newContact = {
                name: addContact.name,
                first_name: addContact.first_name,
                last_name: addContact.last_name,
                id: addContact.handle_id,
                contact_type: addContact.contact_type,
                role: addContact.roles[0].role_data.handle_id,
                email: addContact.emails[0].name,
                phone: addContact.phones[0].name,
                created: true,
                key: uuidv4()
            };
            this.setState({
                contacts: {
                    ...this.state.contacts,
                    [this.state.contacts.length || 1]: {
                        ...newContact
                    }
                }
            });
            this.props.dispatch(arrayPush("createOrganization", "contacts", newContact));
        }
    };

    render() {
        const { t } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="model-details">
                    <section className="title-section">
                        <EditField onChange={this.handleFieldChange}>
                            <h1 className="ml-0">{this.state.name}</h1>
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
                                            placeholder={t("organization-details.add-description")}
                                            onBlur={(e) => {
                                                this.setState({ description: e.target.value });
                                            }}
                                            value={this.state.description}
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
                                                <div>Type</div>
                                                <div>Affiliation</div>
                                                <div>Organization ID</div>
                                                <div>Parent Organization ID</div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Dropdown
                                                            className="auto"
                                                            emptyLabel="Select type"
                                                            type="organization_types"
                                                            name="type"
                                                            onChange={(e) => this.setState({ type: e.target.value })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Dropdown
                                                            className="auto"
                                                            emptyLabel="Select organization"
                                                            type="organization_types"
                                                            name="type"
                                                            onChange={(e) =>
                                                                this.setState({ afffiliation: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="organizationId"
                                                                component={FieldInput}
                                                                placeholder={t("contact-details.add-notes")}
                                                                onBlur={(e) => {
                                                                    this.setState({ organizationId: e.target.value });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="relationship_parent_of"
                                                                component={FieldInput}
                                                                placeholder={t("contact-details.add-notes")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        relationship_parent_of: e.target.value
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
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
                                                <div>Website</div>
                                                <div>Street</div>
                                                <div>Postal Code</div>
                                                <div>Postal Area</div>
                                                <div>Phone</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="website"
                                                                component={FieldInput}
                                                                placeholder={t("organization-details.add-website")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        address: {
                                                                            ...this.state.address,
                                                                            website: e.target.value
                                                                        }
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="street"
                                                                component={FieldInput}
                                                                placeholder={t("organization-details.add-street")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        address: {
                                                                            ...this.state.address,
                                                                            street: e.target.value
                                                                        }
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="postal_code"
                                                                component={FieldInput}
                                                                placeholder={t("organization-details.add-postalCode")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        address: {
                                                                            ...this.state.address,
                                                                            postal_code: e.target.value
                                                                        }
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="postal_area"
                                                                component={FieldInput}
                                                                placeholder={t("organization-details.add-postalArea")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        address: {
                                                                            ...this.state.address,
                                                                            postal_area: e.target.value
                                                                        }
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Form.Group>
                                                            <Field
                                                                name="phone"
                                                                component={FieldInput}
                                                                placeholder={t("organization-details.add-phone")}
                                                                onBlur={(e) => {
                                                                    this.setState({
                                                                        address: {
                                                                            ...this.state.address,
                                                                            phone: e.target.value
                                                                        }
                                                                    });
                                                                }}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TogglePanel>
                                </ToggleSection>
                            </Col>
                        </Form.Row>
                        <hr />
                        <DropdownSearch selection={this.handleSelectedContact} />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("organization-details.contacts")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
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
                                                    component={renderContacts}
                                                    t={t}
                                                    addRow={this.props.addRow}
                                                    onBlurContact={(event, index) =>
                                                        this.setState({
                                                            contacts: {
                                                                ...this.state.contacts,
                                                                [index]: {
                                                                    ...this.state.contacts[index],
                                                                    [event.target.name.split(".")[1]]:
                                                                        event.target.value
                                                                }
                                                            }
                                                        })
                                                    }
                                                    onChangeContact={(event, index) =>
                                                        this.setState({
                                                            contacts: {
                                                                ...this.state.contacts,
                                                                [index]: {
                                                                    ...this.state.contacts[index],
                                                                    [event.target.name.split(".")[1]]:
                                                                        event.target.value
                                                                }
                                                            }
                                                        })
                                                    }
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
                        className="mr-2 btn link"
                        onClick={() => {
                            this.props.history.goBack();
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn primary lg"
                        type="submit"
                        disabled={!this.props.valid || this.props.pristine || this.props.submitting}
                    >
                        Save
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

    if (!values.contacts || !values.contacts.length) {
        errors.contacts = { _error: "At least one email must be entered" };
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

CreateOrganization = reduxForm({
    form: "createOrganization",
    validate,
    initialValues: {
        contacts: [{ name: "", role: "", email: "", phone: "", key: uuidv4(), created: false }]
    }
})(CreateOrganization);

export default withTranslation()(CreateOrganization);
