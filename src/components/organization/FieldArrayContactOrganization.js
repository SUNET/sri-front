import React from "react";
import { withTranslation } from "react-i18next";
import { change } from "redux-form";
import DropdownSearch from "../DropdownSearch";
import Dropdown from "../Dropdown";
import CopyToClipboard from "../CopyToClipboard";

class FieldArrayContactsOrganization extends React.Component {
    validateContact = (index) => {
        const errors = this.props.errors;
        const values = this.props.fields.getAll();
        const hasBlankFields =
            values[index].name === "" ||
            values[index].name === undefined ||
            values[index].role === "" || values[index].role === undefined ||
            values[index].email === "" || values[index].email === undefined ||
            values[index].phone === "" || values[index].phone === undefined;
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    addRow = (event) => {
        this.props.handleAddContactRow();
    };

    removeRow = (index) => {
        const { fields } = this.props;
        const values = fields.getAll();
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

    onChangeRole = (event, index) => {
        const { selectedIndex } = event.target.selectedIndex;
        let role_label = "";
        if (selectedIndex !== 0) {
            role_label = event.target.options[event.target.selectedIndex].text;
        }
        this.props.dispatch(change(this.props.meta.form, `contacts[${index}].role_label`, role_label));
    };

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

    renderHeader() {
        const { t } = this.props;
        const headers = [
            t("contact-details.name"),
            t("contact-details.role"),
            t("settings.emails"),
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
                                    {editable ? (
                                        <Dropdown
                                            className="auto"
                                            emptyLabel="Select role"
                                            model="roles"
                                            onChange={(e) => {
                                                this.onChangeRole(e, index);
                                            }}
                                            name={`contacts[${index}].role`}
                                        />
                                    ) : (
                                        row.role_label
                                    )}
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
                            placeholder={t("search-filter.search-contact")}
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
    }
}

export default withTranslation()(FieldArrayContactsOrganization);
