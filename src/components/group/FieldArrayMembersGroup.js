import React from "react";
import { withTranslation } from "react-i18next";

import { Form } from "react-bootstrap";
import FieldInput from "../FieldInput";
import { Field, change, touch } from "redux-form";
import uuidv4 from "uuid/v4";
import Dropdown from "../Dropdown";

import CopyToClipboard from "../CopyToClipboard";
import copy from "clipboard-copy";

// import { LIMIT_NEW_CONTACTS } from "../../config";

import DropdownSearch from "../DropdownSearch";

class FieldArrayMembersGroup extends React.Component {
    validateMember = (index) => {
        const errors = this.props.errors;
        const values = this.props.fields.getAll();
        const hasBlankFields =
            values[index].name === "" ||
            values[index].name === undefined ||
            (values[index].email === "" || values[index].email === undefined) ||
            (values[index].phone === "" || values[index].phone === undefined);
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    addRow = (event) => {
        // if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
        //     this.props.fields.push({ key: uuidv4(), status: "editing" });
        // }
        console.log("add new member");
    };

    // saveRow = (index) => {
    //     if (this.validateMember(index)) {
    //         this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "saved"));
    //     } else {
    //         this.props.dispatch(touch(this.props.meta.form, `members[${index}].name`));
    //         this.props.dispatch(touch(this.props.meta.form, `members[${index}].organization`));
    //         this.props.dispatch(touch(this.props.meta.form, `members[${index}].email`));
    //         this.props.dispatch(touch(this.props.meta.form, `members[${index}].phone`));
    //     }
    // };

    editRow = (index) => {
        this.props.dispatch(change(this.props.meta.form, `members[${index}].status`, "editing"));
    };

    removeRow = (index) => {
        const { fields } = this.props;
        const values = fields.getAll();
        if (values[index].origin === "store") {
            this.props.dispatch(change("updateGroup", `members[${index}].status`, "remove"));
        } else {
            this.props.fields.remove(index);
        }
    };

    saveLabel = (event, index) => {
        const organization_label = event.target.options[event.target.selectedIndex].text;
        this.props.dispatch(change(this.props.meta.form, `members[${index}].organization_label`, organization_label));
    };

    onChangeRole = (event, index) => {
        const { selectedIndex } = event.target.selectedIndex;
        let organization_label = "";
        if (selectedIndex !== 0) {
            organization_label = event.target.options[event.target.selectedIndex].text;
        }
        this.props.dispatch(change(this.props.meta.form, `members[${index}].organization_label`, organization_label));
    };

    copyAllEmails = () => {
        const emails = this.props.fields.getAll().map((member) => {
            return member.status === "saved" ? member.email.map(email=> email.name) : null;
        });
        copy(emails.flat().join(" "));
    }

    generateSubDataList = (field, keyName, secondaryKeyName) => {
        const result = field ? (
            <>
                <div className="form-internal-block--contact-in-organization__section__content__internal-list form-internal-block__section__content__internal-list">
                    {field[keyName].map((element, internalIndex) => {
                        const useClipToClipboardContainer = !!secondaryKeyName;
                        const child = (
                            <div
                                className={`form-internal-block--contact-in-organization__section__content__internal-list__element`}
                            >
                                <div className="form-internal-block--contact-in-organization__section__content__internal-list__element__main-text">
                                    {element.name}
                                </div>
                                <div className="form-internal-block--contact-in-organization__section__content__internal-list__element__secondary-text">
                                    {element[secondaryKeyName]}
                                </div>
                            </div>
                        );
                        let resultContainer;
                        if (useClipToClipboardContainer) {
                            resultContainer = (
                                <CopyToClipboard key={internalIndex} copyContent={element.name}>
                                    {child}
                                </CopyToClipboard>
                            );
                        } else {
                            resultContainer = <div key={internalIndex}>{child}</div>;
                        }
                        return resultContainer;
                    })}
                </div>
            </>
        ) : (
            <div></div>
        );
        return result;
    };
    renderEmailsHeader() {
        const { t } = this.props;
        return (
            <div className="contact-in-organization__header__title--with-cta">
                <span>{t("settings.emails")}</span>
                <button type="button" onClick={() => this.copyAllEmails()} className="btn outline btn-copy">
                    <span>{t("actions.copy-all")}</span>
                </button>
            </div>
        );
    }
    renderHeader() {
        const { t } = this.props;
        const headers = [
            t("contact-details.name"),
            t("community.sub-menu.organizations"),
            this.renderEmailsHeader(),
            t("organization-details.phone")
        ];
        return (
            <div className="contact-in-organization__header">
                {headers.map((title, index) => {
                    return (
                        <div key={index} className="contact-in-organization__header__title">
                            {title}
                        </div>
                    );
                })}
            </div>
        );
    }

    renderBody() {
        const { editable, fields } = this.props;
        const values = fields.getAll();
        return (
            <div className="contact-in-organization__body">
                {values &&
                    values.map((row, index) => {
                        return (
                            <div
                                key={index}
                                className={`contact-in-organization__body__row ${
                                    row.status === "remove" ? "d-none" : ""
                                }`}
                            >
                                <div className="contact-in-organization__body__row__element">{row.name}</div>
                                <div className="contact-in-organization__body__row__element">
                                    {this.generateSubDataList(row, "organization_label")}
                                </div>
                                <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                    {this.generateSubDataList(row, "email", "type")}
                                </div>
                                <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                    {this.generateSubDataList(row, "phone")}
                                </div>

                                {editable && (
                                    <div
                                        className="row-remove-cta row-remove-cta"
                                        onClick={() => this.removeRow(index)}
                                    ></div>
                                )}
                            </div>
                        );
                    })}
            </div>
        );
    }
    renderFooter() {
        const { t, editable } = this.props;
        return (
            <div className="contact-in-organization__footer">
                {editable && (
                    <>
                        <DropdownSearch
                            selection={this.props.handleContactSearch}
                            placeholder={t("search-filter.search-member")}
                        />
                        <button
                            type="button"
                            className="contact-in-organization__footer__add btn btn-add outline"
                            onClick={(e) => this.addRow(e)}
                        >
                            {t("actions.add-new")}
                        </button>
                    </>
                )}
            </div>
        );
    }

    render() {
        return (
            <div className="contact-in-organization">
                {this.renderHeader()}
                {this.renderBody()}
                {this.renderFooter()}
            </div>
        );
        // const { fields, meta, t, editable } = this.props;
        // const values = fields.getAll();
        // return (
        //     <>
        //         {fields.map((member, index) => (
        //             <div key={index} className={values[index].status === "remove" ? "d-none" : ""}>
        //                 {editable && values[index].status === "editing" ? (
        //                     <>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Full Name"
        //                                     name={`${member}.name`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                         <div>
        //                             <Dropdown
        //                                 className="auto"
        //                                 emptyLabel={t("organization-details.select-organization")}
        //                                 model="organization"
        //                                 onChange={(e) => {
        //                                     this.saveLabel(e, index);
        //                                 }}
        //                                 name={`${member}.organization`}
        //                             />
        //                         </div>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Email"
        //                                     name={`${member}.email`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                         <div>
        //                             <Form.Group>
        //                                 <Field
        //                                     type="text"
        //                                     component={FieldInput}
        //                                     placeholder="Phone"
        //                                     name={`${member}.phone`}
        //                                 />
        //                             </Form.Group>
        //                         </div>
        //                     </>
        //                 ) : (
        //                     <>
        //                         <div>{fields.getAll()[index].name}</div>
        //                         <div>{fields.getAll()[index].organization_label}</div>
        //                         {this.props.meta.form === "updateGroup" && fields.getAll()[index].email ? (
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
        //                                 <i className="icon-trash" onClick={() => this.removeRow(index)}></i>
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

export default withTranslation()(FieldArrayMembersGroup);
