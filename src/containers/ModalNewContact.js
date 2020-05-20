import { connect } from 'react-redux';

import ModalNewContact from '../components/contact/CreateContactForModal/ModalNewContact';

import { hideNewContactForm } from '../actions/ComponentFormRow';

const mapStateToProps = (state, props) => {
  return {
    is_contact_form_visible: state.componentFormRow.show_contact_form,
    contact_details_id: state.componentFormRow.contact_details_id,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    hideContactModal: () => dispatch(hideNewContactForm(props.index)),
  };
};

const ModalNewContactContainer = connect(mapStateToProps, mapDispatchToProps)(ModalNewContact);

export default ModalNewContactContainer;
