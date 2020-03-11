import React from "react";
import { withTranslation } from "react-i18next";
import { change } from "redux-form";
import CopyToClipboard from "../CopyToClipboard";
import copy from "clipboard-copy";
import { Modal } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";
// import CONFIG from "../../config";

import DropdownSearch from "../DropdownSearch";

class FieldArrayMembersGroup extends React.Component {
    state = {
        showModal: false, // DEFAULT: false
        selectedRowKey: null // DEFAULT: null
    };

    // lifecycle

    // methods events
    onClickAccept() {
        // TODO: Validate before hide modal
        this.hideDataModal();
    }
    onChangeRole = (event, index) => {
        const { selectedIndex } = event.target.selectedIndex;
        let organization_label = "";
        if (selectedIndex !== 0) {
            organization_label = event.target.options[event.target.selectedIndex].text;
        }
        this.props.dispatch(change(this.props.meta.form, `members[${index}].organization_label`, organization_label));
    };

    // methods state
    showDataModal(key) {
        this.setState({
            showModal: true,
            selectedRowKey: key
        });
    }

    hideDataModal() {
        this.setState({
            showModal: false,
            selectedRowKey: null
        });
    }
    // methods getData
    getValueByKey(key) {
        const allValues = this.props.fields.getAll();
        const valueData = allValues.find((value) => value.key === key);
        const valueIndex = allValues.findIndex((value) => value.key === key);

        return {
            data: valueData,
            index: valueIndex
        };
    }
    // methods validation
    validateMember = (index) => {
        const errors = this.props.errors;
        const values = this.props.fields.getAll();
        const hasBlankFields =
            values[index].name === "" ||
            values[index].name === undefined ||
            values[index].email === "" ||
            values[index].email === undefined ||
            values[index].phone === "" ||
            values[index].phone === undefined;
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    // methods rows
    addRow = (event) => {
        this.props.handleAddContactRow();
    };

    removeRow = (key) => {
        const currentValue = this.getValueByKey(key);
        this.hideDataModal();
        if (currentValue.data.origin === "store") {
            this.props.dispatch(change(this.props.meta.form, `members[${currentValue.index}].status`, "remove"));
        } else {
            this.props.fields.remove(currentValue.index);
        }
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

    getAllEmailsFromAllContacts = () => {
        const values = this.props.fields.getAll();
        let result = [];
        if (values) {
            result = values.map((member) => {
                return member.status === "saved" ? member.email.map((email) => email.name) : null;
            });
        }
        return result;
    };

    copyAllEmails = () => {
        const emails = this.getAllEmailsFromAllContacts();
        copy(emails.flat().join(" "));
    };

    // common Renders
    renderModal() {
        const { t } = this.props;
        return (
            <Modal
                centered
                dialogClassName="internal-modal role-organization"
                show={this.state.showModal}
                onHide={() => this.setState({ showModal: false })}
            >
                <Modal.Header closeButton={true}>
                    <h2>{t("contact-details.professional-details")}</h2>
                </Modal.Header>
                <Modal.Body className="organizations-contacts">
                    <div className="model-details">
                        <div className="model-section model-section--in-modal">
                            {this.renderInternalModalForm(this.state.selectedRowKey)}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    renderInternalModalForm(fieldKey) {
        const { editable } = this.props;
        return (
            <div className="form-internal-block form-internal-block--organizations-contacts">
                {this.renderInternalModalBody(fieldKey)}
                {editable && isMobile && this.renderMobileFooterModalButtons(fieldKey)}
            </div>
        );
    }

    renderInternalModalBody(key) {
        const { t } = this.props;
        const dataValue = this.getValueByKey(key);
        const row = dataValue.data;
        const index = dataValue.index;
        const flexClassesToMobileStructure = "d-flex align-items-start flex-column";
        return (
            <div className="contact-in-organization__body">
                <div
                    key={index}
                    className={`${flexClassesToMobileStructure} contact-in-organization__body__row ${
                        row.status === "remove" ? "d-none" : ""
                    }`}
                >
                    <div className="contact-in-organization__body__row__element">
                        <div className="contact-in-organization__header__title">{t("contact-details.name")}</div>
                        {row.name}
                    </div>
                    <div className="contact-in-organization__body__row__element">
                        <div className="contact-in-organization__header__title">
                            {t("community.sub-menu.organizations")}
                        </div>
                        {this.generateSubDataList(row, "organization_label")}
                    </div>
                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                        <div className="contact-in-organization__header__title">{t("settings.emails")}</div>
                        {this.generateSubDataList(row, "email", "type")}
                    </div>
                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                        <div className="contact-in-organization__header__title">{t("organization-details.phone")}</div>
                        {this.generateSubDataList(row, "phone")}
                    </div>
                </div>
            </div>
        );
    }

    renderMoreInfoButton(key) {
        const { t } = this.props;
        return (
            <button type="button" className="btn outline btn-add more-info" onClick={() => this.showDataModal(key)}>
                <span>{t("actions.info")}</span>
            </button>
        );
    }

    renderRemoveCtaCross(key) {
        return (
            <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--right">
                <div className="row-remove-cta" onClick={() => this.removeRow(key)}></div>
            </div>
        );
    }

    renderMobileFooterModalButtons(key) {
        return (
            <div className="d-flex justify-content-around">
                {this.renderAcceptModalButton()}
                {this.renderRemoveCtaButton(key)}
            </div>
        );
    }

    renderAcceptModalButton() {
        const { t } = this.props;
        return (
            <button
                type="button"
                className="btn outline check mt-3"
                onClick={() => {
                    this.onClickAccept();
                }}
            >
                <span> {t("actions.accept")}</span>
            </button>
        );
    }

    renderRemoveCtaButton(key) {
        const { t } = this.props;
        return (
            <button
                type="button"
                className="btn outline btn-trash mt-3"
                onClick={() => {
                    this.hideDataModal();
                    this.removeRow(key);
                }}
            >
                <span> {t("actions.delete")}</span>
            </button>
        );
    }

    renderHeader() {
        const { t } = this.props;
        const headers = isMobile
            ? [t("contact-details.name")]
            : [
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
                                {isMobile && (
                                    <div className="contact-in-organization__body__row__element info-button">
                                        {this.renderMoreInfoButton(row.key)}
                                    </div>
                                )}
                                {isBrowser && (
                                    <div className="contact-in-organization__body__row__element">
                                        {this.generateSubDataList(row, "organization_label")}
                                    </div>
                                )}
                                {isBrowser && (
                                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                        {this.generateSubDataList(row, "email", "type")}
                                    </div>
                                )}
                                {isBrowser && (
                                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                        {this.generateSubDataList(row, "phone")}
                                    </div>
                                )}

                                {editable && this.renderRemoveCtaCross(row.key)}
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

    // specific renders
    renderEmailsHeader() {
        const { t } = this.props;
        return (
            <div className="contact-in-organization__header__title--with-cta">
                <span>{t("settings.emails")}</span>
                {this.getAllEmailsFromAllContacts().length > 0 && (
                    <button type="button" onClick={() => this.copyAllEmails()} className="btn outline btn-copy">
                        <span>{t("actions.copy-all")}</span>
                    </button>
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
                {this.state.showModal && this.renderModal()}
            </div>
        );
    }
}

export default withTranslation()(FieldArrayMembersGroup);
