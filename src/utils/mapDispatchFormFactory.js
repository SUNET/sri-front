import FIELDS_FORMS from './formsFieldsByEntity';
import * as notifyActions from '../actions/Notify';
import * as breadcrumbsActions from '../actions/Breadcrumbs';
import * as formModalActions from '../actions/FormModal';
import * as confirmModalActions from '../actions/ConfirmModal';
import getProvider from '../components/provider/Provider';
import getCustomer from '../components/customer/Customer';
import getEndUser from '../components/endUser/EndUser';
import getHostUser from '../components/hostUser/HostUser';
import getPort from '../components/port/Port';
import getCable from '../components/cable/Cable';
import getSwitch from '../components/switch/Switch';
import getFirewall from '../components/firewall/Firewall';
import getExternalEquipment from '../components/externalEquipment/ExternalEquipment';
import getOpticalFilter from '../components/opticalFilter/OpticalFilter';
import getRouter from '../components/router/Router';
import getOpticalNode from '../components/opticalNode/OpticalNode';
import getODF from '../components/ODF/ODF';

import getService from '../components/service/Service';
import getOpticalPath from '../components/opticalPath/OpticalPath';
import getOpticalMultiplexSection from '../components/opticalMultiplexSection/OpticalMultiplexSection';
import getOpticalLink from '../components/opticalLink/OpticalLink';

import getSite from '../components/site/Site';
import getRoom from '../components/room/Room';
import getRack from '../components/rack/Rack';

const MAP_NAME_PROPERTY_METHOD = {
  notify: (dispatch) => ({
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
  }),
  breadcrumbs: (dispatch) => ({
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
  }),
  modal: (dispatch) => ({
    showModalCreateForm: (entityName) => {
      dispatch(formModalActions.showModalCreateForm(entityName));
    },
    showModalDetailForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalDetailForm(entityName, entityId));
    },
    showModalEditForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalEditForm(entityName, entityId));
    },
    editedEntity: (entityName, entityId) => {
      dispatch(formModalActions.editedEntity(entityName, entityId));
    },
    createdEntity: (entityName, entityId) => {
      dispatch(formModalActions.createdEntity(entityName, entityId));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  }),
  confirm: (dispatch) => ({
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  }),
  ownersDetails: () => ({
    getProviderById: (id) => getProvider(id),
    getCustomerById: (id) => getCustomer(id),
    getEndUserById: (id) => getEndUser(id),
    getHostUserById: (id) => getHostUser(id),
  }),
  physicalDetails: () => ({
    getCableById: (id) => getCable(id),
    getPortById: (id) => getPort(id),
    getSwitchById: (id) => getSwitch(id),
    getFirewallById: (id) => getFirewall(id),
    getExternalEquipmentById: (id) => getExternalEquipment(id),
    getOpticalFilterById: (id) => getOpticalFilter(id),
    getRouterById: (id) => getRouter(id),
    getOpticalNodeById: (id) => getOpticalNode(id),
    getODFById: (id) => getODF(id),
  }),
  locationsDetails: () => ({
    getSiteById: (id) => getSite(id),
    getRoomById: (id) => getRoom(id),
    getRackById: (id) => getRack(id),
  }),
  logicalDetails: () => ({
    getServiceById: (id) => getService(id),
    getOpticalPathById: (id) => getOpticalPath(id),
    getOpticalMultiplexSectionById: (id) => getOpticalMultiplexSection(id),
    getOpticalLinkById: (id) => getOpticalLink(id),
  }),
  portDetails: () => ({
    getPortById: (id) => getPort(id),
  }),
};

function mountDispatchPropsByList(propertiesList, dispatch) {
  return propertiesList.reduce((acc, dispatchName) => {
    const newAcc = {
      ...acc,
      ...MAP_NAME_PROPERTY_METHOD[dispatchName](dispatch),
    };
    return newAcc;
  }, {});
}

export function getDispatchPropsUpdate(dispatch, props, entityName) {
  const { dispatchPropertiesListUpdate } = FIELDS_FORMS[entityName];
  const dispatchProps = mountDispatchPropsByList(dispatchPropertiesListUpdate, dispatch);
  return dispatchProps;
}

export function getDispatchPropsCreate(dispatch, props, entityName) {
  const { dispatchPropertiesListCreate } = FIELDS_FORMS[entityName];
  const dispatchProps = mountDispatchPropsByList(dispatchPropertiesListCreate, dispatch);
  return dispatchProps;
}
