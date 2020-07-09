import { connect } from 'react-redux';
import GroupUpdateForm from '../../components/group/GroupUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import uuidv4 from 'uuid/v4';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import { getContact } from '../../components/contact/Contact';
import * as FormModalActions from '../../actions/FormModal';
import * as confirmModalActions from '../../actions/ConfirmModal';

const mapStateToProps = (state, props) => {
  const updateGroupSelector = formValueSelector('updateGroup');
  const { group } = props;

  const initialValues = {
    id: group.id,
    name: group.name,
    description: group.description,
    members: group.contacts
      ? group.contacts.map((member) => {
          return {
            id: member.id,
            first_name: member.first_name,
            last_name: member.last_name,
            name: `${member.first_name} ${member.last_name}`,
            contact_type: member.contact_type,
            organization: member.roles,
            organization_label: member.roles.length ? member.roles.map((elem) => elem.end) : [],
            group_relation_id: member.relation_id,
            email: member.emails,
            email_obj: member.emails,
            phone: member.phones,
            phone_obj: member.phones,
            status: 'saved',
            origin: 'store',
            created: true,
            key: member.id,
          };
        })
      : [
          {
            name: '',
            organization: '',
            email: '',
            phone: '',
            key: uuidv4(),
            created: false,
            status: 'editing',
          },
        ],
  };
  return {
    initialValues,
    name: updateGroupSelector(state, 'name'),
    description: updateGroupSelector(state, 'description'),
    memberValues: updateGroupSelector(state, 'members'),
    formSyncErrors: getFormSyncErrors('updateGroup')(state),
    fields: getFormMeta('updateGroup')(state),
    getContact: (id) => getContact(id),
    entityRemovedId: state.formModal.entityRemovedId,
    entitySavedId: state.formModal.entitySavedId,
    // these props are because this form has entities listed as attributes
    isDeleteConfirmed: state.confirmModal.confirmDelete,
    confirmModalType: state.confirmModal.type,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    notify: (msg, level) => {
      dispatch(notifyActions.notify(msg, level));
    },
    moveToDetails: (entityData) => {
      dispatch(breadcrumbsActions.moveToDetails(entityData));
    },
    getOutOfDetails: (entityData) => {
      dispatch(breadcrumbsActions.getOutOfDetails(entityData));
    },
    showNewContactForm: () => {
      dispatch(FormModalActions.showModalCreateForm('Contact'));
    },
    hideContactForm: () => {
      dispatch(FormModalActions.hideModalForm());
    },
    showContactDetailForm: (idContact) => {
      dispatch(FormModalActions.showModalDetailForm('Contact', idContact));
    },
    showContactEditForm: (idContact) => {
      dispatch(FormModalActions.showModalEditForm('Contact', idContact));
    },
    // these methods are because this form has entities listed as attributes
    showModalConfirm: (type) => {
      dispatch(confirmModalActions.showModalConfirm(type));
    },
    hideModalConfirm: () => {
      dispatch(confirmModalActions.hideModalConfirm());
    },
  };
};

const GroupUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(GroupUpdateForm);

export default GroupUpdateFormContainer;
