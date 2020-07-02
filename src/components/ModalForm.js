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
import CreateCustomerFormContainer from '../containers/customer/CreateCustomerForm';
import CustomerDetailsContainer from '../containers/customer/CustomerDetails';
import CreateEndUserFormContainer from '../containers/endUser/CreateEndUserForm';
import EndUserDetailsContainer from '../containers/endUser/EndUserDetails';
import CreateProviderFormContainer from '../containers/provider/CreateProviderForm';
import ProviderDetailsContainer from '../containers/provider/ProviderDetails';
import CreateSiteOwnerFormContainer from '../containers/siteOwner/CreateSiteOwnerForm';
import SiteOwnerDetailsContainer from '../containers/siteOwner/SiteOwnerDetails';

import {
  CREATE_CONTACT_FORM,
  UPDATE_CONTACT_FORM,
  CREATE_PORT_FORM,
  UPDATE_PORT_FORM,
  CREATE_CABLE_FORM,
  UPDATE_CABLE_FORM,
  UPDATE_CUSTOMER_FORM,
  CREATE_CUSTOMER_FORM,
  UPDATE_ENDUSER_FORM,
  CREATE_ENDUSER_FORM,
  UPDATE_PROVIDER_FORM,
  CREATE_PROVIDER_FORM,
  UPDATE_SITEOWNER_FORM,
  CREATE_SITEOWNER_FORM,
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
      case 'Customer':
      case 'customers':
        entityData = {
          ComponentToRender: isUpdateForm ? CustomerDetailsContainer : CreateCustomerFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/customers' : 'network.details.new/customers',
          formId: isUpdateForm ? UPDATE_CUSTOMER_FORM : CREATE_CUSTOMER_FORM,
        };
        break;
      case 'EndUser':
      case 'endUsers':
        entityData = {
          ComponentToRender: isUpdateForm ? EndUserDetailsContainer : CreateEndUserFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/end-users' : 'network.details.new/end-users',
          formId: isUpdateForm ? UPDATE_ENDUSER_FORM : CREATE_ENDUSER_FORM,
        };
        break;
      case 'Provider':
      case 'providers':
        entityData = {
          ComponentToRender: isUpdateForm ? ProviderDetailsContainer : CreateProviderFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/providers' : 'network.details.new/providers',
          formId: isUpdateForm ? UPDATE_PROVIDER_FORM : CREATE_PROVIDER_FORM,
        };
        break;
      case 'SiteOwner':
      case 'siteOwners':
        entityData = {
          ComponentToRender: isUpdateForm ? SiteOwnerDetailsContainer : CreateSiteOwnerFormContainer,
          textHeader: isUpdateForm ? 'network.details.modify/site-owners' : 'network.details.new/site-owners',
          formId: isUpdateForm ? UPDATE_SITEOWNER_FORM : CREATE_SITEOWNER_FORM,
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
    const { t, isVisibleModalForm, isEditing } = this.props;
    const classModalTitle = isMobile ? 'd-flex flex-column align-items-start' : '';
    const classButtons = isMobile ? 'w-100 d-flex justify-content-end' : '';
    const { ComponentToRender, textHeader, formId } = this.getDataByEntity();
    return (
      <div>
        <Modal dialogClassName="new-contact-modal-form" show={isVisibleModalForm} onHide={() => this.handleClose()}>
          <Modal.Header closeButton={false}>
            <Modal.Title className={classModalTitle}>
              <div className="new-contact-modal-form__header__title">{t(textHeader)}</div>
              {isEditing && (
                <div className={`new-contact-modal-form__header__buttons ${classButtons}`}>
                  <SaveCancelCTAs
                    formId={`${formId}InModal`}
                    cancelText={t('actions.cancel')}
                    onCancel={() => this.handleClose()}
                  />
                </div>
              )}
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
