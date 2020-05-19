import { connect } from 'react-redux';
import GroupUpdateForm from '../../components/group/GroupUpdateForm';
import { formValueSelector, getFormMeta, getFormSyncErrors } from 'redux-form';
import uuidv4 from 'uuid/v4';
import * as notifyActions from '../../actions/Notify';
import * as breadcrumbsActions from '../../actions/Breadcrumbs';
import { getContact } from '../../components/contact/Contact';
import { showNewContactForm } from '../../actions/ComponentFormRow';

const mapStateToProps = (state, props) => {
  const updateGroupSelector = formValueSelector('updateGroup');
  const { group } = props;

  const initialValues = {
    id: group.id,
    name: group.name,
    description: group.description,
    members: group.contacts
      ? group.contacts.map((member) => {
          let group_relation_id_obj = group.contact_relations.find((relation) => relation.entity_id === member.id);
          // TODO:
          // relation_id vendrá directamente de member:
          // por tanto:
          // const group_relation_id_obj = member.relation_id
          // console.log(group);
          // console.log(member);
          // console.log(group_relation_id_obj);

          // member.outgoing &&
          // member.outgoing.find((relation_node) => {
          //     return (
          //         relation_node.relation.type === "Member_of" &&
          //         relation_node.relation.end.id === group.id
          //     );
          // });
          return {
            id: member.id,
            name: member.first_name + ' ' + member.last_name,
            contact_type: member.contact_type,
            organization: member.roles,
            organization_label: member.roles.length ? member.roles.map((elem) => elem.end) : [],
            group_relation_id: group_relation_id_obj && group_relation_id_obj.relation_id,
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
    showNewContactForm,
  };
};

const GroupUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(GroupUpdateForm);

export default GroupUpdateFormContainer;
