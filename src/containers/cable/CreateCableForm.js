import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateCableForm from '../../components/cable/CreateCableForm';

import getProvider from '../../components/provider/Provider';
import getPort from '../../components/port/Port';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createCableInModal' : 'createCable';
  const createCableSelector = formValueSelector('createCable');
  return {
    form: formName,
    fields: getFormMeta(formName)(state),
    formSyncErrors: getFormSyncErrors(formName)(state),
    name: createCableSelector(state, 'name'),
    cable_length: createCableSelector(state, 'cable_length'),
    provider_id: createCableSelector(state, 'provider_id'),
    providerObj: createCableSelector(state, 'providerObj'),
    connections: createCableSelector(state, 'connections'),
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
    showModalCreateForm: (entityName) => {
      dispatch(formModalActions.showModalCreateForm(entityName));
    },
    showModalDetailForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalDetailForm(entityName, entityId));
    },
    showModalEditForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalEditForm(entityName, entityId));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    createdEntity: (entityName, entityId) => {
      dispatch(formModalActions.createdEntity(entityName, entityId));
    },
  };
};

const CreateCableFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCableForm);

export default CreateCableFormContainer;
