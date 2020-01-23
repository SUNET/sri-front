import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";

import FieldInput from "../FieldInput";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";

import CopyToClipboard from "../CopyToClipboard";
import Dropdown from "../Dropdown";
import { LIMIT_NEW_CONTACTS } from "../../config";

class FieldArrayContactsOrganization extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderFormBlockSection = (editable = false, data, index) => {
        const { fields } = this.props;
        const values = fields.getAll();
        console.log(data);

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

                {data.presentContent.map((content, contentIndex) => (
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
                        {isPresentState ? content : data.editContent[contentIndex]}
                    </div>
                ))}
            </div>
        );
    };

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
        console.log("add new contact");

        // if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
        //     this.props.fields.push({ key: uuidv4(), status: "editing" });
        // }
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

    renderRowsData() {
        const generateSubDataList = (values, keyName) => {
            const result = values.length
                ? values.map((value, index) => {
                      return (
                          <div>
                              {/* {value[keyName].map((element, index) => {
                                  return <div key={index}>{element.name}</div>;
                              })} */}
                          </div>
                      );
                  })
                : [];
                console.log(result);
                
            return result;
        };
        const { editable, fields, t } = this.props;
        const values = fields.getAll();
        console.log(values);
        const rowsData = [
            {
                title: t("contact-details.name"),
                presentContent: values && values.length ? values.map((value) => value.name) : [],
                editContent: values && values.length ? values.map((value) => value.name) : []
            },
            {
                title: t("contact-details.role"),
                presentContent: values && values.length ? values.map((value) => value.role) : [],
                editContent: values && values.length ? values.map((value) => value.role) : []
            },
            {
                title: t("settings.emails"),
                presentContent: generateSubDataList(values, "email"),
                editContent: values && values.length ? values.map((value) => value.email) : []
            },
            {
                title: t("organization-details.phone"),
                presentContent: generateSubDataList(values, "phone"),
                editContent: fields.map((address, index) => {
                    return (
                        <Form.Group>
                            {generateSubDataList(values, "phone")}
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
        // const values = fields.getAll();
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
        // return (
        //     <>
        //         {fields.map((contact, index) => (
        //             <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
        //                 {editable && values[index].status === "editing" ? (
        //                     <>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Full Name"
        //                                     name={`${contact}.name`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                         <div>
        //                             <Dropdown
        //                                 className="auto"
        //                                 emptyLabel="Select role"
        //                                 model="roles"
        //                                 onChange={(e) => {
        //                                     this.saveLabel(e, index);
        //                                 }}
        //                                 name={`${contact}.role`}
        //                             />
        //                         </div>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Email"
        //                                     name={`${contact}.email`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Phone"
        //                                     name={`${contact}.phone`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                     </>
        //                 ) : (
        //                     <>
        //                         <div>{fields.getAll()[index].name}</div>
        //                         <div>{fields.getAll()[index].role_label}</div>
        //                         {this.props.meta.form === "updateOrganization" && fields.getAll()[index].email ? (
        //                             <CopyToClipboard>{fields.getAll()[index].email}</CopyToClipboard>
        //                         ) : (
        //                             <div>{fields.getAll()[index].email}</div>
        //                         )}
        //                         <div>{fields.getAll()[index].phone}</div>
        //                     </>
        //                 )}
        //                 <div className="actions">
        //                     {editable && (
        //                         <div>
        //                             <div>
        //                                 <i className="icon-trash" onClick={() => this.removeRow(index, values)}></i>
        //                             </div>
        //                             <div>
        //                                 {values[index].status !== "editing" && (
        //                                     <i className="icon-pencil" onClick={() => this.editRow(index)}></i>
        //                                 )}
        //                                 {values[index].status === "editing" && (
        //                                     <span className="ok-check" onClick={() => this.saveRow(index)}>
        //                                         <i className="icon-tick"></i>
        //                                         {t("actions.save")}
        //                                     </span>
        //                                 )}
        //                             </div>
        //                         </div>
        //                     )}
        //                 </div>
        //             </div>
        //         ))}
        //         {meta.error && <div>{meta.error}</div>}
        //         {editable && (
        //             <div>
        //                 <div></div>
        //                 <div></div>
        //                 <div></div>
        //                 <div></div>
        //                 <div className="col-actions">
        //                     <button type="button" className="btn link add mt-2" onClick={(e) => this.addRow(e)}>
        //                         {t("actions.add-new")}
        //                     </button>
        //                 </div>
        //             </div>
        //         )}
        //     </>
        // );
    }
}

export default withTranslation()(FieldArrayContactsOrganization);
