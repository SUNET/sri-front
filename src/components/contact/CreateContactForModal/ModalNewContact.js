import React from "react";
import { withTranslation } from "react-i18next";
import SaveCancelCTAs from "../../common/SaveCancelCTAs";

import { Modal } from "react-bootstrap";
import CreateContactFormContainer from "../../../containers/contact/CreateContactForm";

import "../../../style/ModalNewContact.scss";

class ModalNewContact extends React.Component {
    handleClose() {
        this.props.hideContactModal();
    }
    render() {
        const { t } = this.props;
        return (
            <div>
                <Modal
                    dialogClassName="new-contact-modal-form"
                    show={this.props.is_contact_form_visible}
                    onHide={() => this.handleClose()}
                >
                    <Modal.Header closeButton={false}>
                        <Modal.Title>
                            <div className="new-contact-modal-form__header__title">
                                {t("contact-details.add-new-contact")}
                            </div>
                            <div className="new-contact-modal-form__header__buttons">
                                <SaveCancelCTAs onCancel={() => this.handleClose()} />
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
