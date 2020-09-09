import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as confirmModalActions from '../../actions/ConfirmModal';

import PeeringGroupDetails from '../../components/peeringGroup/PeeringGroupDetails';

const mapStateToProps = (state, props) => {
  return {
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

const PeeringGroupDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PeeringGroupDetails);

export default PeeringGroupDetailsContainer;
