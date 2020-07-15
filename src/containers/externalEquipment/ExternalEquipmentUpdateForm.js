import { connect } from 'react-redux';
import ExternalEquipmentUpdateForm from '../../components/externalEquipment/ExternalEquipmentUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as formModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

import getProvider from '../../components/provider/Provider';
import getCustomer from '../../components/customer/Customer';
import getEndUser from '../../components/endUser/EndUser';
import getSiteOwner from '../../components/siteOwner/SiteOwner';
import getPort from '../../components/port/Port';

function formatterSubInputs(subInputs) {
  return subInputs.map((element) => ({
    ...element,
    status: 'saved',
    origin: 'store',
  }));
}

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateExternalEquipmentInModal' : 'updateExternalEquipment';
  const updateExternalEquipmentSelector = formValueSelector(formName);
  const { externalEquipment } = props;

  const initialValues = {
    id: externalEquipment.id,
    name: externalEquipment.name,
    description: externalEquipment.description,
    // General info
    rack_units: externalEquipment.rack_units,
    rack_position: externalEquipment.rack_position,

    owner: externalEquipment.owner ? formatterSubInputs([externalEquipment.owner]) : [],
    ports: formatterSubInputs(externalEquipment.ports),
  };
  return {
    form: formName,
    initialValues,
    name: updateExternalEquipmentSelector(state, 'name'),
    description: updateExternalEquipmentSelector(state, 'description'),
    formSyncErrors: getFormSyncErrors('updateExternalEquipment')(state),
    fields: getFormMeta('updateExternalEquipment')(state),
    rack_units: updateExternalEquipmentSelector(state, 'rack_units'),
    rack_position: updateExternalEquipmentSelector(state, 'rack_position'),

    owner: updateExternalEquipmentSelector(state, 'owner'),
    ports: updateExternalEquipmentSelector(state, 'ports'),
    getProviderById: (id) => getProvider(id),
    getCustomerById: (id) => getCustomer(id),
    getEndUserById: (id) => getEndUser(id),
    getSiteOwnerById: (id) => getSiteOwner(id),
    getPortById: (id) => getPort(id),
    // these props are because this form has entities listed as attributes
    isDeleteConfirmed: state.confirmModal.confirmDelete,
    confirmModalType: state.confirmModal.type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
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
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    // these methods are because this form has entities listed as attributes
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};
const ExternalEquipmentUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(ExternalEquipmentUpdateForm);

export default ExternalEquipmentUpdateFormContainer;
