import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

import FieldInput from "../FieldInput";
import { getOrganization } from "../organization/Organization";
import Dropdown from "../Dropdown";
import { LIMIT_NEW_CONTACTS } from "../../config";

class FieldArrayOrganizationsContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillUpdate(nextProps, nextState) {
        const newFields = nextProps.fields.getAll();
        if (newFields && newFields.length && nextProps.editable) {
            newFields.forEach((field, index) => {
                if (field && this.validateOrganization(field, index)) {
                    this.props.dispatch(change(this.props.meta.form, `organizations[${index}].status`, "saved"));
                } else {
                    nextProps.dispatch(change(nextProps.meta.form, `organizations[${index}].status`, "editing"));
                }
            });
        }
    }

    renderFormBlockSection = (editable, data, index) => {
        const { fields } = this.props;
        const values = fields.getAll();
        const isPresentState = !editable && data.presentContent;
        return (
            <div
                className="form-internal-block--organizations-contacts__section form-internal-block__section"
                key={index}
            >
                <div
                    className={`form-internal-block--organizations-contacts__section_title form-internal-block__section__title`}
                >
                    {data.title}
                </div>

                {data.editContent.map((content, contentIndex) => (
                    <div
                        key={`${contentIndex} - ${index}`}
                        className={`form-internal-block--organizations-contacts__section__content form-internal-block__section__content 
                        ${
                            editable
                                ? "form-internal-block--organizations-contacts__section__content--edition-mode form-internal-block__section__content--edition-mode"
                                : ""
                        }
                        ${editable && values[contentIndex].status === "remove" ? "d-none" : ""}`}
                    >
                        {isPresentState ? data.presentContent[contentIndex] : data.editContent[contentIndex]}
                    </div>
                ))}
            </div>
        );
    };

    validateOrganization = (field, index) => {
        const errors = this.props.errors;
        const hasBlankFields =
            field.role === "" ||
            field.role === undefined ||
            (field.organization === "" || field.organization === undefined);
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    addRow = (event) => {
        if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
        }
    };

    saveRow = (index) => {
        if (this.validateOrganization(index)) {
            this.props.dispatch(change(this.props.meta.form, `organizations[${index}].status`, "saved"));
        } else {
            this.props.dispatch(touch(this.props.meta.form, `organizations[${index}].role`));
            this.props.dispatch(touch(this.props.meta.form, `organizations[${index}].organization`));
        }
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `organizations[${index}].status`, "editing"));
    };

    removeRow = (index) => {
        const { fields } = this.props;
        const values = fields.getAll();
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateContact", `organizations[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    saveLabel = (event, index) => {
        const input_label = event.target.options[event.target.selectedIndex].text;
        const input_name = event.target.name.split(".")[1];
        this.props.dispatch(change(this.props.meta.form, `organizations[${index}].${input_name}_label`, input_label));
        if (input_name === "organization") {
            getOrganization(event.target.value).then((organization) => {
                if (organization) {
                    this.props.dispatch(
                        change(
                            this.props.meta.form,
                            `organizations[${index}].organization_id`,
                            organization.organization_id
                        )
                    );
                }
            });
        }
    };

    renderRowsData() {
        const { fields, t, editable } = this.props;
        const values = fields.getAll();
        const rowsData = [
            {
                title: "Role",
                presentContent: values && values.length ? values.map((value) => value.role_label) : [],
                editContent: fields.map((member, index) => {
                    return (
                        <Dropdown
                            className="auto"
                            emptyLabel="Select role"
                            model="roles"
                            onChange={(e) => {
                                this.saveLabel(e, index);
                            }}
                            name={`${member}.role`}
                        />
                    );
                })
            },
            {
                title: "Organization ID",
                presentContent: values && values.length ? values.map((value) => value.organization_id) : [],
                editContent: fields.map((member, index) => {
                    return (
                        <Form.Group>
                            <Field
                                type="text"
                                disabled
                                component={FieldInput}
                                placeholder="Type ID"
                                name={`${member}.organization_id`}
                            />
                        </Form.Group>
                    );
                })
            },
            {
                title: "Organization",
                presentContent: values && values.length ? values.map((value) => value.organization_label) : [],
                editContent: fields.map((member, index) => {
                    return (
                        <>
                            <Form.Group>
                                <Dropdown
                                    className="auto"
                                    emptyLabel={t("organization-details.select-organization")}
                                    model="organization"
                                    onChange={(e) => {
                                        this.saveLabel(e, index);
                                    }}
                                    name={`${member}.organization`}
                                />
                            </Form.Group>
                            <div className="row-remove-cta" onClick={() => this.removeRow(index)}></div>
                        </>
                    );
                })
            }
        ];
        return (
            <div className="form-internal-block form-internal-block--organizations-contacts">
                {rowsData.map((data, index) => {
                    return this.renderFormBlockSection(editable, data, index);
                })}
            </div>
        );
    }

    render() {
        const { fields, meta, t, editable } = this.props;
        return (
            <div className="organizations-contacts">
                {this.renderRowsData()}
                {meta.error && <div>{meta.error}</div>}
                {editable && (
                    <button type="button" className="btn btn-add outline" onClick={(e) => this.addRow(e)}>
                        {t("actions.add-new")}
                    </button>
                )}
            </div>
        );
    }
}

export default withTranslation()(FieldArrayOrganizationsContact);
