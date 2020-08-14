import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import PeeringGroupUpdateFormContainer from '../../containers/peeringGroup/PeeringGroupUpdateForm';
import DeletePeeringGroupMutation from '../../mutations/peeringGroup/DeletePeeringGroupMutation';
import PeeringGroupDetailsQuery from '../../queries/peeringGroup/PeeringGroupDetailsQuery';

class PeeringGroupDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'peeringGroupId';
  UpdateFormContainer = PeeringGroupUpdateFormContainer;
  DetailsQuery = PeeringGroupDetailsQuery;
  entityNameProp = 'peeringGroup';
  entityGetDetailsMethodName = 'getPeeringGroupById';
  classDetails = 'peeringGroup-details';

  handleDelete = () => {
    DeletePeeringGroupMutation(this.getId(), () => this.props.history.push(`/network/peeringGroups`));
  };
}

export default PeeringGroupDetails;
