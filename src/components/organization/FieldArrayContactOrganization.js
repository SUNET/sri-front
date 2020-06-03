import React from "react";
import { withTranslation } from "react-i18next";
import { change } from "redux-form";
import DropdownSearch from "../DropdownSearch";
import Dropdown from "../Dropdown";
import CopyToClipboard from "../CopyToClipboard";
import { Modal } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";

import "../../style/FieldArrayContacts.scss";

class FieldArrayContactsOrganization extends React.Component {
    state = {
        showModal: false, // DEFAULT: false
        selectedRowId: null // DEFAULT: null
    };

    // lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        const newRemovedContact = 
            !!nextProps.removedContactId && nextProps.removedContactId !== this.props.removedContactId;
        if (newRemovedContact) {
            this.props.removedContactDeletedFromTheList();
            this.removeRow(nextProps.removedContactId);
        }
        return !newRemovedContact;
    }

    // methods events
    onClickAccept() {
        // TODO: Validate before hide modal
        this.hideDataModal();
    }

    onChangeRole = (event, index) => {
        const { selectedIndex } = event.selectedIndex;
        let role_label = "";
        if (selectedIndex !== 0) {
            role_label = event.options[event.selectedIndex].text;
        }
        this.props.dispatch(change(this.props.meta.form, `contacts[${index}].role_label`, role_label));
    };

    // methods state
    showDataModal(id) {
        this.setState({
            showModal: true,
            selectedRowId: id
        });
    }

    hideDataModal() {
        this.setState({
            showModal: false,
            selectedRowId: null
        });
    }

    // methods getData
    getValueById(id) {
        const allValues = this.props.fields.getAll();
        const valueData = allValues.find((value) => value.id === id);
        const valueIndex = allValues.findIndex((value) => value.id === id);

        return {
            data: valueData,
            index: valueIndex
        };
    }

    // methods validation
    validateContact = (index) => {
        const errors = this.props.errors;
        const values = this.props.fields.getAll();
        const hasBlankFields =
            values[index].name === "" ||
            values[index].name === undefined ||
            values[index].role === "" ||
            values[index].role === undefined ||
            values[index].email === "" ||
            values[index].email === undefined ||
            values[index].phone === "" ||
            values[index].phone === undefined;
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    // methods rows
    newResultInSearch = (selection) => {
        if (!selection) {
            return;
        }
        const contactFound = this.getValueById(selection.id);
        if (contactFound.index > -1) {
            this.props.dispatch(change("updateOrganization", `contacts[${contactFound.index}].status`, "saved"));
        } else {
            this.props.handleContactSearch(selection);
        }
    };

    addRow = (event) => {
        this.props.handleAddContactRow();
    };

    removeRow = (id) => {
        const currentValue = this.getValueById(id);
        this.hideDataModal();
        if (currentValue.data.origin === "store") {
            this.props.dispatch(change("updateOrganization", `contacts[${currentValue.index}].status`, "remove"));
        } else {
            this.props.fields.remove(currentValue.index);
        }
    };

    saveLabel = (event, index) => {
        const role_label = event.target.options[event.target.selectedIndex].text;
        this.props.dispatch(change(this.props.meta.form, `contacts[${index}].role_label`, role_label));
    };

    generateSubDataList = (field, keyName, secondaryKeyName) => {
        const getSecondaryKeyName = (element, doubleKeyForObject) => {
            const keysArr = doubleKeyForObject.split(".");
            return element[keysArr[0]][keysArr[1]];
        };
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
                                    {secondaryKeyName ? getSecondaryKeyName(element, secondaryKeyName) : ""}
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
                            {this.renderInternalModalForm(this.state.selectedRowId)}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    renderInternalModalForm(fieldKey) {
        const { editable } = this.props;

        // const rowsData = this.getRowsData(fieldKey);
        return (
            <div className="form-internal-block form-internal-block--organizations-contacts">
                {this.renderInternalModalBody(fieldKey)}
                {editable && isMobile && this.renderMobileFooterModalButtons(fieldKey)}
            </div>
        );
    }

    renderInternalModalBody(id) {
        const { t, editable } = this.props;
        const dataValue = this.getValueById(id);
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
                        <div className="contact-in-organization__header__title">{t("contact-details.role")}</div>
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
                        <div className="contact-in-organization__header__title">{t("settings.emails")}</div>
                        {this.generateSubDataList(row, "email", "type.name")}
                    </div>
                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                        <div className="contact-in-organization__header__title">{t("organization-details.phone")}</div>
                        {this.generateSubDataList(row, "phone")}
                    </div>
                </div>
            </div>
        );
    }

    renderFormBlockSection = (editable, data, index) => {
        return <></>;
    };

    renderButtonsMobile(id) {
        return <></>;
    }

    renderMoreInfoButton(id) {
        const { t } = this.props;
        return (
            <button type="button" className="btn outline btn-add more-info" onClick={() => this.showDataModal(id)}>
                <span>{t("actions.info")}</span>
            </button>
        );
    }

    renderEditButton(id) {
        const { t } = this.props;
        return (
            <button
                type="button"
                className="btn outline btn-add more-info"
                onClick={() => this.props.handleShowContactDetail(id)}
            >
                <span>{t('actions.info')}</span>
            </button>
            // <button
            //         type="button"
            //         onClick={() => {
            //             this.props.handleShowContactDetail(id);
            //         }}
            //         className="btn outline btn-edit"
            // >
            //     <i className="icon-pencil"></i>
            //     <span>{t("actions.edit")}</span>
            // </button>
        );
    }

    renderRemoveCtaCrossAndEditButton(id, editable) {
        return (
            <div className={`contact-in-organization__body__buttons-in-the-final-row ${isBrowser ? "contact-in-organization__body__buttons-in-the-final-row--desktop-version" : ""}`}>
                {isBrowser && this.renderEditButton(id)}
                {editable && <div
                    className={`row-remove-cta ${isBrowser ? "row-remove-cta--desktop-version" : ""}`}
                    onClick={() => this.removeRow(id)}
                ></div>}
            </div>
        );
    }

    renderMobileFooterModalButtons(id) {
        return (
            <div className="d-flex justify-content-around">
                {this.renderAcceptModalButton()}
                {this.renderRemoveCtaButton(id)}
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

    renderRemoveCtaButton(id) {
        const { t } = this.props;
        return (
            <button
                type="button"
                className="btn outline btn-trash mt-3"
                onClick={() => {
                    this.hideDataModal();
                    this.removeRow(id);
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
                                {isMobile && (
                                    <div className="contact-in-organization__body__row__element info-button">
                                        {editable && this.renderEditButton(row.id)}
                                        {!editable && this.renderMoreInfoButton(row.id)}
                                    </div>
                                )}
                                {isBrowser && this.renderDropDownRole(row.role_label, index)}
                                {isBrowser && (
                                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                        {this.generateSubDataList(row, "email", "type.name")}
                                    </div>
                                )}
                                {isBrowser && (
                                    <div className="contact-in-organization__body__row__element contact-in-organization__body__row__element--ellipsis">
                                        {this.generateSubDataList(row, "phone")}
                                    </div>
                                )}
                                {this.renderRemoveCtaCrossAndEditButton(row.id, editable)}
                            </div>
                        );
                    })}
            </div>
        );
    }
    renderFooter() {
        const { t, editable, fields} = this.props;
        let existingElements = [];
        if (fields.getAll()) {
            existingElements = fields
                .getAll()
                .filter((el) => el.status === 'saved')
                .map((row) => row.id);
        }
        return (
            <div className="contact-in-organization__footer">
                {editable && (
                    <>
                        <DropdownSearch
                            model={'contacts'}
                            selection={this.newResultInSearch}
                            placeholder={t("search-filter.search-contacts")}
                            skipElements={existingElements}
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
    renderDropDownRole(role_label, index) {
        const { editable } = this.props;
        return (
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
                    role_label
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

export default withTranslation()(FieldArrayContactsOrganization);
