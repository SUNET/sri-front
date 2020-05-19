import React from "react";
import { Form } from "react-bootstrap";
import { Field, change } from "redux-form";
import Dropdown from "../Dropdown";
import FieldInput from "../FieldInput";
import CopyToClipboard from "../CopyToClipboard";
import "../../style/ModelDetails.scss";

class _EmailPhonesParentClass extends React.Component {
    ENTITY_NAME = "";
    FIELD_NAME = "";
    WITH_COPY_ROW = true;
    PLACEHOLDER_TRANSLATION = "";
    removeRow(index) {
        const { fields, meta, dispatch } = this.props;
        if (fields.get(index).status === "saved") {
            dispatch(change(meta.form, `${this.ENTITY_NAME}[${index}].status`, "remove"));
        } else {
            fields.remove(index);
        }
    }

    pushField(event) {
        const { fields, meta } = this.props;
        const newFieldParams = meta.form === "createContact" ? {} : { status: "saved", origin: "new" };
        if (fields.length < 10) {
            fields.push(newFieldParams);
        }
    }

    renderEditableOption(fieldEntity, index) {
        const { t, fields } = this.props;
        const values = fields.getAll();
        return (
            <div
                key={index}
                className={`list-items__inputs__row ${values[index].status === "remove" ? "d-none" : "input-group"}`}
            >
                <Form.Group>
                    <Field
                        className="auto"
                        name={`${fieldEntity}.${this.FIELD_NAME}`}
                        type="text"
                        component={FieldInput}
                        placeholder={t(this.PLACEHOLDER_TRANSLATION)}
                    />
                </Form.Group>
                <Dropdown
                    className="auto"
                    name={`${fieldEntity}.type`}
                    type={`${this.FIELD_NAME}_type`}
                    emptyLabel="Type"
                    onChange={(e) => {}}
                />
                <div className="row-remove-cta" onClick={() => this.removeRow(index)}></div>
            </div>
        );
    }

    renderPresentationalInfoContent(index) {
        const { fields } = this.props;
        const values = fields.getAll();
        return (
            <div className={`list-items__label__row ${values[index].status === "remove" ? "d-none" : ""}`}>
                <div className="list-items__label__row__main-text">{fields.getAll()[index][this.FIELD_NAME]}</div>
                <div className="list-items__label__row__secondary-text">{fields.getAll()[index].type_name}</div>
            </div>
        );
    }
    renderPresentationalInfo(index) {
        const { fields } = this.props;
        return (
            <div key={index}>
                {this.WITH_COPY_ROW ? (
                    <CopyToClipboard copyContent={fields.getAll()[index][this.FIELD_NAME]}>
                        {this.renderPresentationalInfoContent(index)}
                    </CopyToClipboard>
                ) : (
                    this.renderPresentationalInfoContent(index)
                )}
            </div>
        );
    }
    renderAddButton() {
        const { t } = this.props;
        return (
            <button type="button" className="btn btn-add outline" onClick={(e) => this.pushField(e)}>
                <span>{t("actions.add-new")}</span>
            </button>
        );
    }
    render() {
        const { fields, editable = true } = this.props;
        return (
            <div className={`list-items${!editable ? "__label" : "__inputs"}`}>
                {fields.map((field, index) =>
                    editable ? this.renderEditableOption(field, index) : this.renderPresentationalInfo(index)
                )}
                {editable ? this.renderAddButton() : null}
            </div>
        );
    }
}

export default _EmailPhonesParentClass;
