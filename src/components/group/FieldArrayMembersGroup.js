import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

import CopyToClipboard from "../CopyToClipboard";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const refreshFields = () => {
    return { type: "REFRESH_FIELDS" };
};

class FieldArrayMembersGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    validateMember = (index) => {
        const values = this.props.fields.getAll()[index];
        const fieldsNotBlank =
            values.name !== "" && values.organization !== "" && values.email !== "" && values.phone !== "";

        console.log(values, fieldsNotBlank);
        const errors = this.props.errors;
        return !(errors && errors[index] !== undefined) && (fieldsNotBlank && errors === undefined);
    };

    addRow = (event) => {
        if (this.props.fields.length < 5) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
        }
    };

    saveRow = (index) => {
        if (this.validateMember(index)) {
            this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "saved"));
        } else {
            this.props.dispatch(touch(this.props.meta.form, `members[${index}].name`));
            this.props.dispatch(touch(this.props.meta.form, `members[${index}].organization`));
            this.props.dispatch(touch(this.props.meta.form, `members[${index}].email`));
            this.props.dispatch(touch(this.props.meta.form, `members[${index}].phone`));
        }
        this.props.dispatch(refreshFields());
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "editing"));
        this.props.dispatch(refreshFields());
    };

    removeRow = (index, values) => {
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateGroup", `members[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    saveLabel = (event, index) => {
        const organization_label = event.target.options[event.target.value].text;
        this.props.dispatch(change(this.props.meta.form, `members[${index}].organization_label`, organization_label));
    };

    render() {
        const { fields, meta, t, editable } = this.props;
        const values = fields.getAll();
        return (
            <>
                {fields.map((member, index) => (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
                        {editable && values[index].status === "editing" ? (
                            <>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Full Name"
                                            name={`${member}.name`}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select organization"
                                        model="organization"
                                        onChange={(e) => {
                                            this.saveLabel(e, index);
                                        }}
                                        name={`${member}.organization`}
                                    />
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            component={FieldInput}
                                            placeholder="Email"
                                            name={`${member}.email`}
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
                                        />
                                    </Form.Group>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{fields.getAll()[index].name}</div>
                                <div>{fields.getAll()[index].organization_label}</div>
                                {this.props.meta.form === "updateGroup" && fields.getAll()[index].email ? (
                                    <CopyToClipboard>{fields.getAll()[index].email}</CopyToClipboard>
                                ) : (
                                    <div>{fields.getAll()[index].email}</div>
                                )}
                                <div>{fields.getAll()[index].phone}</div>
                            </>
                        )}
                        <div className="actions">
                            {editable && (
                                <div className="row">
                                    <div className="col">
                                        <FontAwesomeIcon icon={faTrash} onClick={() => this.removeRow(index, values)} />
                                    </div>
                                    <div className="col">
                                        {values[index].status !== "editing" && (
                                            <FontAwesomeIcon icon={faPen} onClick={() => this.editRow(index)} />
                                        )}
                                        {values[index].status === "editing" && (
                                            <span className="ok-check" onClick={() => this.saveRow(index)}>
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
                            <button type="button" className="btn link mt-2" onClick={(e) => this.addRow(e)}>
                                {t("actions.add-new")}
                            </button>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default withTranslation()(FieldArrayMembersGroup);
