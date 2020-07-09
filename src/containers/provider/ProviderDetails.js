import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

import ProviderDetails from '../../components/provider/ProviderDetails';

const mapStateToProps = (state, props) => {
  return {
    idFromModal: state.formModal.entityId,
    history: props.history,
    isDeleteConfirmed: state.confirmModal.confirmDelete,
    confirmModalType: state.confirmModal.type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
    deletedEntity: (providerId) => {
      dispatch(formModalActions.deletedEntity('Provider', providerId));
    },
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const ProviderDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProviderDetails);

export default ProviderDetailsContainer;
