import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change } from "redux-form";
import uuidv4 from "uuid/v4";

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

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.fields.getAll() !== nextProps.fields.getAll()) {
    //         return true;
    //     }
    //     return false;
    // }

    addRow = (event) => {
        const index = this.props.fields.length;
        if (this.props.fields.length < 5) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
            this.setState({ ...this.state, [index]: { is_editing: true, is_save: false } });
        }
    };

    saveRow = (index) => {
        console.log(this.props);
        if (this.props.meta.valid) {
            this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "saved"));
            this.props.dispatch(refreshFields());
            this.setState({ [index]: { is_editing: false, is_save: true } });
        }
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "editing"));
        this.props.dispatch(refreshFields());
        this.setState({ [index]: { is_editing: true, is_save: false } });
    };

    removeRow = (index, values) => {
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateGroup", `members[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
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
                                        onChange={(e) => {}}
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
                                <div>{fields.getAll()[index].email}</div>
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
