import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';

import * as notifyActions from '../../actions/Notify';
import * as formModalActions from '../../actions/FormModal';
import CreateContactForm from '../../components/contact/CreateContactForm';

const mapStateToProps = (state, props) => {
  const updateContactSelector = formValueSelector('createContact');
  return {
    fields: getFormMeta('createContact')(state),
    formSyncErrors: getFormSyncErrors('createContact')(state),
    name: updateContactSelector(state, 'name'),
    first_name: updateContactSelector(state, 'first_name'),
    last_name: updateContactSelector(state, 'last_name'),
    organizationValues: updateContactSelector(state, 'organizations'),
    shownInModal: state.formModal.showModalForm,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    hideContactModal: () => {
      dispatch(formModalActions.hideModalForm(props.index));
    },
  };
};

const CreateContactFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateContactForm);

export default CreateContactFormContainer;
