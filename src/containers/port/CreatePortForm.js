import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as actions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreatePortForm from '../../components/port/CreatePortForm';
import getCable from '../../components/cable/Cable';
import getPort from '../../components/port/Port';

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'createPortInModal' : 'createPort';
  const updatePortSelector = formValueSelector('createPort');
  return {
    form: formName,
    fields: getFormMeta(formName)(state),
    formSyncErrors: getFormSyncErrors(formName)(state),
    name: updatePortSelector(state, 'name'),
    getCableById: (id) => getCable(id),
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
      dispatch(actions.notify(msg, level));
    },
    showModalCreateForm: (entityName) => {
      dispatch(formModalActions.showModalCreateForm(entityName));
    },
    showModalUpdateForm: (entityName, entityId) => {
      dispatch(formModalActions.showModalUpdateForm(entityName, entityId));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    createdEntity: (entityName, entityId) => {
      dispatch(formModalActions.createdEntity(entityName, entityId));
    },
  };
};

const CreatePortFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePortForm);

export default CreatePortFormContainer;
