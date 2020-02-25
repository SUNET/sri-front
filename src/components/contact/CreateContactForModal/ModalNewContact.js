import React from "react";
import { withTranslation } from "react-i18next";
import SaveCancelCTAs from "../../common/SaveCancelCTAs";

import { Modal } from "react-bootstrap";
import CreateContactFormContainer from "../../../containers/contact/CreateContactForm";

import { CREATE_CONTACT_FORM } from "../../../utils/constants";

import "../../../style/ModalNewContact.scss";

// const
import { isBrowser, isMobile } from "react-device-detect";

class ModalNewContact extends React.Component {
    handleClose() {
        this.props.hideContactModal();
    }
    render() {
        const { t } = this.props;
        const classModalTitle = isMobile ? "d-flex flex-column align-items-start" : "";
        const classButtons = isMobile ? "w-100 d-flex justify-content-end" : "";
        return (
            <div>
                <Modal
                    dialogClassName="new-contact-modal-form"
                    show={this.props.is_contact_form_visible}
                    onHide={() => this.handleClose()}
                >
                    <Modal.Header closeButton={false}>
                        <Modal.Title className={classModalTitle}>
                            <div className="new-contact-modal-form__header__title">
                                {t("contact-details.add-new-contact")}
                            </div>
                            <div className={`new-contact-modal-form__header__buttons ${classButtons}`}>
                                <SaveCancelCTAs
                                    formId={CREATE_CONTACT_FORM}
                                    cancelText={t("actions.cancel")}
                                    onCancel={() => this.handleClose()}
                                />
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateContactFormContainer></CreateContactFormContainer>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default withTranslation()(ModalNewContact);
