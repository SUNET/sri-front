import { connect } from 'react-redux';
import RoomUpdateForm from '../../components/room/RoomUpdateForm';

import { getUpdateProps } from '../../utils/mapPropsFormFactory';
import { getDispatchPropsUpdate } from '../../utils/mapDispatchFormFactory';

const ENTITY_NAME = 'room';

const mapStateToProps = (state, props) => {
  const { room } = props;
  const roomWithRoomsAndRacksSeparates = {
    ...room,
    sites: room.has?.filter((el) => el.__typename === 'Site'),
    racks: room.has?.filter((el) => el.__typename === 'Rack'),
  };
  const mappedStateToProps = getUpdateProps(ENTITY_NAME, { ...props, room: roomWithRoomsAndRacksSeparates }, state);
  return mappedStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const mappedDispatchToProps = getDispatchPropsUpdate(dispatch, props, ENTITY_NAME);
  return mappedDispatchToProps;
};

const RoomUpdateFormContainer = connect(mapStateToProps, mapDispatchToProps)(RoomUpdateForm);

export default RoomUpdateFormContainer;
