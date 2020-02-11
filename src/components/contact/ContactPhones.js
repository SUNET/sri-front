import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Field, change } from "redux-form";
import Dropdown from "../Dropdown";
import FieldInput from "../FieldInput";

class ContactPhones extends React.Component {
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
                dispatch(change(meta.form, `phones[${index}].status`, "remove"));
            } else {
                fields.remove(index);
            }
        };

        return (
            <div className={`list-items${!editable ? "__label" : "__inputs"}`}>
                {fields.map((phone, index) =>
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
                                    name={`${phone}.phone`}
                                    type="text"
                                    component={FieldInput}
                                    placeholder="Phone"
                                />
                            </Form.Group>
                            <Dropdown
                                className="auto"
                                emptyLabel="Type"
                                type="phone_type"
                                name={`${phone}.type`}
                                onChange={(e) => {}}
                            />
                            <div className="row-remove-cta" onClick={() => removeRow(index)}></div>
                        </div>
                    ) : (
                        <div
                            key={index}
                            className={`list-items__label__row ${values[index].status === "remove" ? "d-none" : ""}`}
                        >
                            <div className="list-items__label__row__main-text">{fields.getAll()[index].phone}</div>
                            <div className="list-items__label__row__secondary-text">{fields.getAll()[index].type}</div>
                        </div>
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

export default withTranslation()(ContactPhones);
