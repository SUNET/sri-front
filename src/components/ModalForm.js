import React from 'react';
import { withTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Modal } from 'react-bootstrap';
import SaveCancelCTAs from './common/SaveCancelCTAs';
import CreateContactFormContainer from '../containers/contact/CreateContactForm';
import ContactDetailsContainer from '../containers/contact/ContactDetails';
import CreatePortFormContainer from '../containers/port/CreatePortForm';
import PortDetailsContainer from '../containers/port/PortDetails';
import CreateCableFormContainer from '../containers/cable/CreateCableForm';
import CableDetailsContainer from '../containers/cable/CableDetails';
import {
  CREATE_CONTACT_FORM,
  UPDATE_CONTACT_FORM,
  CREATE_PORT_FORM,
  UPDATE_PORT_FORM,
  CREATE_CABLE_FORM,
  UPDATE_CABLE_FORM,
} from '../utils/constants';
import '../style/ModalNewContact.scss';

class ModalNewContact extends React.Component {
  getDataByEntity() {
    const { isVisibleModalForm, entityInModalId, entityName } = this.props;
    const isUpdateForm = isVisibleModalForm && entityInModalId;
    let entityData = {
      ComponentToRender: () => <></>,
      textHeader: '',
      formId: '',
    };
    switch (entityName) {
      case 'Contact':
        entityData = {
          ComponentToRender: isUpdateForm ? ContactDetailsContainer : CreateContactFormContainer,
          textHeader: isUpdateForm ? 'contact-details.modify-contact' : 'contact-details.add-new-contact',
          formId: isUpdateForm ? UPDATE_CONTACT_FORM : CREATE_CONTACT_FORM,
        };
        break;
      case 'Port':
      case 'ports':
        entityData = {
          ComponentToRender: isUpdateForm ? PortDetailsContainer : CreatePortFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/ports' : 'network.details.new/ports',
          formId: isUpdateForm ? UPDATE_PORT_FORM : CREATE_PORT_FORM,
        };
        break;
      case 'Cable':
      case 'cables':
        entityData = {
          ComponentToRender: isUpdateForm ? CableDetailsContainer : CreateCableFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/cables' : 'network.details.new/cables',
          formId: isUpdateForm ? UPDATE_CABLE_FORM : CREATE_CABLE_FORM,
        };
        break;

      default:
        break;
    }
    return entityData;
  }

  handleClose() {
    const { hideModalForm } = this.props;
    hideModalForm();
  }

  render() {
    const { t, isVisibleModalForm } = this.props;
    const classModalTitle = isMobile ? 'd-flex flex-column align-items-start' : '';
    const classButtons = isMobile ? 'w-100 d-flex justify-content-end' : '';
    const { ComponentToRender, textHeader, formId } = this.getDataByEntity();
    return (
      <div>
        <Modal dialogClassName="new-contact-modal-form" show={isVisibleModalForm} onHide={() => this.handleClose()}>
          <Modal.Header closeButton={false}>
            <Modal.Title className={classModalTitle}>
              <div className="new-contact-modal-form__header__title">{t(textHeader)}</div>
              <div className={`new-contact-modal-form__header__buttons ${classButtons}`}>
                <SaveCancelCTAs formId={`${formId}InModal`} cancelText={t('actions.cancel')} onCancel={() => this.handleClose()} />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ComponentToRender isFromModal />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withTranslation()(ModalNewContact);
