import { connect } from 'react-redux';

import { showNewContactForm } from '../actions/ComponentFormRow';
import CreateOrganization from '../../components/organization/CreateOrganization';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    showNewContactForm: (index) => dispatch(showNewContactForm(index)),
  };
};

const CreateOrganizationContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrganization);

export default CreateOrganizationContainer;
