import { connect } from 'react-redux';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import PortUpdateForm from '../../components/port/PortUpdateForm';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import * as formModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';
import getCable from '../../components/cable/Cable';
import getPort from '../../components/port/Port';
import getSwitch from '../../components/switch/Switch';
import getFirewall from '../../components/firewall/Firewall';

function formatterSubInputs(subInputs) {
  return subInputs.map((element) => ({
    ...element,
    status: 'saved',
    origin: 'store',
  }));
}

const mapStateToProps = (state, props) => {
  const formName = props.isFromModal ? 'updatePortInModal' : 'updatePort';
  const updatePortSelector = formValueSelector(formName);
  const { port } = props;

  const initialValues = {
    id: port.id,
    name: port.name,
    description: port.description,
    port_type: port.port_type ? port.port_type.value : undefined,
    portTypeObj: port.port_type,
    parents: formatterSubInputs(port.parent),
    connectedTo: formatterSubInputs(port.connected_to),
  };

  return {
    initialValues,
    form: formName,
    name: updatePortSelector(state, 'name'),
    description: updatePortSelector(state, 'description'),
    port_type: updatePortSelector(state, 'port_type'),
    portTypeObj: updatePortSelector(state, 'portTypeObj'),
    formSyncErrors: getFormSyncErrors(formName)(state),
    fields: getFormMeta(formName)(state),
    parents: updatePortSelector(state, 'parents'),
    connectedTo: updatePortSelector(state, 'connectedTo'),
    getCableById: (id) => getCable(id),
    getPortById: (id) => getPort(id),
    getSwitchById: (id) => getSwitch(id),
    getFirewallById: (id) => getFirewall(id),
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

const mapDispatchToProps = (dispatch) => {
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

const PortUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(PortUpdateForm);

export default PortUpdateFormContainer;
