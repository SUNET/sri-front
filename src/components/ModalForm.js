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
import FirewallDetailsContainer from '../containers/firewall/FirewallDetails';
import CreateSwitchFormContainer from '../containers/switch/CreateSwitchForm';
import SwitchDetailsContainer from '../containers/switch/SwitchDetails';
import CreateExternalEquipmentFormContainer from '../containers/externalEquipment/CreateExternalEquipmentForm';
import ExternalEquipmentDetailsContainer from '../containers/externalEquipment/ExternalEquipmentDetails';

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
  UPDATE_FIREWALL_FORM,
  CREATE_FIREWALL_FORM,
  UPDATE_SWITCH_FORM,
  CREATE_SWITCH_FORM,
  UPDATE_EXTERNALEQUIPMENT_FORM,
  CREATE_EXTERNALEQUIPMENT_FORM,
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
          textHeader: isUpdateForm ? 'entity-modify/contacts' : 'entity-add-new/contacts',
          formId: isUpdateForm ? UPDATE_CONTACT_FORM : CREATE_CONTACT_FORM,
        };
        break;
      case 'Port':
      case 'ports':
        entityData = {
          ComponentToRender: isUpdateForm ? PortDetailsContainer : CreatePortFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/ports' : 'entity-add-new/ports',
          formId: isUpdateForm ? UPDATE_PORT_FORM : CREATE_PORT_FORM,
        };
        break;
      case 'Cable':
      case 'cables':
        entityData = {
          ComponentToRender: isUpdateForm ? CableDetailsContainer : CreateCableFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/cables' : 'entity-add-new/cables',
          formId: isUpdateForm ? UPDATE_CABLE_FORM : CREATE_CABLE_FORM,
        };
        break;
      case 'Customer':
      case 'customers':
        entityData = {
          ComponentToRender: isUpdateForm ? CustomerDetailsContainer : CreateCustomerFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/customers' : 'entity-add-new/customers',
          formId: isUpdateForm ? UPDATE_CUSTOMER_FORM : CREATE_CUSTOMER_FORM,
        };
        break;
      case 'EndUser':
      case 'endUsers':
        entityData = {
          ComponentToRender: isUpdateForm ? EndUserDetailsContainer : CreateEndUserFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/end-users' : 'entity-add-new/end-users',
          formId: isUpdateForm ? UPDATE_ENDUSER_FORM : CREATE_ENDUSER_FORM,
        };
        break;
      case 'Provider':
      case 'providers':
        entityData = {
          ComponentToRender: isUpdateForm ? ProviderDetailsContainer : CreateProviderFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/providers' : 'entity-add-new/providers',
          formId: isUpdateForm ? UPDATE_PROVIDER_FORM : CREATE_PROVIDER_FORM,
        };
        break;
      case 'SiteOwner':
      case 'siteOwners':
        entityData = {
          ComponentToRender: isUpdateForm ? SiteOwnerDetailsContainer : CreateSiteOwnerFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/site-owners' : 'entity-add-new/site-owners',
          formId: isUpdateForm ? UPDATE_SITEOWNER_FORM : CREATE_SITEOWNER_FORM,
        };
        break;
      case 'Firewall':
      case 'firewalls':
        entityData = {
          ComponentToRender: isUpdateForm ? FirewallDetailsContainer : null,
          textHeader: isUpdateForm ? 'entity-modify/firewalls' : 'entity-add-new/firewalls',
          formId: isUpdateForm ? UPDATE_FIREWALL_FORM : CREATE_FIREWALL_FORM,
        };
        break;
      case 'Switch':
      case 'switchs':
        entityData = {
          ComponentToRender: isUpdateForm ? SwitchDetailsContainer : CreateSwitchFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/switches' : 'entity-add-new/switches',
          formId: isUpdateForm ? UPDATE_SWITCH_FORM : CREATE_SWITCH_FORM,
        };
        break;
      case 'ExternalEquipment':
      case 'externalEquipments':
        entityData = {
          ComponentToRender: isUpdateForm ? ExternalEquipmentDetailsContainer : CreateExternalEquipmentFormContainer,
          textHeader: isUpdateForm
            ? 'entity-modify/externalEquipments'
            : 'entity-add-new/external-equipments',
          formId: isUpdateForm ? UPDATE_EXTERNALEQUIPMENT_FORM : CREATE_EXTERNALEQUIPMENT_FORM,
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
                    cancelText={t('actions/cancel')}
                    onCancel={() => this.handleClose()}
                  />
                </div>
              )}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {ComponentToRender && <ComponentToRender isFromModal t={t} />}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withTranslation()(ModalNewContact);
