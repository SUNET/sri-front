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
import CreateHostFormContainer from '../containers/host/CreateHostForm';
import HostDetailsContainer from '../containers/host/HostDetails';
import FirewallDetailsContainer from '../containers/firewall/FirewallDetails';
import CreateSwitchFormContainer from '../containers/switch/CreateSwitchForm';
import SwitchDetailsContainer from '../containers/switch/SwitchDetails';
import CreateExternalEquipmentFormContainer from '../containers/externalEquipment/CreateExternalEquipmentForm';
import ExternalEquipmentDetailsContainer from '../containers/externalEquipment/ExternalEquipmentDetails';
// import CreateRouterFormContainer from '../containers/router/CreateRouterForm';
import RouterDetailsContainer from '../containers/router/RouterDetails';
import CreateODFFormContainer from '../containers/ODF/CreateODFForm';
import ODFDetailsContainer from '../containers/ODF/ODFDetails';
import CreateOpticalFilterFormContainer from '../containers/opticalFilter/CreateOpticalFilterForm';
import OpticalFilterDetailsContainer from '../containers/opticalFilter/OpticalFilterDetails';
import CreateOpticalNodeFormContainer from '../containers/opticalNode/CreateOpticalNodeForm';
import OpticalNodeDetailsContainer from '../containers/opticalNode/OpticalNodeDetails';
import PeeringGroupDetailsContainer from '../containers/peeringGroup/PeeringGroupDetails';

import CreateOpticalLinkFormContainer from '../containers/opticalLink/CreateOpticalLinkForm';
import OpticalLinkDetailsContainer from '../containers/opticalLink/OpticalLinkDetails';

import CreateOpticalPathFormContainer from '../containers/opticalPath/CreateOpticalPathForm';
import OpticalPathDetailsContainer from '../containers/opticalPath/OpticalPathDetails';

import CreateOpticalMultiplexSectionFormContainer from '../containers/opticalMultiplexSection/CreateOpticalMultiplexSectionForm';
import OpticalMultiplexSectionDetailsContainer from '../containers/opticalMultiplexSection/OpticalMultiplexSectionDetails';

import CreateServiceFormContainer from '../containers/service/CreateServiceForm';
import ServiceDetailsContainer from '../containers/service/ServiceDetails';

import CreateSiteFormContainer from '../containers/site/CreateSiteForm';
import SiteDetailsContainer from '../containers/site/SiteDetails';

import CreateRoomFormContainer from '../containers/room/CreateRoomForm';
import RoomDetailsContainer from '../containers/room/RoomDetails';

import CreateRackFormContainer from '../containers/rack/CreateRackForm';
import RackDetailsContainer from '../containers/rack/RackDetails';

