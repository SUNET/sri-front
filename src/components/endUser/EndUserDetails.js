import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import EndUserUpdateFormContainer from '../../containers/endUser/EndUserUpdateForm';
import DeleteEndUserMutation from '../../mutations/endUser/DeleteEndUserMutation';
import EndUserDetailsQuery from '../../queries/endUser/EndUserDetailsQuery';

class EndUserDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'endUserId';
  UpdateFormContainer = EndUserUpdateFormContainer;
  DetailsQuery = EndUserDetailsQuery;
  entityNameProp = 'endUser';
  entityGetDetailsMethodName = 'getEndUserById';
  classDetails = 'endUser-details';

  handleDelete = () => {
    DeleteEndUserMutation(this.getId(), () => this.props.history.push(`/network/endUsers`));
  };
}

export default EndUserDetails;
