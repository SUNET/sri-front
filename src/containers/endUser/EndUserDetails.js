import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

import EndUserDetails from '../../components/endUser/EndUserDetails';

const mapStateToProps = (state, props) => {
  return {
    idFromModal: state.formModal.entityId,
    history: props.history,
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
    deletedEntity: (customerId) => {
      dispatch(formModalActions.deletedEntity('Customer', customerId));
    },
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const EndUserDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(EndUserDetails);

export default EndUserDetailsContainer;
