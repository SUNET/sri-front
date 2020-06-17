import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import CableUpdateForm from '../../components/cable/CableUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import { getProvider } from '../../components/provider/Provider';
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
  const initialValues = {
    id: cable.id,
    name: cable.name,
    description: cable.description,
    cable_type: cable.cable_type ? cable.cable_type.value : undefined,
    cableTypeObj: cable.cable_type,
    providerObj: cable.provider ? cable.provider : undefined,
    provider_id: cable.provider ? cable.provider.id : undefined,
    connections: formatterSubInputs(cable.ports),
  };
  return {
    form: formName,
    initialValues,
    name: updateCableSelector(state, 'name'),
    description: updateCableSelector(state, 'description'),
    cable_type: updateCableSelector(state, 'cable_type'),
    cableTypeObj: updateCableSelector(state, 'cableTypeObj'),
    provider_id: updateCableSelector(state, 'provider_id'),
    providerObj: updateCableSelector(state, 'providerObj'),
    connections: updateCableSelector(state, 'connections'),
    formSyncErrors: getFormSyncErrors(formName)(state),
    fields: getFormMeta(formName)(state),
    getProvider: (id) => getProvider(id),
    getPortById: (id) => getPort(id),
    isFromModal: props.isFromModal,
    entityInModalName: state.formModal.entityName,
    editedSubEntity: state.formModal.entityEditedId,
    entitySavedId: state.formModal.entitySavedId,
    entityRemovedId: state.formModal.entityRemovedId,
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
    showModalUpdateForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalUpdateForm(entityName, entityId));
    },
  };
};

const CableUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CableUpdateForm);

export default CableUpdateFormContainer;
