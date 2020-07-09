import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as confirmModalActions from '../../actions/ConfirmModal';

import GroupDetails from '../../components/group/GroupDetails';

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

const GroupDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(GroupDetails);

export default GroupDetailsContainer;
