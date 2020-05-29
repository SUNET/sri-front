import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';

import ContactDetails from '../../components/contact/ContactDetails';

const mapStateToProps = (state, props) => {
  return {
    isInsideModal: state.formModal.showModalForm,
    idFromModal: state.formModal.entityId,
    history: props.history,
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
  };
};

const ContactDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactDetails);

export default ContactDetailsContainer;
