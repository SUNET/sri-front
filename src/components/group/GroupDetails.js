import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import GroupUpdateFormContainer from '../../containers/group/GroupUpdateForm';
import DeleteGroupMutation from '../../mutations/group/DeleteGroupMutation';
import GroupDetailsQuery from '../../queries/group/GroupDetailsQuery';

class GroupDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'groupId';
  UpdateFormContainer = GroupUpdateFormContainer;
  DetailsQuery = GroupDetailsQuery;
  entityNameProp = 'group';
  entityGetDetailsMethodName = 'getGroupById';
  classDetails = 'group-details';

  handleDelete = () => {
    DeleteGroupMutation(this.getId(), () => this.props.history.push(`/community/groups`));
  };
}

export default GroupDetails;
