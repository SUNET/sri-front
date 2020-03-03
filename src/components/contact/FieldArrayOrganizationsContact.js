import React from "react";
import { Form } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { Field, change } from "redux-form";
import uuidv4 from "uuid/v4";

import FieldInput from "../FieldInput";
import { getOrganization } from "../organization/Organization";
import Dropdown from "../Dropdown";
import { LIMIT_NEW_CONTACTS } from "../../config";
import { Modal } from "react-bootstrap";
import { isBrowser, isMobile } from "react-device-detect";

import "../../style/InternalModal.scss";

class FieldArrayOrganizationsContact extends React.Component {
    state = {
        showModal: false, // DEFAULT: false
        selectedRowKey: null // DEFAULT: null
    };

    // lifecycle
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        const newFields = nextProps.fields.getAll();
        if (newFields && newFields.length && nextProps.editable) {
            newFields.forEach((field, index) => {
                const validated = this.validateOrganization(field, index);
                if (field && field.status === "editing" && validated) {
                    this.props.dispatch(change(this.props.meta.form, `organizations[${index}].status`, "saved"));
                } else if (!validated && field.status === "saved") {
                    nextProps.dispatch(change(nextProps.meta.form, `organizations[${index}].status`, "editing"));
                }
            });
        }
    }
    // methods onClick
    onClickAccept() {
        // TODO: Validate before hide modal
        this.hideDataModal();
    }
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
    getRowsData(selectedRowKey) {
        const { fields, t } = this.props;

        let valuesToShow, indexForThisFieldKey;

        if (selectedRowKey !== undefined) {
            const currentValue = this.getValueByKey(selectedRowKey);
            valuesToShow = [currentValue.data];
            indexForThisFieldKey = currentValue.index;
        } else {
            valuesToShow = fields.getAll() || [];
        }

        return [
            {
                title: "Role",
                presentContent:
                    valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.role_label) : [],
                editContent: valuesToShow.map((member, index) => {
                    return {
                        element: (
                            <Dropdown
                                className="auto"
                                emptyLabel="Select role"
                                model="roles"
                                onChange={(e) => {
                                    this.saveLabel(e, member.key);
                                }}
                                name={`organizations[${selectedRowKey ? indexForThisFieldKey : index}].role`}
                            />
                        ),
                        status: member.status
                    };
                })
            },
            {
                title: "Organization ID",
                presentContent:
                    valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.organization_id) : [],
                editContent: valuesToShow.map((member, index) => {
                    return {
                        element: (
                            <Form.Group>
                                <Field
                                    type="text"
                                    disabled
                                    component={FieldInput}
                                    placeholder="Type ID"
                                    name={`organizations[${
                                        selectedRowKey ? indexForThisFieldKey : index
                                    }].organization_id`}
                                />
                            </Form.Group>
                        ),
                        status: member.status
                    };
                })
            },
            {
                title: "Organization",
                presentContent:
                    valuesToShow && valuesToShow.length ? valuesToShow.map((value) => value.organization_label) : [],
                editContent: valuesToShow.map((member, index) => {
                    return {
                        element: (
                            <>
                                <Form.Group>
                                    <Dropdown
                                        className={`${isBrowser ? "auto" : "w-100"}`}
                                        emptyLabel={t("organization-details.select-organization")}
                                        model="organization"
                                        onChange={(e) => {
                                            this.saveLabel(e, member.key);
                                        }}
                                        name={`organizations[${
                                            selectedRowKey ? indexForThisFieldKey : index
                                        }].organization`}
                                    />
                                </Form.Group>
                                {isBrowser && this.renderRemoveCtaCross(member.key)}
                                {isMobile && this.renderMobileFooterModalButtons(member.key)}
                            </>
                        ),
                        status: member.status
                    };
                })
            }
        ];
    }

    getRowsMobileData() {
        const { fields, t } = this.props;
        const valuesToShow = fields.getAll() || [];
        const editContent = valuesToShow.map((member, index) => {
            return {
                element: (
                    <div className="d-flex">
                        <Dropdown
                            className=""
                            emptyLabel="Select role"
                            model="roles"
                            onChange={(e) => {
                                this.saveLabel(e, member.key);
                            }}
                            name={`organizations[${index}].role`}
                        />
                        {this.renderButtonsMobile(member.key)}
                    </div>
                ),
                status: member.status
            };
        });

        const presentContent =
            valuesToShow &&
            valuesToShow.map((value, index) => {
                return (
                    <div className="d-flex align-items-center justify-content-between">
                        <span className="mr-3">{value.role_label}</span>
                        {this.renderMoreInfoButton(value.key)}
                    </div>
                );
            });

        return [
            {
                title: t("contact-details.role"),
                presentContent,
                editContent
            }
        ];
    }

    // methods validation
    validateOrganization = (field, index) => {
        const errors = this.props.errors;
        const hasBlankFields = field.organization === "" || field.organization === undefined;
        return (errors && errors[index] === undefined) || (errors === undefined && !hasBlankFields);
    };

    // methods rows
    addRow = (event) => {
        if (this.props.fields.length < LIMIT_NEW_CONTACTS) {
            const key = uuidv4();
            this.props.fields.push({ key, status: "editing" });
            if (isMobile) {
                this.showDataModal(key);
            }
        }
    };

    removeRow = (key) => {
        const currentValue = this.getValueByKey(key);

        this.hideDataModal();
        if (currentValue.data.origin === "store") {
            this.props.dispatch(change("updateContact", `organizations[${currentValue.index}].status`, "remove"));
        } else {
            this.props.fields.remove(currentValue.index);
        }
    };

    saveLabel = (event, key) => {
        const indexForThisFieldKey = this.getValueByKey(key).index;
        const input_label = event.target.options[event.target.selectedIndex].text;
        const input_name = event.target.name.split(".")[1];
        this.props.dispatch(
            change(this.props.meta.form, `organizations[${indexForThisFieldKey}].${input_name}_label`, input_label)
        );

        if (input_name === "organization") {
            getOrganization(event.target.value).then((organization) => {
                if (organization) {
                    this.props.dispatch(
                        change(
                            this.props.meta.form,
                            `organizations[${indexForThisFieldKey}].organization_id`,
                            organization.organization_id
                        )
                    );
                }
            });
        }
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

        const rowsData = this.getRowsData(fieldKey);
        return (
            <div className="form-internal-block form-internal-block--organizations-contacts">
                {rowsData.map((value, index) => {
                    return this.renderFormBlockSection(editable, value, index);
                })}
            </div>
        );
    }

    renderFormBlockSection = (editable, data, index) => {
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

                {data.editContent.map((content, contentIndex) => (
                    <div
                        key={`${contentIndex} - ${index}`}
                        className={`form-internal-block--organizations-contacts__section__content form-internal-block__section__content 
                        ${
                            editable
                                ? "form-internal-block--organizations-contacts__section__content--edition-mode form-internal-block__section__content--edition-mode"
                                : ""
                        }
                        ${editable && content.status === "remove" ? "d-none" : ""}`}
                    >
                        {isPresentState ? data.presentContent[contentIndex] : data.editContent[contentIndex].element}
                    </div>
                ))}
            </div>
        );
    };

    renderButtonsMobile(key) {
        return (
            <div className="d-flex ml-5 align-items-center">
                {this.renderMoreInfoButton(key)}
                {this.renderRemoveCtaCross(key)}
            </div>
        );
    }

    renderMoreInfoButton(key) {
        const { t } = this.props;
        return (
            <button
                type="button"
                className="btn outline btn-add more-info  mr-3"
                onClick={() => this.showDataModal(key)}
            >
                <span>{t("actions.info")}</span>
            </button>
        );
    }

    renderRemoveCtaCross(key) {
        return (
            <div
                className={`row-remove-cta ${isBrowser ? "row-remove-cta--desktop-version" : ""}`}
                onClick={() => this.removeRow(key)}
            ></div>
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

    renderRowsData() {
        const { editable } = this.props;
        const rowsData = this.getRowsData();
        const rowsDataMobile = this.getRowsMobileData();

        const dataToShow = isMobile ? rowsDataMobile : rowsData;
        return (
            <div className="form-internal-block form-internal-block--organizations-contacts">
                {dataToShow.map((data, index) => {
                    return this.renderFormBlockSection(editable, data, index);
                })}
            </div>
        );
    }

    render() {
        const { meta, t, editable } = this.props;
        return (
            <div className="organizations-contacts">
                {this.renderRowsData()}
                {meta.error && <div>{meta.error}</div>}
                {editable && (
                    <button type="button" className="btn btn-add outline" onClick={(e) => this.addRow(e)}>
                        {t("actions.add-new")}
                    </button>
                )}
                {this.state.showModal && this.renderModal()}
            </div>
        );
    }
}

export default withTranslation()(FieldArrayOrganizationsContact);
