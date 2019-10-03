import React from "react";
import { Form, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { arrayPush, FieldArray, Field, reduxForm } from "redux-form";
import uuidv4 from "uuid/v4";

import DropdownSearch from "../DropdownSearch";

import CreateGroupMutation from "../../mutations/CreateGroupMutation";

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
    console.log(meta);
    return (
        <>
            {fields.map((member, index) => (
                <>
                    <ComponentFormRowContainer editable={true} key={member.key} fields={fields} index={index}>
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
                                <>
                                    <div>{fields.getAll()[index].name}</div>
                                    <div>{fields.getAll()[index].organization_label}</div>
                                    <div>{fields.getAll()[index].email}</div>
                                    <div>{fields.getAll()[index].phone}</div>
                                </>
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
            members: {},
            comment: "",
            errors: []
        };
    }

    handleFieldChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, description, members, comment } = this.state;

        CreateGroupMutation(name, description, members, comment, () => this.props.history);
    };

    handleSelectedMember = (selection) => {
        if (selection !== null) {
            let index = this.state.members.length || 1;
            const addMember = { ...selection.node };
            const newMember = {
                name: addMember.name,
                first_name: addMember.first_name,
                last_name: addMember.last_name,
                id: addMember.handle_id,
                contact_type: addMember.contact_type,
                organization: addMember.roles[0].end.handle_id,
                organization_label: addMember.roles[0].end.name,
                email: addMember.emails[0].name,
                phone: addMember.phones[0].name,
                created: true,
                key: uuidv4()
            };
            this.setState({
                members: {
                    ...this.state.members,
                    [index]: {
                        ...newMember,
                    }
                }
            })
            this.props.addRow(index);
            this.props.dispatch(
                arrayPush("createGroup", "members", newMember)
            );
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
                                            name="description"
                                            component={FieldInput}
                                            as="textarea"
                                            rows="3"
                                            placeholder={t("group-details.add-description")}
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
                                                                        event.target.value,
                                                                        [event.target.name.split(".")[1] + "_label"]: event.target.options[event.target.value].text
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

    if (!values.members || !values.members.length) {
        errors.members = { _error: "At least one email must be entered" };
    } else {
        const memberArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
            const memberErrors = {};
            if (!member || !member.name) {
                memberErrors.name = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.organization) {
                memberErrors.organization = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.email) {
                memberErrors.email = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            if (!member || !member.phone) {
                memberErrors.phone = "* Required!";
                memberArrayErrors[memberIndex] = memberErrors;
            }
            return memberErrors;
        });
        if (memberArrayErrors.length) {
            errors.members = memberArrayErrors;
        }
    }
    console.log("ERRORS", errors);
    return errors;
};

CreateGroup = reduxForm({
    form: "createGroup",
    validate,
    initialValues: {
        members: [{ name: "", organization: "", email: "", phone: "", key: uuidv4(), created: false }]
    }
})(CreateGroup);

export default withTranslation()(CreateGroup);
