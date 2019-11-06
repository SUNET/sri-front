import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

import CopyToClipboard from "../CopyToClipboard";
import Dropdown from "../Dropdown";
import { LIMIT_NEW_CONTACTS } from "../../constants";

class FieldArrayContactsOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    validateContact = (index) => {
        const errors = this.props.errors;
        const values = this.props.fields.getAll();
        const hasBlankFields =
            values[index].name === "" ||
            values[index].name === undefined ||
            (values[index].role === "" || values[index].role === undefined) ||
            (values[index].email === "" || values[index].email === undefined) ||
            (values[index].phone === "" || values[index].phone === undefined);
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    addRow = (event) => {
        if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
        }
    };

    saveRow = (index) => {
        if (this.validateContact(index)) {
            this.props.dispatch(change(this.props.meta.form, `contacts[${index}].status`, "saved"));
        } else {
            this.props.dispatch(touch(this.props.meta.form, `contacts[${index}].name`));
            this.props.dispatch(touch(this.props.meta.form, `contacts[${index}].role`));
            this.props.dispatch(touch(this.props.meta.form, `contacts[${index}].email`));
            this.props.dispatch(touch(this.props.meta.form, `contacts[${index}].phone`));
        }
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `contacts[${index}].status`, "editing"));
    };

    removeRow = (index, values) => {
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateOrganization", `contacts[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    saveLabel = (event, index) => {
        const role_label = event.target.options[event.target.selectedIndex].text;
        this.props.dispatch(change(this.props.meta.form, `contacts[${index}].role_label`, role_label));
    };

    render() {
        const { fields, meta, t, editable } = this.props;
        const values = fields.getAll();
        return (
            <>
                {fields.map((contact, index) => (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
                        {editable && values[index].status === "editing" ? (
                            <>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Full Name"
                                            name={`${contact}.name`}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select role"
                                        model="roles"
                                        onChange={(e) => {
                                            this.saveLabel(e, index);
                                        }}
                                        name={`${contact}.role`}
                                    />
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Email"
                                            name={`${contact}.email`}
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
                                        />
                                    </Form.Group>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{fields.getAll()[index].name}</div>
                                <div>{fields.getAll()[index].role_label}</div>
                                {this.props.meta.form === "updateOrganization" && fields.getAll()[index].email ? (
                                    <CopyToClipboard>{fields.getAll()[index].email}</CopyToClipboard>
                                ) : (
                                    <div>{fields.getAll()[index].email}</div>
                                )}
                                <div>{fields.getAll()[index].phone}</div>
                            </>
                        )}
                        <div className="actions">
                            {editable && (
                                <div>
                                    <div>
                                        <i className="icon-trash" onClick={() => this.removeRow(index, values)}></i>
                                    </div>
                                    <div>
                                        {values[index].status !== "editing" && (
                                            <i className="icon-pencil" onClick={() => this.editRow(index)}></i>
                                        )}
                                        {values[index].status === "editing" && (
                                            <span className="ok-check" onClick={() => this.saveRow(index)}>
                                                <i className="icon-tick"></i>
                                                {t("actions.save")}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {meta.error && <div>{meta.error}</div>}
                {editable && (
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className="col-actions">
                            <button type="button" className="btn link add mt-2" onClick={(e) => this.addRow(e)}>
                                {t("actions.add-new")}
                            </button>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default withTranslation()(FieldArrayContactsOrganization);
