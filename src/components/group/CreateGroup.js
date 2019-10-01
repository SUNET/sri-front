import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";

import DropdownSearch from "../DropdownSearch";

import CreateContactMutation from "../../mutations/CreateContactMutation";

import ToggleSection, { ToggleHeading, TogglePanel } from "../../components/ToggleSection";
import Dropdown from "../Dropdown";
import EditField from "../EditField";
import FieldInput from "../FieldInput";
import ComponentFormRowContainer from "../../containers/ComponentFormRow";

const renderMembers = ({ fields, meta, onChangeRole, onBlurMember, onChangeMember, t, addRow }) => {
    const pushField = (event) => {
        if (fields.length < 5) {
            addRow(fields.length);
            fields.push({ key: uuidv4() });
        }
    };
    console.log(fields.getAll());
    return (
        <>
            {fields.map((member, index) => (
                <>
                    <span>{`${index}_${fields.length}`}</span>
                    <span>{member.key}</span>
                    <ComponentFormRowContainer editable={true} key={member.key} index={index} fields={fields}>
                        {(editFields, isNew) => {
                            return editFields || isNew ? (
                                <>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Full Name"
                                                name={`${member}.name`}
                                                onBlur={(e) => onBlurMember(e, index)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Dropdown
                                            className="auto"
                                            emptyLabel="Select organization"
                                            model="organization"
                                            name={`${member}.organization`}
                                            onChange={(e) => onChangeMember(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Email"
                                                name={`${member}.email`}
                                                onBlur={(e) => onBlurMember(e, index)}
                                            />
                                        </Form.Group>
                                    </div>
                                    <div>
                                        <Form.Group>
                                            <Field
                                                type="text"
                                                component={FieldInput}
                                                placeholder="Phone"
                                                name={`${member}.phone`}
                                                onBlur={(e) => onBlurMember(e, index)}
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

class CreateGroup extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: "New Group",
            description: "",
            newMember: {},
            members: {},
            comment: "",
            errors: []
        };
    }

    handleFieldChange = (event) => {
        this.setState({ name: event.target.value });
    };

    _handleGroup() {
        const { name, description } = this.state;

        CreateContactMutation(name, description, () => this.props.history)
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
        event.preventDefault();
        this._handleContact();
    };

    handleSelectedMember = (selection) => {
        // this.setState({ newMember: { ...selection.node } });
        if (selection !== null) {

            const addMember = { ...selection.node };
            console.log("PUSH",addMember);
            this.props.dispatch(arrayPush("createGroup", "members", {
                name: addMember.name,
                organization: addMember.roles[0].end.handle_id,
                email: addMember.emails[0].name,
                phone: addMember.phones[0].name,
                key: uuidv4(),
            }));
        }
    };

    render() {
        const { t } = this.props;
        console.log(this.props);
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
                                        <h2>{t("group-details.description")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <Field
                                            name="notes"
                                            component={FieldInput}
                                            as="textarea"
                                            rows="3"
                                            placeholder={t("group-details.add-description")}
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
                        <DropdownSearch selection={this.handleSelectedMember} />
                        <Form.Row>
                            <Col>
                                <ToggleSection defaultEditable={false}>
                                    <ToggleHeading>
                                        <h2>{t("group-details.members")}</h2>
                                    </ToggleHeading>
                                    <TogglePanel>
                                        <div className="table-details">
                                            <div>
                                                <div>Name</div>
                                                <div>Organization</div>
                                                <div>Email</div>
                                                <div>Phone</div>
                                                <div></div>
                                            </div>
                                            <div>
                                                <FieldArray
                                                    name="members"
                                                    component={renderMembers}
                                                    t={t}
                                                    addRow={this.props.addRow}
                                                    onBlurMember={(event, index) =>
                                                        this.setState({
                                                            members: {
                                                                ...this.state.members,
                                                                [index]: {
                                                                    ...this.state.members[index],
                                                                    [event.target.name.split(".")[1]]:
                                                                        event.target.value
                                                                }
                                                            }
                                                        })
                                                    }
                                                    onChangeMember={(event, index) =>
                                                        this.setState({
                                                            members: {
                                                                ...this.state.members,
                                                                [index]: {
                                                                    ...this.state.members[index],
                                                                    [event.target.name.split(".")[1]]:
                                                                        event.target.value
                                                                }
                                                            }
                                                        })
                                                    }
                                                    addMember={this.state.newMember}
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
    if (!values.fullName) {
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

CreateGroup = reduxForm({
    form: "createGroup",
    validate,
    initialValues: {
        members: [{ name: "", organization: "", email: "", phone: "", key: uuidv4() }]
    }
})(CreateGroup);

export default withTranslation()(CreateGroup);
