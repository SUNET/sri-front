import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change } from "redux-form";
import uuidv4 from "uuid/v4";
import { LIMIT_NEW_CONTACTS } from "../../config";

class FieldArrayAddressOrganization extends React.Component {
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const newFields = nextProps.fields.getAll();
        if (newFields && newFields.length && nextProps.editable) {
            newFields.forEach((field, index) => {
                const validated = this.validateAddress(field, index);
                if (field && field.status !== "saved" && validated) {
                    this.props.dispatch(change(this.props.meta.form, `addresses[${index}].status`, "saved"));
                } else if (!validated && field.status !== "editing") {
                    nextProps.dispatch(change(nextProps.meta.form, `addresses[${index}].status`, "editing"));
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

    validateAddress = (field, index) => {
        const errors = this.props.errors;
        // when component is colapse, it need to check if the data are empty
        const hasBlankFields =
            field.street === "" ||
            field.street === undefined ||
            (field.postal_code === "" || field.postal_code === undefined) ||
            (field.postal_area === "" || field.postal_area === undefined) ||
            (field.phone === "" || field.phone === undefined);

        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    addRow = (event) => {
        if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
        }
    };

    removeRow = (index) => {
        const { fields } = this.props;
        const values = fields.getAll();
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateOrganization", `addresses[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    renderRowsData() {
        const { fields, t, editable } = this.props;
        const values = fields.getAll();
        const rowsData = [
            {
                title: t("organization-details.street"),
                presentContent: values && values.length ? values.map((value) => value.street) : [],
                editContent: fields.map((address, index) => {
                    return (
                        <Form.Group>
                            <Field
                                type="text"
                                name={`${address}.street`}
                                component={FieldInput}
                                placeholder={t("organization-details.add-street")}
                            />
                        </Form.Group>
                    );
                })
            },
            {
                title: t("organization-details.postal-code"),
                presentContent: values && values.length ? values.map((value) => value.postal_code) : [],
                editContent: fields.map((address, index) => {
                    return (
                        <Form.Group>
                            <Field
                                type="text"
                                name={`${address}.postal_code`}
                                component={FieldInput}
                                placeholder={t("organization-details.add-postalCode")}
                            />
                        </Form.Group>
                    );
                })
            },
            {
                title: t("organization-details.postal-area"),
                presentContent: values && values.length ? values.map((value) => value.postal_area) : [],
                editContent: fields.map((address, index) => {
                    return (
                        <Form.Group>
                            <Field
                                type="text"
                                name={`${address}.postal_area`}
                                component={FieldInput}
                                placeholder={t("organization-details.add-postalArea")}
                            />
                        </Form.Group>
                    );
                })
            },
            {
                title: t("organization-details.phone"),
                presentContent: values && values.length ? values.map((value) => value.phone) : [],
                editContent: fields.map((address, index) => {
                    return (
                        <Form.Group>
                            <Field
                                type="text"
                                name={`${address}.phone`}
                                component={FieldInput}
                                placeholder={t("organization-details.add-phone")}
                            />
                            <div
                                className="row-remove-cta row-remove-cta--address"
                                onClick={() => this.removeRow(index)}
                            ></div>
                        </Form.Group>
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
        const { meta, t, editable } = this.props;
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

export default withTranslation()(FieldArrayAddressOrganization);
