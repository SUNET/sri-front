import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as confirmModalActions from '../../actions/ConfirmModal';

import SwitchDetails from '../../components/switch/SwitchDetails';

const mapStateToProps = (state, props) => {
  return {
    isDeleteConfirmed: state.confirmModal.confirmDelete,
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

const SwitchDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(SwitchDetails);

export default SwitchDetailsContainer;
