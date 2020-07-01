import { connect } from 'react-redux';
import { getFormMeta, getFormSyncErrors, formValueSelector } from 'redux-form';
import { getContact } from '../../components/contact/Contact';

import * as actions from '../../actions/Notify';
import CreateGroupForm from '../../components/group/CreateGroupForm';
import * as formModalActions from '../../actions/FormModal';

const mapStateToProps = (state) => {
  const updateGroupSelector = formValueSelector('createGroup');
  return {
    fields: getFormMeta('createGroup')(state),
    formSyncErrors: getFormSyncErrors('createGroup')(state),
    memberValues: updateGroupSelector(state, 'members'),
    name: updateGroupSelector(state, 'name'),
    entityRemovedId: state.formModal.entityRemovedId,
    entitySavedId: state.formModal.entitySavedId,
    getContact: (id) => getContact(id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notify: (msg, level) => {
      dispatch(actions.notify(msg, level));
    },
    showNewContactForm: () => {
      dispatch(formModalActions.showModalCreateForm('Contact'));
    },
    hideModalForm: () => {
      dispatch(formModalActions.hideModalForm());
    },
  };
};

const CreateGroupFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);

export default CreateGroupFormContainer;
