import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import { change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const refreshFields = () => {
    return { type: "REFRESH_FIELDS" };
};

class FieldArrayOrganizationsContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    validateOrganization = (index) => {
        const values = this.props.fields.getAll()[index];
        const fieldsNotBlank = values.role !== "" && values.organization !== "";

        const errors = this.props.errors;
        return !(errors && errors[index] !== undefined) && (fieldsNotBlank && errors === undefined);
    };

    addRow = (event) => {
        if (this.props.fields.length < 5) {
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
        this.props.dispatch(refreshFields());
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `organizations[${index}].status`, "editing"));
        this.props.dispatch(refreshFields());
    };

    removeRow = (index, values) => {
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
                                    <Dropdown
                                        className="auto"
                                        emptyLabel="Select role"
                                        model="roles"
                                        onChange={(e) => {
                                            this.saveLabel(e, index);
                                        }}
                                        name={`${member}.role`}
                                    />
                                </div>
                                <div>
                                    <Form.Group>
                                        <input
                                            type="text"
                                            disabled
                                            placeholder="Type ID"
                                            value={fields.getAll()[index].organization}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Dropdown
                                            className="auto"
                                            emptyLabel="Select organization"
                                            model="organization"
                                            onChange={(e) => {
                                                this.saveLabel(e, index);
                                            }}
                                            name={`${member}.organization`}
                                        />
                                    </Form.Group>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{fields.getAll()[index].role_label}</div>
                                <div>{fields.getAll()[index].organization}</div>
                                <div>{fields.getAll()[index].organization_label}</div>
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

export default withTranslation()(FieldArrayOrganizationsContact);
