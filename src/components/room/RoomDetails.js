import _BasicDetailsParentClass from '../common/_BasicDetailsParentClass';
import RoomUpdateFormContainer from '../../containers/room/RoomUpdateForm';
import DeleteRoomMutation from '../../mutations/room/DeleteRoomMutation';
import RoomDetailsQuery from '../../queries/room/RoomDetailsQuery';

class RoomDetails extends _BasicDetailsParentClass {
  ID_ENTITY_KEY = 'roomId';
  UpdateFormContainer = RoomUpdateFormContainer;
  DetailsQuery = RoomDetailsQuery;
  entityNameProp = 'room';
  entityGetDetailsMethodName = 'getRoomById';
  classDetails = 'room-details';

  handleDelete = () => {
    DeleteRoomMutation(this.getId(), () =>
      this.props.history.push('/network/location-rooms'),
    );
  };
}

export default RoomDetails;
