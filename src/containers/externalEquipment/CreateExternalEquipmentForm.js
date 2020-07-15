import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';
import CreateExternalEquipmentForm from '../../components/externalEquipment/CreateExternalEquipmentForm';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';

import getProvider from '../../components/provider/Provider';
import getCustomer from '../../components/customer/Customer';
import getEndUser from '../../components/endUser/EndUser';
import getSiteOwner from '../../components/siteOwner/SiteOwner';
import getPort from '../../components/port/Port';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createExternalEquipmentInModal' : 'createExternalEquipment';
  const updateExternalEquipmentSelector = formValueSelector(formName);
  return {
    form: formName,
    fields: getFormMeta('createExternalEquipment')(state),
    formSyncErrors: getFormSyncErrors('createExternalEquipment')(state),
    name: updateExternalEquipmentSelector(state, 'name'),
    rack_units: updateExternalEquipmentSelector(state, 'rack_units'),
    rack_position: updateExternalEquipmentSelector(state, 'rack_position'),

    owner: updateExternalEquipmentSelector(state, 'owner'),
    ports: updateExternalEquipmentSelector(state, 'ports'),
    getProviderById: (id) => getProvider(id),
    getCustomerById: (id) => getCustomer(id),
    getEndUserById: (id) => getEndUser(id),
    getSiteOwnerById: (id) => getSiteOwner(id),
    getPortById: (id) => getPort(id),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
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
  };
};

const CreateExternalEquipmentFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateExternalEquipmentForm);

export default CreateExternalEquipmentFormContainer;
