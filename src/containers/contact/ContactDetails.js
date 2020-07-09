import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

import ContactDetails from '../../components/contact/ContactDetails';

const mapStateToProps = (state, props) => {
  return {
    isFromModal: props.isFromModal,
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
    deletedEntity: (contactId) => {
      dispatch(formModalActions.deletedEntity('Contact', contactId));
    },
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const ContactDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactDetails);

export default ContactDetailsContainer;
