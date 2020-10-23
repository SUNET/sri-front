import { connect } from 'react-redux';

import RoomList from '../../components/room/RoomList';

const mapStateToProps = (state, props) => {
  const { columns_visible, all_columns } = state.filterColumns.room;
  return { columns_visible, all_columns };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

const RoomListContainer = connect(mapStateToProps, mapDispatchToProps)(RoomList);

export default RoomListContainer;