import {
  CREATE_CONTACT_FORM,
  UPDATE_CONTACT_FORM,
  CREATE_PORT_FORM,
  UPDATE_PORT_FORM,
  CREATE_CABLE_FORM,
  UPDATE_CABLE_FORM,
  CREATE_CUSTOMER_FORM,
  UPDATE_CUSTOMER_FORM,
  CREATE_ENDUSER_FORM,
  UPDATE_ENDUSER_FORM,
  CREATE_PROVIDER_FORM,
  UPDATE_PROVIDER_FORM,
  CREATE_SITEOWNER_FORM,
  UPDATE_SITEOWNER_FORM,
  CREATE_HOST_FORM,
  UPDATE_HOST_FORM,
  CREATE_FIREWALL_FORM,
  UPDATE_FIREWALL_FORM,
  CREATE_SWITCH_FORM,
  UPDATE_SWITCH_FORM,
  CREATE_EXTERNALEQUIPMENT_FORM,
  UPDATE_EXTERNALEQUIPMENT_FORM,
  CREATE_ROUTER_FORM,
  UPDATE_ROUTER_FORM,
  CREATE_ODF_FORM,
  UPDATE_ODF_FORM,
  CREATE_OPTICALFILTER_FORM,
  UPDATE_OPTICALFILTER_FORM,
  CREATE_OPTICALNODE_FORM,
  UPDATE_OPTICALNODE_FORM,
  CREATE_PEERINGGROUP_FORM,
  UPDATE_PEERINGGROUP_FORM,
  UPDATE_OPTICALLINK_FORM,
  CREATE_OPTICALLINK_FORM,
  UPDATE_OPTICALPATH_FORM,
  CREATE_OPTICALPATH_FORM,
  CREATE_OPTICALMULTIPLEXSECTION_FORM,
  UPDATE_OPTICALMULTIPLEXSECTION_FORM,
  CREATE_SERVICE_FORM,
  UPDATE_SERVICE_FORM,
  CREATE_SITE_FORM,
  UPDATE_SITE_FORM,
  CREATE_ROOM_FORM,
  UPDATE_ROOM_FORM,
  CREATE_RACK_FORM,
  UPDATE_RACK_FORM,
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
          textHeader: isUpdateForm ? 'entity-modify/external-equipments' : 'entity-add-new/external-equipments',
          formId: isUpdateForm ? UPDATE_EXTERNALEQUIPMENT_FORM : CREATE_EXTERNALEQUIPMENT_FORM,
        };
        break;
      case 'odfs':
      case 'ODF':
        entityData = {
          ComponentToRender: isUpdateForm ? ODFDetailsContainer : CreateODFFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/odfs' : 'entity-add-new/odfs',
          formId: isUpdateForm ? UPDATE_ODF_FORM : CREATE_ODF_FORM,
        };
        break;
      case 'routers':
      case 'Router':
        entityData = {
          ComponentToRender: isUpdateForm ? RouterDetailsContainer : null,
          textHeader: isUpdateForm ? 'entity-modify/routers' : 'entity-add-new/routers',
          formId: isUpdateForm ? UPDATE_ROUTER_FORM : CREATE_ROUTER_FORM,
        };
        break;
      case 'opticalNodes':
      case 'OpticalNode':
        entityData = {
          ComponentToRender: isUpdateForm ? OpticalNodeDetailsContainer : CreateOpticalNodeFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/optical-nodes' : 'entity-add-new/optical-nodes',
          formId: isUpdateForm ? UPDATE_OPTICALNODE_FORM : CREATE_OPTICALNODE_FORM,
        };
        break;
      case 'opticalFilters':
      case 'OpticalFilter':
        entityData = {
          ComponentToRender: isUpdateForm ? OpticalFilterDetailsContainer : CreateOpticalFilterFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/optical-filters' : 'entity-add-new/optical-filters',
          formId: isUpdateForm ? UPDATE_OPTICALFILTER_FORM : CREATE_OPTICALFILTER_FORM,
        };
        break;
      case 'hosts':
      case 'Host':
        entityData = {
          ComponentToRender: isUpdateForm ? HostDetailsContainer : CreateHostFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/hosts' : 'entity-add-new/hosts',
          formId: isUpdateForm ? UPDATE_HOST_FORM : CREATE_HOST_FORM,
        };
        break;
      case 'peeringGroups':
      case 'PeeringGroup':
        entityData = {
          ComponentToRender: isUpdateForm ? PeeringGroupDetailsContainer : null,
          textHeader: isUpdateForm ? 'entity-modify/peering-groups' : 'entity-add-new/peering-groups',
          formId: isUpdateForm ? UPDATE_PEERINGGROUP_FORM : CREATE_PEERINGGROUP_FORM,
        };
        break;
      case 'opticalLinks':
      case 'OpticalLink':
        entityData = {
          ComponentToRender: isUpdateForm ? OpticalLinkDetailsContainer : CreateOpticalLinkFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/optical-links' : 'entity-add-new/optical-links',
          formId: isUpdateForm ? UPDATE_OPTICALLINK_FORM : CREATE_OPTICALLINK_FORM,
        };
        break;
      case 'opticalPaths':
      case 'OpticalPath':
        entityData = {
          ComponentToRender: isUpdateForm ? OpticalPathDetailsContainer : CreateOpticalPathFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/optical-paths' : 'entity-add-new/optical-paths',
          formId: isUpdateForm ? UPDATE_OPTICALPATH_FORM : CREATE_OPTICALPATH_FORM,
        };
        break;
      case 'opticalMultiplexSections':
      case 'OpticalMultiplexSection':
        entityData = {
          ComponentToRender: isUpdateForm
            ? OpticalMultiplexSectionDetailsContainer
            : CreateOpticalMultiplexSectionFormContainer,
          textHeader: isUpdateForm
            ? 'entity-modify/optical-multiplex-sections'
            : 'entity-add-new/optical-multiplex-sections',
          formId: isUpdateForm ? UPDATE_OPTICALMULTIPLEXSECTION_FORM : CREATE_OPTICALMULTIPLEXSECTION_FORM,
        };
        break;
      case 'services':
      case 'Service':
        entityData = {
          ComponentToRender: isUpdateForm ? ServiceDetailsContainer : CreateServiceFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/services' : 'entity-add-new/services',
          formId: isUpdateForm ? UPDATE_SERVICE_FORM : CREATE_SERVICE_FORM,
        };
        break;

      case 'sites':
      case 'Site':
        entityData = {
          ComponentToRender: isUpdateForm ? SiteDetailsContainer : CreateSiteFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/location-sites' : 'entity-add-new/location-sites',
          formId: isUpdateForm ? UPDATE_SITE_FORM : CREATE_SITE_FORM,
        };
        break;

      case 'rooms':
      case 'Room':
        entityData = {
          ComponentToRender: isUpdateForm ? RoomDetailsContainer : CreateRoomFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/location-rooms' : 'entity-add-new/location-rooms',
          formId: isUpdateForm ? UPDATE_ROOM_FORM : CREATE_ROOM_FORM,
        };
        break;

      case 'racks':
      case 'Rack':
        entityData = {
          ComponentToRender: isUpdateForm ? RackDetailsContainer : CreateRackFormContainer,
          textHeader: isUpdateForm ? 'entity-modify/location-racks' : 'entity-add-new/location-racks',
          formId: isUpdateForm ? UPDATE_RACK_FORM : CREATE_RACK_FORM,
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
        {ComponentToRender && (
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
            <Modal.Body>{ComponentToRender && <ComponentToRender isFromModal t={t} />}</Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
}

export default withTranslation()(ModalNewContact);
