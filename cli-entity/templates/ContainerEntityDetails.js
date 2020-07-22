import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as confirmModalActions from '../../actions/ConfirmModal';

import __EntityClassName__Details from '../../components/__entityName__/__EntityClassName__Details';

const mapStateToProps = (state, props) => {
  return {};
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

const __EntityClassName__DetailsContainer = connect(mapStateToProps, mapDispatchToProps)(__EntityClassName__Details);

export default __EntityClassName__DetailsContainer;
