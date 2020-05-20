import { connect } from 'react-redux';
import * as notifyActions from '../../actions/Notify';
import * as componentFormRow from '../../actions/ComponentFormRow';

import ContactDetails from '../../components/contact/ContactDetails';

const mapStateToProps = (state, props) => {
  return {
    is_contact_form_visible: state.componentFormRow.show_contact_form,
    contact_details_id: state.componentFormRow.contact_details_id,
    history: props.history,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideNewContactForm: () => {
      dispatch(componentFormRow.hideNewContactForm());
    },
    deleteContact: (contactId) => {
      dispatch(componentFormRow.deleteContact(contactId));
    },
  };
};

const ContactDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ContactDetails);

export default ContactDetailsContainer;
