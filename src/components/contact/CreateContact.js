import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import NumberFormat from "react-number-format";
import { FieldArray, Field, reduxForm } from "redux-form";

import CreateContactMutation from "../../mutations/CreateContactMutation";

import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ComponentFormRow from "../ComponentFormRow";

const renderEmails = ({ fields, onBlurEmail, onChangeType, t }) => {
    const pushField = (event) => {
        event.preventDefault();
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <>
            {fields.map((email, index) => (
                <div key={index} className="mt-2">
                    <Form.Group className="d-inline mr-2">
                        <Field
                            name={`${email}.email`}
                            type="text"
                            component={FieldInput}
                            placeholder="Email"
                            onBlur={(e) => onBlurEmail(e, index)}
                        />
                    </Form.Group>
                    <Dropdown
                        className="auto"
                        emptyLabel="Type"
                        type="contact_type"
                        name={`${email}.type`}
                        onChange={(e) => onChangeType(e, index)}
                    />
                </div>
            ))}
            <button className="btn btn-add outline mt-2" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </>
    );
};

const renderPhones = ({ fields, onBlurPhone, onChangeType, t }) => {
    const pushField = (event) => {
        event.preventDefault();
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <>
            {fields.map((phone, index) => (
                <div key={index} className="mt-2">
                    <Form.Group className="d-inline mr-2">
                        <Field
                            className="auto"
                            name={`${phone}.phone`}
                            type="text"
                            component={FieldInput}
                            placeholder="Phone"
                            onBlur={(e) => onBlurPhone(e, index)}
                        />
                    </Form.Group>
                    <Dropdown
                        className="auto"
                        emptyLabel="Type"
                        type="contact_type"
                        name={`${phone}.type`}
                        onChange={(e) => onChangeType(e, index)}
                    />
                </div>
            ))}
            <button className="btn btn-add outline mt-2" onClick={(e) => pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        </>
    );
};

const renderOrganizations = ({ fields, onChangeRole, onBlurOrganization, onChangeOrganization, t }) => {
    const pushField = (event) => {
        event.preventDefault();
        if (fields.length < 5) {
            fields.push({});
        }
    };
    return (
        <>
            {fields.map((organization, index) => (
                <ComponentFormRow editable={true} key={index}>
                    {(editFields) => {
                        return (
                            <>
                                <div>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select role"
                                        model="roles"
                                        name={`${organization}.role`}
                                        onChange={(e) => onChangeRole(e, index)}
                                    />
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Type ID"
                                            name={`${organization}.id`}
                                            onBlur={(e) => onBlurOrganization(e, index)}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select organization"
                                        model="organization"
                                        name={`${organization}.organization`}
                                        onChange={(e) => onChangeOrganization(e, index)}
                                    />
                                </div>
                            </>
                        );
                    }}
                </ComponentFormRow>
            ))}
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div className="col-actions">
                    <button className="btn link mt-2" onClick={(e) => pushField(e)}>
                        {t("actions.add-new")}
                    </button>
                </div>
            </div>
        </>
    );
};

class CreateContact extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            first_name: "New",
            last_name: "Contact",
            notes: "",
            emails: {},
            phones: {},
            contact_type: "",
            comment: "",
            organizations: {},
            errors: []
        };
    }

    handleFieldChange = (event) => {
        if (event.target.name === "fullName") {
            let fullName = event.target.value;
            fullName = fullName.split(" ");
            this.setState({ first_name: fullName[0], last_name: fullName[1] });
        }
    };

    _handleContact() {
        const {
            title,
            first_name,
            last_name,
            notes,
            email,
            phone,
            contact_type,
            comment,
            roles,
            organizations
        } = this.state;

        CreateContactMutation(
            title,
            first_name,
            last_name,
            notes,
            email,
            phone,
            contact_type,
            comment,
            roles,
            organizations,
            () => this.props.history
        )
            .then((response) => {
                console.log(response);
            })
            .catch((errors) => {
                this.setState({
                    errors: errors.map((message) => {
                        return message.message;
                    })
                });
            });
    }

    handleSubmit = (event) => {
        console.log(this.props);
        event.preventDefault();
        // this._handleContact();
    };

    render() {
        const { t } = this.props;
        console.log(this.props);
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="model-details">
                    <section className="title-section">
                        <EditField onChange={this.handleFieldChange}>
                            <h1 className="ml-0">
                                {this.state.first_name} {this.state.last_name}
                            </h1>
                        </EditField>
                    </section>
                    <section className="model-section">
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("contact-details.notes")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <Field
                                            name="notes"
                                            component={FieldInput}
                                            as="textarea"
                                            rows="3"
                                            placeholder={t("contact-details.add-notes")}
                                            onChange={(e) => {
                                                this.setState({ notes: e.target.value });
                                            }}
                                            value={this.state.notes}
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
                                        <h2>{t("contact-details.general-information")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div>Title</div>
                                                <div>Type</div>
                                                <div>E-mails</div>
                                                <div>Phone</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <Form.Group controlId="formGroupTitle">
                                                            <Field
                                                                type="text"
                                                                component={FieldInput}
                                                                placeholder="Type title"
                                                                name="title"
                                                                onBlur={(e) => this.setState({ title: e.target.value })}
                                                            />
                                                        </Form.Group>
                                                    </div>
                                                    <div>
                                                        <Dropdown
                                                            className="auto"
                                                            emptyLabel="Type"
                                                            name="type"
                                                            type="contact_type"
                                                            onChange={(e) =>
                                                                this.setState({ contact_type: e.target.value })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="emails"
                                                            t={t}
                                                            component={renderEmails}
                                                            onBlurEmail={(event, index) =>
                                                                this.setState({
                                                                    emails: { [index]: { email: event.target.value } }
                                                                })
                                                            }
                                                            onChangeType={(event, index) =>
                                                                this.setState({
                                                                    emails: { [index]: { type: event.target.value } }
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                    <div>
                                                        <FieldArray
                                                            name="phones"
                                                            t={t}
                                                            component={renderPhones}
                                                            onBlurPhone={(event, index) =>
                                                                this.setState({
                                                                    phones: { [index]: { number: event.target.value } }
                                                                })
                                                            }
                                                            onChangeType={(event, index) =>
                                                                this.setState({
                                                                    phones: { [index]: { type: event.target.value } }
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-details">
                                            <div>
                                                <div>PGP Fingerprint</div>
                                            </div>
                                            <div>
                                                <div>
                                                    <Form.Group controlId="formGrouppgp_fingerprint">
                                                        <NumberFormat
                                                            className="auto"
                                                            name="pgp_fingerprint"
                                                            displayType="input"
                                                            format="#### #### #### #### #### #### #### #### #### ####"
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
                                        <h2>{t("contact-details.profesional-details")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div>Role</div>
                                                <div>Organization ID</div>
                                                <div>Organization</div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <FieldArray
                                                    name="organizations"
                                                    component={renderOrganizations}
                                                    t={t}
                                                    onChangeRole={(event, index) =>
                                                        this.setState({
                                                            organizations: { [index]: { number: event.target.value } }
                                                        })
                                                    }
                                                    onBlurOrganization={(event, index) =>
                                                        this.setState({
                                                            organizations: { [index]: { type: event.target.value } }
                                                        })
                                                    }
                                                    onChangeOrganization={(event, index) =>
                                                        this.setState({
                                                            organizations: { [index]: { type: event.target.value } }
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
                                <h2>{t("contact-details.worklog")}</h2>
                            </ToggleHeading>
                            <TogglePanel>
                                <Form.Group controlId="textarea">
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        placeholder={t("worklog.add-comment")}
                                        onChange={(e) => {
                                            this.setState({ comment: e.target.value });
                                        }}
                                        value={this.state.comment}
                                    />
                                </Form.Group>
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
                    <button className="btn primary lg" type="submit" disabled={this.props.submitting}>
                        Save
                    </button>
                </div>
            </form>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.fullName){
        errors.fullName = "* Required!";
    }
    if (!values.title) {
        errors.title = "* Required!";
    }
    if (!values.emails || !values.emails.length) {
        errors.emails = { _error: "At least one email must be entered" };
    } else {
        const emailArrayErrors = [];
        values.emails.forEach((email, emailIndex) => {
            const emailErrors = {};
            if (!email || !email.email) {
                emailErrors.email = "* Required!";
                emailArrayErrors[emailIndex] = emailErrors;
            }
            if (!email || !email.type) {
                emailErrors.type = "* Required!";
                emailArrayErrors[emailIndex] = emailErrors;
            }
            return emailErrors;
        });
        if (emailArrayErrors.length) {
            errors.emails = emailArrayErrors;
        }
    }

    if (!values.phones || !values.phones.length) {
        errors.phones = { _error: "At least one phone must be entered" };
    } else {
        const phoneArrayErrors = [];
        values.phones.forEach((phone, phoneIndex) => {
            const phoneErrors = {};
            if (!phone || !phone.phone) {
                phoneErrors.phone = "* Required!";
                phoneArrayErrors[phoneIndex] = phoneErrors;
            }
            if (!phone || !phone.type) {
                phoneErrors.type = "* Required!";
                phoneArrayErrors[phoneIndex] = phoneErrors;
            }
            return phoneErrors;
        });
        if (phoneArrayErrors.length) {
            errors.phones = phoneArrayErrors;
        }
    }

    if (!values.phone) {
        errors.phone = "* Required!";
    }
    if (!values.pgp_fingerprint) {
        errors.pgp_fingerprint = "* Required!";
    }
    return errors;
};

CreateContact = reduxForm({
    form: "createContact",
    validate,
    initialValues: {
        emails: [{ email: "", type: "" }],
        phones: [{ phone: "", type: "" }],
        organizations: [{ role: "", id: "", organization: "" }]
    }
})(CreateContact);

export default withTranslation()(CreateContact);
