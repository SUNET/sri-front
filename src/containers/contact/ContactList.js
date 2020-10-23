import { connect } from 'react-redux';

import ContactList from '../../components/contact/ContactList';

const mapStateToProps = (state, props) => {
  let { columns_visible, all_columns } = state.filterColumns.contact;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactListContainer;
