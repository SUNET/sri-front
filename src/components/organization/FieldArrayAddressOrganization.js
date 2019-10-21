import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

const refreshFields = () => {
    return { type: "REFRESH_FIELDS" };
};

class FieldArrayAddressOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    validateAddress = (index) => {
        const values = this.props.fields.getAll()[index];
        const hasBlankfields =
            values.website !== "" &&
            values.website !== undefined &&
            (values.street !== "" && values.street !== undefined) &&
            (values.postal_code !== "" && values.postal_code !== undefined) &&
            (values.postal_area !== "" && values.postal_area !== undefined) &&
            (values.phone !== "" && values.phone !== undefined);

        const errors = this.props.errors;
        return !(errors && errors[index] !== undefined) && (hasBlankfields && errors === undefined);
    };

    addRow = (event) => {
        if (this.props.fields.length < 20) {
            this.props.fields.push({ key: uuidv4(), status: "editing" });
        }
    };

    saveRow = (index) => {
        if (this.validateAddress(index)) {
            this.props.dispatch(change(this.props.meta.form, `addresses[${index}].status`, "saved"));
        } else {
            this.props.dispatch(touch(this.props.meta.form, `addresses[${index}].website`));
            this.props.dispatch(touch(this.props.meta.form, `addresses[${index}].street`));
            this.props.dispatch(touch(this.props.meta.form, `addresses[${index}].postal_code`));
            this.props.dispatch(touch(this.props.meta.form, `addresses[${index}].postal_area`));
            this.props.dispatch(touch(this.props.meta.form, `addresses[${index}].phone`));
        }
        this.props.dispatch(refreshFields());
    };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `addresses[${index}].status`, "editing"));
        this.props.dispatch(refreshFields());
    };

    removeRow = (index, values) => {
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateOrganization", `addresses[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    render() {
        const { fields, meta, t, editable } = this.props;
        const values = fields.getAll();
        return (
            <>
                {fields.map((address, index) => (
                    <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
                        {editable && values[index].status === "editing" ? (
                            <>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            name={`${address}.website`}
                                            component={FieldInput}
                                            placeholder={t("organization-details.add-website")}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            name={`${address}.street`}
                                            component={FieldInput}
                                            placeholder={t("organization-details.add-street")}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            name={`${address}.postal_code`}
                                            component={FieldInput}
                                            placeholder={t("organization-details.add-postalCode")}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            name={`${address}.postal_area`}
                                            component={FieldInput}
                                            placeholder={t("organization-details.add-postalArea")}
                                        />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Field
                                            type="text"
                                            name={`${address}.phone`}
                                            component={FieldInput}
                                            placeholder={t("organization-details.add-phone")}
                                        />
                                    </Form.Group>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>{fields.getAll()[index].website}</div>
                                <div>{fields.getAll()[index].street}</div>
                                <div>{fields.getAll()[index].postal_code}</div>
                                <div>{fields.getAll()[index].postal_area}</div>
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

export default withTranslation()(FieldArrayAddressOrganization);
