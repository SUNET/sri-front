import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as confirmModalActions from '../../actions/ConfirmModal';

import OpticalLinkDetails from '../../components/opticalLink/OpticalLinkDetails';

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
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const OpticalLinkDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(OpticalLinkDetails);

export default OpticalLinkDetailsContainer;
