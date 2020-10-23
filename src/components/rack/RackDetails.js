import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import RackUpdateFormContainer from '../../containers/rack/RackUpdateForm';
import DeleteRackMutation from '../../mutations/rack/DeleteRackMutation';
import RackDetailsQuery from '../../queries/rack/RackDetailsQuery';

class RackDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'rackId';
  UpdateFormContainer = RackUpdateFormContainer;
  DetailsQuery = RackDetailsQuery;
  entityNameProp = 'rack';
  entityGetDetailsMethodName = 'getRackById';
  classDetails = 'rack-details';

  handleDelete = () => {
    DeleteRackMutation(this.getId(), () =>
      this.props.history.push('/network/location-racks'),
    );
  };
}

export default RackDetails;
