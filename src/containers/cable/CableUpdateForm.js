import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import CableUpdateForm from '../../components/cable/CableUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as confirmModalActions from '../../actions/ConfirmModal';
import getProvider from '../../components/provider/Provider';
import getPort from '../../components/port/Port';

function formatterSubInputs(subInputs) {
  return subInputs.map((element) => ({
    ...element,
    status: 'saved',
    origin: 'store',
  }));
}

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updateCableInModal' : 'updateCable';
  const updateCableSelector = formValueSelector(formName);
  const { cable } = props;
  console.log('cable: ', cable);
  const initialValues = {
    id: cable.id,
    name: cable.name,
    description: cable.description,
    cable_type: cable.cable_type ? cable.cable_type.value : undefined,
    cableTypeObj: cable.cable_type,
    cable_length: cable.cable_length,
    providerObj: cable.provider ? cable.provider : undefined,
    provider_id: cable.provider ? cable.provider.id : undefined,
    connections: formatterSubInputs(cable.ports || []),
  };
  return {
    form: formName,
    initialValues,
    name: updateCableSelector(state, 'name'),
    description: updateCableSelector(state, 'description'),
    cable_type: updateCableSelector(state, 'cable_type'),
    cable_length: updateCableSelector(state, 'cable_length'),
    cableTypeObj: updateCableSelector(state, 'cableTypeObj'),
    provider_id: updateCableSelector(state, 'provider_id'),
    providerObj: updateCableSelector(state, 'providerObj'),
    connections: updateCableSelector(state, 'connections'),
    formSyncErrors: getFormSyncErrors(formName)(state),
    fields: getFormMeta(formName)(state),
    getProvider: (id) => getProvider(id),
    getPortById: (id) => getPort(id),
    isFromModal: Boolean(props.isFromModal),
    isEditModeModal: Boolean(props.isFromModal && state.formModal.editing),
    entityInModalName: state.formModal.entityName,
    editedSubEntity: state.formModal.entityEditedId,
    entitySavedId: state.formModal.entitySavedId,
    entityRemovedId: state.formModal.entityRemovedId,
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
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
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
    // these methods are because this form has entities listed as attributes
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const CableUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CableUpdateForm);

export default CableUpdateFormContainer;
