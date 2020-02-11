import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Field, change } from "redux-form";
import Dropdown from "../Dropdown";
import FieldInput from "../FieldInput";
import CopyToClipboard from "../CopyToClipboard";

class ContactEmails extends React.Component {
    render() {
        const { fields, meta, t, editable = true, dispatch } = this.props;
        const values = fields.getAll();

        const newFieldParams = meta.form === "createContact" ? {} : { status: "saved", origin: "new" };

        const pushField = (event) => {
            if (fields.length < 10) {
                fields.push(newFieldParams);
            }
        };

        const removeRow = (index) => {
            if (fields.get(index).status === "saved") {
                dispatch(change(meta.form, `emails[${index}].status`, "remove"));
            } else {
                fields.remove(index);
            }
        };

        return (
            <div className={`list-items${!editable ? "__label" : "__inputs"}`}>
                {fields.map((email, index) =>
                    editable ? (
                        <div
                            key={index}
                            className={`list-items__inputs__row ${
                                values[index].status === "remove" ? "d-none" : "input-group"
                            }`}
                        >
                            <Form.Group>
                                <Field
                                    className="auto"
                                    name={`${email}.email`}
                                    type="text"
                                    component={FieldInput}
                                    placeholder="Email"
                                />
                            </Form.Group>
                            <Dropdown
                                className="auto"
                                emptyLabel="Type"
                                type="email_type"
                                name={`${email}.type`}
                                onChange={(e) => {}}
                            />
                            <div className="row-remove-cta" onClick={() => removeRow(index)}></div>
                        </div>
                    ) : (
                        <CopyToClipboard key={index} copyContent={fields.getAll()[index].email}>
                            <div
                                className={`list-items__label__row ${
                                    values[index].status === "remove" ? "d-none" : ""
                                }`}
                            >
                                <div className="list-items__label__row__main-text">{fields.getAll()[index].email}</div>
                                <div className="list-items__label__row__secondary-text">
                                    {fields.getAll()[index].type}
                                </div>
                            </div>
                        </CopyToClipboard>
                    )
                )}
                {editable ? (
                    <button type="button" className="btn btn-add outline" onClick={(e) => pushField(e)}>
                        <span>{t("actions.add-new")}</span>
                    </button>
                ) : null}
            </div>
        );
    }
}

export default withTranslation()(ContactEmails);
